const path = require('path');

if (process.env.SAUCE_USERNAME) {
  exports.iosTestApp = 'http://appium.github.io/appium/assets/TestApp7.1.app.zip';
  exports.androidTestApp = 'http://appium.github.io/appium/assets/ApiDemos-debug.apk';
} else {
  exports.iosTestApp = path.resolve('platforms/ios/build/emulator/HttpDemo.app');
  exports.androidTestApp = path.resolve('platforms/android/build/outputs/apk/android-debug.apk');
}
