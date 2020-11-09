const fs = require('fs');
const path = require('path');

const findMaxCommit = require('./parseComit/findMaxCommit.js')
const getCommitHistory = require('./getCommit');
const stringToMatrix = require('./helpers/stringToMatrix.js')

const COHORT = 'hrsf129'
const baseUrl = `https://api.github.com/repos/hackreactor/${COHORT}-technical-assessment-solutions/commits?sha=`
const filePath = path.join(__dirname, 'csv', 'test_students.csv');

//Read the CSV and save it to a file
fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    let studentMatrix = stringToMatrix(data).slice(1);
    const gitHubRequests = studentMatrix.map(student => getCommitHistory(baseUrl + student[1]))
    
    Promise.all(gitHubRequests)
      .then((responses) => responses.map((response) => {
        return findMaxCommit(response.data)
      }))
      .then(furthestSteps => furthestSteps.map((step, index) => [...studentMatrix[index], step]))
      .then((studentMatrix)=>{
        studentMatrix = [['Name','GitHub Handle', 'TA complete to']].concat(studentMatrix);
        for (let i = 0; i < studentMatrix.length; i++) {
          studentMatrix[i] = studentMatrix[i].join(',');
        }
        const text = studentMatrix.join('\n');
        fs.writeFile('csv/taSteps.csv', text,(err) => {
          if(err) {
            console.log('error')
          } else {
            console.log('done')
          }
        } )
      })
      .catch(console.log)
  }
})


