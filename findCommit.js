//Input Commit with similiar text 
//Output boolean



const findCommit = (commitHistory, step) => {
  for (let i = 0; i < commitHistory.length; i++) {
    let message = commitHistory[i].commit.message;
    message = message.toLowerCase();
    if(message.includes(step) & message.includes('complete') ) {
      return true;
    }
  }
  return false;
}

module.exports = findCommit;