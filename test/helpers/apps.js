const path = require('path');

if (process.env.SAUCE_USERNAME) {
  exports.iosTestApp = 'sauce-storage:HttpDemo.app.zip';
  exports.androidTestApp = 'sauce-storage:HttpDemo.apk';
} else {
  exports.iosTestApp = path.resolve('platforms/ios/build/emulator/HttpDemo.app');
  exports.androidTestApp = path.resolve('platforms/android/build/outputs/apk/android-debug.apk');
}
