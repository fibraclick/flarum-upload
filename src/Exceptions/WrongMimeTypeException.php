<?php

namespace BotFactory\Upload\Exceptions;

use Exception;
use Throwable;

class WrongMimeTypeException extends Exception
{
    public function __construct($mediaType)
    {
        parent::__construct("Unsupported media type: " . $mediaType, 415, null);
    }
}
