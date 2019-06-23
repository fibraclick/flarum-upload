import app from 'flarum/app';
import { extend } from 'flarum/extend';
import TextEditor from 'flarum/components/TextEditor';
import UploadButton from './components/UploadButton';

app.initializers.add('botfactoryit-upload', () => {
    extend(TextEditor.prototype, 'controlItems', function(items) {
        items.add('botfactoryit-upload', <UploadButton textArea={this} />);
    });
});
