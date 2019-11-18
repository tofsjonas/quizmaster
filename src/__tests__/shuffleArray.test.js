import shuffleArray from 'lib/shuffleArray'
it('Shuffles an array', () => {
  const array = ['nisse', 'pelle', 'lisa', 'arne']
  shuffleArray(array)
  expect(array.length).toEqual(4)
})
