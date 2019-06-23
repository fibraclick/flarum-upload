import SettingsModal from 'flarum/components/SettingsModal';

export default class UploadSettingsModal extends SettingsModal {
	className() {
		return 'UploadSettingsModal Modal--small';
	}

	title() {
		return app.translator.trans('botfactoryit-upload.admin.settings.title');
	}

	form() {
		return [
			<div className="Form-group">
				<label>Storage absolute path (including /)</label>
				<input className="FormControl" bidi={this.setting('botfactoryit-upload.storage-path')}/>
			</div>,

			<div className="Form-group">
				<label>URL prefix (optional /)</label>
				<input className="FormControl" bidi={this.setting('botfactoryit-upload.prefix')}/>
			</div>
		];
	}
}
