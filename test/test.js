import getSumm from '../src/js/app';

test('should summ', () => {
  const recieved = getSumm(5, 5);
  const expected = 10;

  expect(recieved).toBe(expected);
});
