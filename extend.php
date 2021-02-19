<?php

namespace BotFactory\Upload;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/css/forum.css'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Routes('api'))
        ->post('/upload', 'botfactoryit-upload', UploadController::class),

    (new Extend\Formatter)
        ->configure(AddBBCode::class)
];
