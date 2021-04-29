const getMaxLevel = require('../../helpers/getMaxLevel.js');

const hashes = { 1: 1, 2: 2, 7:7}
 test('Finds max hash in an object', () => {
   expect(getMaxLevel({ 1: 1, 2: 2, 7:7})).toBe('7');
 }) 

 test('Returns -1 if no max hash', ()=> {
   expect(getMaxLevel({})).toBe('-1')
 })