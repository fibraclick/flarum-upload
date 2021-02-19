import Component from 'flarum/Component';
import icon from 'flarum/helpers/icon';
import LoadingIndicator from 'flarum/components/LoadingIndicator';

export default class UploadButton extends Component {
    oncreate(vnode) {
        super.oncreate(vnode)

        this.isLoading = false;
        this.isSuccess = false;

        this.isPasteListenerAttached = false;
    }

    onupdate(vnode) {
        if (!this.isPasteListenerAttached) {
            this.isPasteListenerAttached = true;
            this.attrs.textArea.el.addEventListener('paste', this.paste.bind(this));
        }
    }

    view() {
        let attrs = {
            className: 'Button hasIcon botfactoryit-upload-button',
            title: app.translator.trans('botfactoryit-upload.forum.upload'),
            oncreate: (el) => {
                $(el.dom).tooltip();
            }
        };

        let buttonIcon;
        if (this.isLoading) buttonIcon = LoadingIndicator.component({ className: 'Button-icon' });
        else if (this.isSuccess) buttonIcon = icon('fas fa-check green', { className: 'Button-icon' });
        else buttonIcon = icon('far fa-image', { className: 'Button-icon' });

        let label = '';
        if (this.isLoading) label = app.translator.trans('botfactoryit-upload.forum.loading');
        else if (this.isSuccess) label = app.translator.trans('botfactoryit-upload.forum.done');

        // When there is no label, the component element should be shown as a square button
        if (label === '') {
            attrs.className += ' Button--icon';
        }

        return m('div', attrs, [
                buttonIcon,
                m('span', { className: 'Button-label' }, label),
                m('form#botfactoryit-upload-form', [
                    m('input', {
                        type: 'file',
                        accept: 'image/*',
                        onchange: this.formUpload.bind(this),
                        // disable button while doing things
                        disabled: this.isLoading || this.isSuccess || this.isError
                    })
                ])
            ]
        );
    }

    paste(e) {
        if (this.isLoading) return;

        if (e.clipboardData && e.clipboardData.items) {
            let item = e.clipboardData.items[0];

            if (!item.type.startsWith('image')) {
                return;
            }

            let file = item.getAsFile();
            this.upload(file);
        }
    }

    formUpload(e) {
        let file = $(e.target)[0].files[0];
        this.upload(file);
    }

    upload(file) {
        $(this.element).tooltip('hide'); // force removal of the tooltip
        this.isLoading = true;
        m.redraw();

        let did = 0;

        if (app.current.discussion) {
            did = app.current.discussion.id();
        }

        let formData = new FormData();
        formData.append('image', file);
        formData.append('d', did);

        app.request({
            method: 'POST',
            url: app.forum.attribute('apiUrl') + '/upload',
            serialize: raw => raw,
            body: formData,
            errorHandler: (err) => this.error(err)
        }).then(this.success.bind(this));
    }

    success(response) {
        // Clear the upload form
        $('#botfactoryit-upload-form input').val('');

        this.isLoading = false;
        this.isSuccess = true;
        m.redraw();

        let fileName = response.fileName;
        let bbcode = `[IMMAGINE]${fileName}[/IMMAGINE]`;

        let cursorPosition = this.attrs.textArea.getSelectionRange()[0];

        if (cursorPosition === 0) {
            bbcode += '\n\n';
        }
        else {
            bbcode = `\n\n${bbcode}\n\n`;
        }

        // Trim the textarea content and insert the bbcode
        this.attrs.textArea.setValue(this.attrs.textArea.el.value.trim());
        this.attrs.textArea.insertAtCursor(bbcode);

        // After a bit, re-enable upload
        setTimeout(() => {
            this.isSuccess = false;
            m.redraw();
        }, 2000);
    }

    error(err) {
        // Output the error to the console, for debugging purposes
        console.error(err);

        // Clear the upload form
        $('#botfactoryit-upload-form input').val('');

        this.isLoading = false;
        m.redraw();

        app.alerts.show({ type: "error" }, this.errorToMessage(err));
    }

    errorToMessage(err) {
        let key;

        if (err.status === 415) {
            key = 'botfactoryit-upload.forum.error.unsupported';
        }
        else if (err.status === 400 || err.status === 413) {
            key = 'botfactoryit-upload.forum.error.too-big';
        }
        else {
            key = 'core.lib.error.generic_message';
        }

        return app.translator.trans(key);
    }
}
