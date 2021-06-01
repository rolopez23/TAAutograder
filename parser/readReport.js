const fs = require('fs');

const readReport = (path, summary, level) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, data) => {
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
    .then(data => {
      let newData = JSON.parse(data)
      let levelSummary = {
        tests: newData.stats.tests,
        passed: newData.stats.passes,
        failed: newData.stats.tests - newData.stats.passes,
      }
      summary.total = summary.total + levelSummary.tests || levelSummary.tests;
      
      
      summary.passed = summary.passed + levelSummary.passed|| levelSummary.passed;
      summary.failed = summary.failed + levelSummary.failed|| levelSummary.failed;


      summary[level] = levelSummary;
      return summary;
    })
    .catch(err => err)
}

module.exports = readReport;
