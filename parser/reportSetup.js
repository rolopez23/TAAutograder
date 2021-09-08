const writeStudent = require('./writeStudent');
const helpers = require('./helpers')

module.exports = (github_handle, callback) => {
  writeStudent(github_handle, (err, dir)=> {
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
        callback()
      })
  })
  
  
}
