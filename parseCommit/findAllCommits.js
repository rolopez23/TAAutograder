const NUMBERS = ['zero','one','two','three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

const findCommit = require('./findCommit');
const sampleData = require('../sampleData/sampleData.js')

const findAllCommits = (data, start = 12) => {
  let commits = {};
  for (let i = start; i >= 0; i--) {
    
    if(findCommit(data, i)) {
      commits[i] = findCommit(data, i);
    } else if (findCommit(data, NUMBERS[i])) {
      commits[i] = findCommit(data, NUMBERS[i]);
    } 
  }
  return commits;
}

// console.log(findMaxCommit(sampleData))
module.exports = findAllCommits;
