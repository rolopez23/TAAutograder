const { TestWatcher } = require('jest');
const findAllCommits = require('../../parseCommit/findAllCommits.js');
const data = require('../../sampleData/sampleData.js')

test('finds max commit in sample data', () => {
  expect(findAllCommits(data)).toEqual({'1': "6f54d84f5141c01e2cf2e9e6faa23e6bd8c9ad71"});
})
