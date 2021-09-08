const path = require('path')

const readReport = require('./readReport.js');

const combineReport = (callback) => {
  readReport(path.join(__dirname, '../cypress/results/json/mochawesome.json'), {}, 1)
    .then(summary => {
      return readReport(path.join(__dirname, '../cypress/results/json/mochawesome_001.json'), summary, 2)
    })
    .then(summary => {
      return readReport(path.join(__dirname, '../cypress/results/json/mochawesome_002.json'), summary, 3)
    })
    .then(summary => {
      return readReport(path.join(__dirname, '../cypress/results/json/mochawesome_003.json'), summary, 4)
    })
    .then((data)=>callback(null, data))
    .catch(callback)
}

module.exports = combineReport;

