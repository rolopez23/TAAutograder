const { TestWatcher } = require('jest');
const stepComplete = require('../../parseCommit/stepComplete.js');

test('Does not not find partial commits with ?', ()=> {
  expect(stepComplete('completed step 1 ?', '1')).toBe(false)
})

test('Does not not find partial commits with mostly', ()=> {
  expect(stepComplete('mostly completed step 1', '1')).toBe(false)
})

test('Does not not find partial commits with partially', ()=> {
  expect(stepComplete('partially completed step one', 'one')).toBe(false)
})

test('Does find a complete commits', ()=> {
  expect(stepComplete('step two complete', 'two')).toBe(true)
})