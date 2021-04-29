const fs = require('fs');
const path = require('path');
const { hasUncaughtExceptionCaptureCallback } = require('process');
const stringToMatrix = require('../../helpers/stringToMatrix.js')


test('Reads a file and makes an array', done => {
  fs.readFile(path.join(__dirname, '../../sampleData/test.csv'), 'utf-8', (err, data) => {
    try {
      expect(stringToMatrix(data)).toEqual([['Amelia', 'ameyeoh'],['Andrew', 'Andy-Kwong'],['Zach', 'zachlchan']])
      done();
    } catch {
      done(err)
    }


  })
})

