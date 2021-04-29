const stringToMatrix = (string) => {
  let array = string.split('\n')
  //remove annoying \r
  array = array.map((string)=> string.replace("\r", ""))
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    array[i] = row.split(',').slice(0, 2)
  }

  return array;
}

module.exports = stringToMatrix;
