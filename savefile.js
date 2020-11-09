const fs = require('fs');
const path = require('path');

const findMaxCommit = require('./findMaxCommit.js')
const getCommitHistory = require('./getCommit');
const COHORT = 'hrsf129'

const baseUrl = `https://api.github.com/repos/hackreactor/${COHORT}-technical-assessment-solutions/commits?sha=`

const stringToMatrix = (string) => {
  array = string.split('\n')
  for (let i = 0; i < array.length; i++) {
    const row = array[i];

    array[i] = row.split(',').slice(0, 2)
  }
  return array;
}

const filePath = path.join(__dirname, 'students.csv');
//Read the file
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
        console.log(studentMatrix)
        const text = studentMatrix.join('\n');
        fs.writeFile('taSteps.csv', text,(err) => {
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


//Get Github

//Save to file