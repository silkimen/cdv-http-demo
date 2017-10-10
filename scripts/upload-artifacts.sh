#!/usr/bin/env bash
set -e

ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"/..

zip -r $ROOT/HttpDemo.app.zip $ROOT/platforms/ios/build/emulator/HttpDemo.app

curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY \
    -X POST \
    -H "Content-Type: application/octet-stream" \
    https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/HttpDemo.app.zip?overwrite=true \
    --data-binary @$ROOT/HttpDemo.app.zip
