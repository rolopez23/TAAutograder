const { TestWatcher } = require('jest');
const findCommit = require('../../parseCommit/findCommit.js');

test('Find commit finds a valid commit in an array', ()=> {
  const commits = ([
    {
      commit: {message: 'step one complete'}
    }, 
    {
      commit: {message: 'blah'}
    }, 
    {
      commit: {message: 'step two complete?'}
    }, 
    {
      commit: {message: 'step three incomplete'}
    }

  ])

  expect(findCommit(commits, 'one')).toBe(true);
  expect(findCommit(commits, 'two')).toBe(false);
  expect(findCommit(commits, 'three')).toBe(false);

})