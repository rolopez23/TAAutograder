const axios = require('axios'); 

const token = require('./token/token.js');
const findMaxCommit = require('./findMaxCommit.js')

function getCommitHistory(url){
  const options = {
    headers: {
      "Authorization": token, 
    }
  }
  return axios.get(url, options)
}

getCommitHistory('https://api.github.com/repos/hackreactor/hrsf129-technical-assessment-solutions/commits?sha=yutoliiho')
  .then((response)=>{
    console.log(response.data);
    return findMaxCommit(response.data);
  })
  .then(console.log)
