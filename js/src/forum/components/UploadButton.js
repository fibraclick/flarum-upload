import app from 'flarum/forum/app';
import Component from 'flarum/common/Component';
import LoadingIndicator from 'flarum/common/components/LoadingIndicator';
import Button from 'flarum/common/components/Button';
import classList from "flarum/common/utils/classList";
import DiscussionPage from "flarum/forum/components/DiscussionPage";
import Tooltip from 'flarum/common/components/Tooltip';

export default class UploadButton extends Component {
    oninit(vnode) {
        super.oninit(vnode)

        this.isLoading = false;
        this.isSuccess = false;

        this.isPasteListenerAttached = false;
    }

    oncreate(vnode) {
        super.oncreate(vnode);
    }

    onupdate(vnode) {
        super.onupdate(vnode);

        if (!this.isPasteListenerAttached) {
            this.isPasteListenerAttached = true;
            this.attrs.textArea.addEventListener('paste', this.paste.bind(this));
        }
    }

    view() {
        let buttonIcon;
        if (this.isSuccess) buttonIcon = 'fas fa-check green';
        else if (this.isError) buttonIcon = 'fas fa-times red';
        else if (!this.isLoading) buttonIcon = 'far fa-image';

        let label = '';
        if (this.isLoading) label = app.translator.trans('fibraclick-upload.forum.loading');
        else if (this.isSuccess) label = app.translator.trans('fibraclick-upload.forum.done');

        return <Tooltip text={app.translator.trans('fibraclick-upload.forum.upload')}>
            <Button
                className={classList([
                    'Button',
                    'hasIcon',
                    'fibraclick-upload-button',
                    label === '' && 'Button--icon',
                ])}
                icon={buttonIcon}
                onclick={this.buttonClicked.bind(this)}>
                {this.isLoading && <LoadingIndicator size="small" display="inline" />}
                <span className="Button-label">{label}</span>
                <form>
                    <input type="file" accept="image/*" onchange={this.formUpload.bind(this)}
                           disabled={this.isLoading || this.isSuccess || this.isError}/>
                </form>
            </Button>
        </Tooltip>
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

    buttonClicked(e) {
        this.$('input').click();
    }

    formUpload(e) {
        const files = this.$('input').prop('files');

        if (files.length === 0) {
            return;
        }

        this.upload(files[0]);
    }

    upload(file) {
        this.isLoading = true;
        m.redraw();

        let did = 0;

        if (app.current.matches(DiscussionPage)) {
            did = app.current.data.discussion.id();
        }

        const formData = new FormData();
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
        this.$('input').val('');

        this.isLoading = false;
        this.isSuccess = true;
        m.redraw();

        let fileName = response.fileName;
        let bbcode = `[IMMAGINE]${fileName}[/IMMAGINE]`;

        let cursorPosition = this.attrs.editor.getSelectionRange()[0];

        if (cursorPosition === 0) {
            bbcode += '\n\n';
        } else {
            bbcode = `\n\n${bbcode}\n\n`;
        }

        // Insert the bbcode
        this.attrs.editor.insertAtCursor(bbcode);

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
        this.$('input').val('');

        this.isLoading = false;
        m.redraw();

        app.alerts.show({type: "error"}, this.errorToMessage(err));
    }

    errorToMessage(err) {
        let key;

        if (err.status === 415) {
            key = 'fibraclick-upload.forum.error.unsupported';
        } else if (err.status === 400 || err.status === 413) {
            key = 'fibraclick-upload.forum.error.too-big';
        } else {
            key = 'core.lib.error.generic_message';
        }

        return app.translator.trans(key);
    }
}
