<?php

namespace BotFactory\Upload;

use BackblazeB2\Client;
use BotFactory\Upload\Exceptions\UploadPhpException;
use BotFactory\Upload\Exceptions\WrongMimeTypeException;
use BotFactory\Upload\Validators\UploadValidator;
use Carbon\Carbon;
use Exception;
use Flarum\Foundation\Application;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\AssertPermissionTrait;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Zend\Diactoros\Response\JsonResponse;

class UploadController implements RequestHandlerInterface
{
    use AssertPermissionTrait;

    private $tmpPath;
    private $storagePath;

    public function __construct(Application $app, SettingsRepositoryInterface $settings)
    {
        $this->tmpPath = $app->storagePath() . '/tmp';
        $this->storagePath = $settings->get("botfactoryit-upload.storage-path");
    }

    public function handle(Request $request): Response
    {
        // Assert that the user is logged in
        $actor = $request->getAttribute('actor');
        $this->assertRegistered($actor);

        // Extract discussion ID and file object
        $discussionId = $request->getParsedBody()['d'];
        $file = $request->getUploadedFiles()['image'];

        // Upload error
        if ($file->getError() != UPLOAD_ERR_OK) {
            return $this->error(new UploadPhpException($file->getError()));
        }

        // Move file to temp directory
        $tmpFilePath = tempnam($this->tmpPath, 'upload');
        $file->moveTo($tmpFilePath);

        try {
            // Check the real mime type
            $mime = mime_content_type($tmpFilePath);

            if (!in_array($mime, ["image/jpeg", "image/png", "image/webp"])) {
                return $this->error(new WrongMimeTypeException($mime));
            }

            $now = Carbon::now();

            // Generate the new file name
            $filePath = sprintf("%s/%d_%s_%d.%s",
                $now->format('Y/m'),
                $now->timestamp,
                $discussionId,
                $actor->id,
                $this->mimeToExtension($mime)
            );

            $fullFilePath = $this->storagePath . $filePath;
            $dir = dirname($fullFilePath);

            if (!is_dir($dir)) {
                mkdir($dir, 0777, true);
            }

            rename($tmpFilePath, $fullFilePath);

            return new JsonResponse([
                "fileName" => $filePath
            ]);
        }
        finally {
            @unlink($tmpFilePath);
        }
    }

    private function mimeToExtension(string $mime)
    {
        if ($mime == "image/jpeg") {
            return "jpg";
        }
        else if ($mime = "image/png") {
            return "png";
        }
        else if ($mime == "image/webp") {
            return "webp";
        }
    }

    private function error(Exception $ex): Response {
        return new JsonResponse([
            "status" => $ex->getCode(),
            "message" => $ex->getMessage()
        ], $ex->getCode());
    }
}
