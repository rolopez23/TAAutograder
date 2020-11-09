const NUMBERS = ['zero','one','two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const findCommit = require('./findCommit');
const sampleData = require('./sampleData.js')

const findMaxCommit = (data, start = 9) => {

  for (let i = start; i > 0; i--) {
    if(findCommit(data, i) || findCommit(data, NUMBERS[i])) {
      return i.toString();
    }
  }
  return 0;
}

// console.log(findMaxCommit(sampleData))
module.exports = findMaxCommit;
