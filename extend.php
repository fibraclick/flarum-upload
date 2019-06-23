<?php

namespace BotFactory\Upload;

use BotFactory\Upload\ExceptionHandlers\UploadPhpExceptionHandler;
use BotFactory\Upload\ExceptionHandlers\WrongMimeTypeExceptionHandler;
use Illuminate\Contracts\Events\Dispatcher;
use Flarum\Extend;
use Tobscure\JsonApi\ErrorHandler;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__ . '/css/forum.css'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    new Extend\Locales(__DIR__ . '/locale'),

    (new Extend\Routes('api'))
        ->post('/upload', 'botfactoryit-upload', UploadController::class),

    function (Dispatcher $dispatcher, ErrorHandler $handler)
    {
        $dispatcher->subscribe(AddBBCode::class);
    },
];
