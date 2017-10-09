require('./helpers/setup');

const wd = require('wd');
const apps = require('./helpers/apps');
const caps = Object.assign({}, require('./helpers/caps'));
const serverConfig = require('./helpers/server');
const testDefinitions = require('../www/js/test-definitions');

describe('Advanced HTTP', function() {
  let driver;
  let allPassed = true;

  this.timeout(300000);

  before(() => {
    driver = wd.promiseChainRemote(serverConfig);
    require('./helpers/logging').configure(driver);

    const desired = caps.iosSimulator;
    desired.app = apps.iosTestApp;

    return driver.init(desired);
  });

  after(() => driver
    .quit()
    .finally(function () {
      if (process.env.SAUCE_USERNAME) {
        return driver.sauceJobStatus(allPassed);
      }
    }));

  const validateTestIndex = number => driver
    .elementById('descriptionLbl')
    .text()
    .then(text => parseInt(text.match(/(\d):/)[1], 10))
    .should.eventually.become(number);

  const validateTestTitle = testTitle => driver
    .elementById('descriptionLbl')
    .text()
    .then(text => text.match(/\d:\ (.*)/)[1])
    .should.eventually.become(testTitle);

  const validateResult = text => driver
    .elementById('resultTextarea')
    .getAttribute('value')
    .should.eventually.include(text);

  const clickNext = () => driver
    .elementById('nextBtn')
    .click()
    .sleep(1000);

  testDefinitions.forEach((definition, index) => {
    it(definition.description, function() {
      return clickNext()
        .then(() => validateTestIndex(index))
        .then(() => validateTestTitle(this.test.title))
        .then(() => validateResult(definition.expected))
      });
  });
});
