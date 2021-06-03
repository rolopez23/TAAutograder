const process = require('process')
const helpers = require('./helpers')
console.log(process.argv)
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

const writeStudent = (student, callback) => {
  const studentDirectory = path.join(DIRECTORY, student.name)
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

writeStudent({name: process.argv[2], github: process.argv[3]}, (err, dir)=> {
  if(err) {
    console.log(err);
    return;
  }

  helpers.clearReports()
    .then(()=>{
      console.log('reports cleared', dir)
      return helpers.moveVideos(dir)
    })
    .then(()=>{
      console.log('videos moved')
      return
    })
})