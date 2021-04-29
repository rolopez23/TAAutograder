
const getMaxLevel = (levels) => {
  
  let results = Object.keys(levels);

  results = results.map(level=> parseInt(level,10));
  return results.reduce((accumulator, currentValue)=> {
    if (accumulator < currentValue) {
      accumulator = currentValue
    }
    return accumulator
  }, -1).toString()
}

module.exports = getMaxLevel;