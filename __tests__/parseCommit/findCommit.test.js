const { TestWatcher } = require('jest');
const findCommit = require('../../parseCommit/findCommit.js');

test('Find commit finds a valid commit in an array', ()=> {
  const commits = ([
    {
      sha: '1',
      commit: {message: 'step one complete'}
    }, 
    {
      commit: {message: 'blah'}
    }, 
    {
      sha: '2',
      commit: {message: 'step two complete?'}
    }, 
    {
      sha: '3',
      commit: {message: 'step three incomplete'}
    }

  ])

  expect(findCommit(commits, 'one')).toBe('1');
  expect(findCommit(commits, 'two')).toBe(false);
  expect(findCommit(commits, 'three')).toBe(false);

})