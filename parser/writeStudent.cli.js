const process = require('process');
const writeStudent = require('./writeStudent');
const helpers = require('./helpers')

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