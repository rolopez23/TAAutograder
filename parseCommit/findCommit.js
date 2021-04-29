const stepComplete = require('./stepComplete.js')
//Input Commit with similiar text 
//Output boolean

// const stepComplete = (message, step) => {
//   //Error control based on user inputs
//   if (message.includes('?') || message.includes('partial') || message.includes('most')) {
//     return false;
//   }

//   if(message.includes(step) & message.includes('complete') ) {
//     return true;
//   }
//   return false;
// }



const findCommit = (commitHistory, step, hashes) => {
  hashes = Object.assign({}, hashes)
  for (let i = 0; i < commitHistory.length; i++) {
    const entry = commitHistory[i]
    message = entry.commit.message;
    sha = entry.sha;
    message = message.toLowerCase();
    if (stepComplete(message, step)) {
      return sha;
    }
 
  }
  return false;
}

module.exports = findCommit;
