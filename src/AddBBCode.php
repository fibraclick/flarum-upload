<?php

namespace BotFactory\Upload;

use Flarum\Formatter\Event\Configuring;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class AddBBCode
{
    private $prefix;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $p = $settings->get("botfactoryit-upload.prefix");
        $this->prefix = rtrim($p, "/");
    }

    public function subscribe(Dispatcher $dispatcher)
    {
        $dispatcher->listen(Configuring::class, [$this, 'configure']);
    }

    public function configure(Configuring $event)
    {
        $event->configurator->BBCodes->addCustom(
            '[IMMAGINE]{TEXT}[/IMMAGINE]',
            sprintf(
                '<a href="%s/{TEXT}" target="_blank"><img src="%s/size=1024/{TEXT}"></a>',
                $this->prefix,
                $this->prefix
            )
        );
    }
}
