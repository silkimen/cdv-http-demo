#!/usr/bin/env bash
set -e

ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"/..

cd $ROOT
./node_modules/.bin/mocha ./test/test.js "$@"
