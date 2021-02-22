const stringToMatrix = (string) => {
  array = string.split('\n')
  for (let i = 0; i < array.length; i++) {
    const row = array[i];
    array[i] = row.split(',').slice(0, 2)
    //Remove an \r
    array.forEach((element, index)=> {
      let last = element.length;
      if (element.slice(last - 2, last) === "\r") {
        array[index] = element.slice(0, last - 2)
      }
    })
  }
  //console.log(array)
  return array;
}

module.exports = stringToMatrix;
