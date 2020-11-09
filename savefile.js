const fs = require('fs');
const path = require('path');

const stringToMatrix = (string) => {
  array = string.split('/n')
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i].split(',')
  }
  return array;
}

const filePath = path.join(__dirname, '','students.csv'); 
//Read the file
fs.readFile(filePath, (err, data)=> {
  if(err) {
    console.log(err)
  } else {
    console.log(data)
    //console.log(stringToMatrix(data))
  }
})


//Get Github

//Save to file