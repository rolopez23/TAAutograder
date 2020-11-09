const stringToMatrix = (string) => {
  array = string.split('\n')
  for (let i = 0; i < array.length; i++) {
    const row = array[i];

    array[i] = row.split(',').slice(0, 2)
  }
  return array;
}

module.exports = stringToMatrix;
