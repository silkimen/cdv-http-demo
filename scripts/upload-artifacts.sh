#!/usr/bin/env bash
set -e

PLATFORM=$([[ "${@#--android}" = "$@" ]] && echo "ios" || echo "android")
ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"/..
TEMP=$ROOT/temp

if [ -z $SAUCE_USERNAME ] || [ -z $SAUCE_ACCESS_KEY ]; then
  echo "Skipping uploading artifact, because Saucelabs credentials are not set.";
  exit 0;
fi

if [ $PLATFORM = "android" ]; then
  curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY \
      -X POST \
      -H "Content-Type: application/octet-stream" \
      https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/CdvHttpDemo.apk?overwrite=true \
      --data-binary @$TEMP/platforms/android/app/build/outputs/apk/debug/app-debug.apk
else
  rm -rf $TEMP/HttpDemo.app.zip
  pushd $TEMP/platforms/ios/build/emulator
  zip -r $TEMP/HttpDemo.app.zip ./HttpDemo.app
  popd

  curl -u $SAUCE_USERNAME:$SAUCE_ACCESS_KEY \
      -X POST \
      -H "Content-Type: application/octet-stream" \
      https://saucelabs.com/rest/v1/storage/$SAUCE_USERNAME/CdvHttpDemo.app.zip?overwrite=true \
      --data-binary @$TEMP/HttpDemo.app.zip
fi
