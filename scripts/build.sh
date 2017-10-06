#!/usr/bin/env bash
set -e

ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"/..

cd $ROOT
npm i
./node_modules/.bin/cordova prepare ios
./node_modules/.bin/cordova build ios
