import app from 'flarum/app';

app.initializers.add('botfactoryit-upload', () => {
    app.extensionData
        .for('botfactoryit-upload')
        .registerSetting(
            {
                setting: 'botfactoryit-upload.storage-path',
                label: 'Storage absolute path (including /)',
                type: 'text'
            }
        )
        .registerSetting(
            {
                setting: 'botfactoryit-upload.prefix',
                label: 'URL prefix (without /)',
                type: 'text'
            }
        )
});
