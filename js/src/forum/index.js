import app from 'flarum/forum/app';
import {extend} from 'flarum/common/extend';
import TextEditor from 'flarum/common/components/TextEditor';
import UploadButton from './components/UploadButton';

app.initializers.add('fibraclick-upload', () => {
    extend(TextEditor.prototype, 'controlItems', function (items) {
        items.add(
            'imgur-upload',
            <UploadButton textArea={this.$().parents('.Composer')[0]}
                          editor={this.attrs.composer.editor}/>
        );
    });

    extend(TextEditor.prototype, 'toolbarItems', function (items) {
        if (items.items.markdown) {
            let index = items.items.markdown.content.children.findIndex(x => x.attrs.icon == 'fas fa-image');
            items.items.markdown.content.children.splice(index, 1);
        }
    });
});
