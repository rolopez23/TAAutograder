const fs = require('fs');
const path = require('path');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const stringToMatrix = require('../../helpers')


test('Reads a file and makes an array', ()=> {
  fs.readFile(path.join(__dirname, '../../sampleData/test.csv'), 'utf-8', (err, data) => {
    expect(stringToMatrix(data)).toEqual([['Amelia', 'ameyeoh'],['Andrew', 'Andy-Kwong'],['Zach', 'zachlchan']])
  })
})

