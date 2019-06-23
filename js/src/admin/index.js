import app from 'flarum/app';
import UploadSettingsModal from './components/UploadSettingsModal';

app.initializers.add('botfactoryit-upload', () => {
  app.extensionSettings['botfactoryit-upload'] = () => app.modal.show(new UploadSettingsModal());
});
