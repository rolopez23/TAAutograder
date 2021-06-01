const path = require('path');
const fs = require('fs');

const REPORT_DIRECTORY = path.join(__dirname,  '../../cypress/results/json');
const VIDEO_DIRECTORY = path.join(__dirname,  '../../cypress/videos');

console.log(REPORT_DIRECTORY)
const readdirPromise = (path) => {
  return new Promise((resolve, reject) => {
    fs.readdir(path, (err, files) => {
      if (err) {
        reject(err)
      } else {
        resolve(files)
      }
    })
  })
}

module.exports = {
  clearReports: () => {
    return readdirPromise(REPORT_DIRECTORY)
      .then((files) => {
        return Promise.all(files.map((file) => {
          return new Promise((resolve, reject) => {
            const filePath = path.join(REPORT_DIRECTORY, file)
            fs.unlink(filePath, (err) => {
              if (err) {
                reject(err)
              } else {
                resolve(null)
              }
            })
          })
        }))
      })
  },
  moveVideos: (studentDirectory) => {
    return readdirPromise(VIDEO_DIRECTORY)
      .then((files)=>{
        return Promise.all(files.map(file =>{
          const filePath = path.join(VIDEO_DIRECTORY, file)
          const newFilePath = path.join(studentDirectory, file)
          return new Promise ((resolve, reject)=> {
            fs.rename(filePath, newFilePath, (err)=> {
              if(err) {
                reject(err)
              } else {
                resolve()
              }
            })
          })
        }))
      })
   }
}
module.exports.moveVideos('/Users/robertlopez/mini-projects/cypress/students/rob')
