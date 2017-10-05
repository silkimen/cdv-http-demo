const wd = require("wd");

require('colors');

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);

const should = chai.should();
chaiAsPromised.transferPromiseness = wd.transferPromiseness;

if (process.env.npm_package_config_sauce) {
  process.env.SAUCE_USERNAME = process.env.npm_package_config_sauce_username;
  process.env.SAUCE_ACCESS_KEY = process.env.npm_package_config_sauce_access_key;
}

exports.should = should;
