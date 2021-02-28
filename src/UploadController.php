<?php

namespace BotFactory\Upload;

use BotFactory\Upload\Exceptions\UploadPhpException;
use BotFactory\Upload\Exceptions\WrongMimeTypeException;
use Carbon\Carbon;
use Exception;
use Flarum\Foundation\Paths;
use Flarum\Settings\SettingsRepositoryInterface;
use Intervention\Image\ImageManager;
use Psr\Http\Message\ResponseInterface as Response;
use Psr\Http\Message\ServerRequestInterface as Request;
use Psr\Http\Server\RequestHandlerInterface;
use Laminas\Diactoros\Response\JsonResponse;

class UploadController implements RequestHandlerInterface
{
    private $tmpPath;
    private $storagePath;

    public function __construct(Paths $paths, SettingsRepositoryInterface $settings)
    {
        $this->tmpPath = $paths->storage . '/tmp';
        $this->storagePath = $settings->get("botfactoryit-upload.storage-path");
    }

    public function handle(Request $request): Response
    {
        // Assert that the user is logged in
        $actor = $request->getAttribute('actor');
        $actor->assertRegistered();

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
            $fileName = sprintf("%d_%s_%d.jpg",
                $now->timestamp,
                $actor->id,
                $discussionId
            );

            $prefix = $now->format('Y/m/');

            $fileDir = $this->storagePath . $prefix;

            if (!is_dir($fileDir)) {
                if (!mkdir($fileDir, 0777, true)) {
                    return $this->error(new UploadPhpException(UPLOAD_ERR_CANT_WRITE));
                }
            }

            $outputPath = $fileDir . $fileName;

            $manager = new ImageManager(['driver' => 'imagick']);

            $img = $manager->make($tmpFilePath)->orientate();

            $exif = $img->getCore()->getImageProfiles('exif', false);
            if (count($exif) > 0) {
                $img->getCore()->removeImageProfile('exif');
            }

            $img->save($outputPath, 80);

            return new JsonResponse([
                "fileName" => $prefix . $fileName
            ]);
        } finally {
            @unlink($tmpFilePath);
        }
    }

    private function error(Exception $ex): Response
    {
        return new JsonResponse([
            "status" => $ex->getCode(),
            "message" => $ex->getMessage()
        ], $ex->getCode());
    }
}
