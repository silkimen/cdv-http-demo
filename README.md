# Test project for cordova-plugin-advanced-http

This project demonstrates how you can use cordova-plugin-advanced-http and is also meant to test the plugin.

Look into `www/js/test-definitions.js` to see which funtions are called.

Run following commands to get this one built:

```
npm i
./node_modules/.bin/cordova prepare
./node_modules/.bin/cordova build ios
```

Run `npm test` to start automated tests (with Appium). Appium >= v1.7.1 is expected to be running on `localhost:4723`.
