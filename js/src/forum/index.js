import app from 'flarum/app';
import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import UploadButton from './components/UploadButton';

app.initializers.add('botfactoryit-upload', () => {
    extend(TextEditor.prototype, 'controlItems', function(items) {
        items.add('botfactoryit-upload', <UploadButton textArea={this.attrs.composer.editor} />);
    });

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        if (items.items.markdown) {
            let index = items.items.markdown.content.children.findIndex(x => x.attrs.icon == 'fas fa-image');
            items.items.markdown.content.children.splice(index, 1);
        }
    });
});
