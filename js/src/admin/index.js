import app from 'flarum/admin/app';

app.initializers.add('fibraclick-upload', () => {
    app.extensionData
        .for('fibraclick-upload')
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
