const process = require('process');
const writeStudent = require('./writeStudent');
const helpers = require('./helpers')

writeStudent(process.argv[2], (err, dir)=> {
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

