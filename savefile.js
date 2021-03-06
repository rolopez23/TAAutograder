const fs = require('fs');
const path = require('path');

const findAllCommits = require('./parseCommit/findAllCommits.js');
const getCommitHistory = require('./getCommit');

const stringToMatrix = require('./helpers/stringToMatrix.js');
const getMaxLevel = require('./helpers/getMaxLevel.js')
const constants = require('./cohortVariables.js');

const baseUrl = `https://api.github.com/repos/hackreactor/${constants.cohort}-technical-assessment-solutions/commits?sha=`
const filePath = path.join(__dirname, 'csv', constants.inputFile);

//Read the CSV and save it to a file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    let studentMatrix = stringToMatrix(data).slice(1);

    const gitHubRequests = studentMatrix.map(student => {
      const url = baseUrl + student[1];
      return getCommitHistory(url)
    })

    Promise.all(gitHubRequests)
      .then((responses) => responses.map((response) => {
        return findAllCommits(response.data)
      }))
      .then(allCommits => allCommits.map((commits, index) => [...studentMatrix[index], getMaxLevel(commits), JSON.stringify(commits)]))
      .then((studentMatrix) => {
        studentMatrix = [['Name', 'GitHub Handle', 'TA complete to']].concat(studentMatrix);
        for (let i = 0; i < studentMatrix.length; i++) {
          studentMatrix[i] = studentMatrix[i].join(',');
        }
        const text = studentMatrix.join('\n');
        fs.writeFile(path.join(__dirname, `csv/${constants.outputFile}`), text, (err) => {
          if (err) {
            console.log('error')
          } else {
            console.log('done')
          }
        })
      })
      .catch(() => console.log('error'))
  }
})


