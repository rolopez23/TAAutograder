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



const findCommit = (commitHistory, step) => {
  for (let i = 0; i < commitHistory.length; i++) {
    let message = commitHistory[i].commit.message;
    message = message.toLowerCase();
    if (stepComplete(message, step)) {
      return true;
    }
 
  }
  return false;
}

module.exports = findCommit;
