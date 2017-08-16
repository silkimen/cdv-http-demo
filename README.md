# Demo project for cordova-plugin-advanced-http

This project demonstrates how to use cordova-plugin-advanced-http with self-signed certs on backend without SSL-pinning.

But seriously, I do NOT recommend doing this! Use SSL-pinning instead!

Run following commands to get this one built:

```
npm i
./node_modules/.bin/cordova prepare
./node_modules/.bin/cordova build ios
```
