const stepComplete = (message, step) => {
  //Error control based on user inputs
  if (message.includes('?') || message.includes('portion') || message.includes('incomplete') || message.includes('partial') || message.includes('most')) {
    return false;
  }

  if(message.includes(step) & message.includes('complete') ) {
    return true;
  }
  return false;
}

module.exports = stepComplete;
