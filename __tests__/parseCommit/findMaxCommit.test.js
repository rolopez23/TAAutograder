const { TestWatcher } = require('jest');
const findMaxCommit = require('../../parseCommit/findMaxCommit.js');
const data = require('../../sampleData/sampleData.js')

test('finds max commit in sample data', () => {
  expect(findMaxCommit(data)).toBe('1');
})
