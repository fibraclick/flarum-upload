<?php

namespace BotFactory\Upload;

use Flarum\Settings\SettingsRepositoryInterface;
use s9e\TextFormatter\Configurator;

class AddBBCode
{
    private $prefix;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $p = $settings->get("botfactoryit-upload.prefix");
        $this->prefix = rtrim($p, "/");
    }

    public function __invoke(Configurator $config)
    {
        $config->BBCodes->addCustom(
            '[IMMAGINE]{TEXT}[/IMMAGINE]',
            sprintf(
                '<a href="%s/{TEXT}" target="_blank"><img src="%s/size=1024/{TEXT}"></a>',
                $this->prefix,
                $this->prefix
            )
        );
    }
}
