const calc = require('./calculator');

describe('Test calc operations', () => {
  test('two plus two is four', () => {
    expect(calc.sum(2, 2)).toBe(4);
  });

  test('two minus two is zero', () => {
    expect(calc.diff(2, 2)).toBe(0);
  });

  test('two multiply by two is four', () => {
    expect(calc.product(2, 2)).toBe(4);
  });

  test('two divided by two is one', () => {
    expect(calc.divide(2, 2)).toBe(1);
  });
});
