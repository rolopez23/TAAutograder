const process = require('process')

//student is an object 
/*
 *  student = {
 *    name: '<name>'
 *    github: '<github_handle>'
 *  }
*/
const path = require('path');
const fs = require('fs');

const createReport = require('./combineReports');

const DIRECTORY = path.join(__dirname, '../students');

const writeStudent = (github, callback) => {
  const studentDirectory = path.join(DIRECTORY, github)
  console.log(studentDirectory, 'making')
  fs.mkdir(studentDirectory, (err)=> {
    if(err) {
      console.log('Failed to build directory', err);
      return
    }
    createReport((err, report)=> {
    
      if (err) {
        console.log('Failed to create Report', err);
        callback(err);
      } else {
        fs.writeFile(path.join(studentDirectory, 'summary.json'),JSON.stringify(report), (err)=> {
          if (err) {
            console.log('Failed to write report', err);
            callback(err)
            return;
          }
          callback(null, studentDirectory);
        })
      }
    })
  })
}

module.exports = writeStudent;

