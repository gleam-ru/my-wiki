@ECHO OFF
SET BIN_TARGET=%~dp0/../jakub-onderka/php-parallel-lint/parallel-lint
php "%BIN_TARGET%" %*
