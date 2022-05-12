const numbers = require('../src/numbers');

describe('1 -Testando a função `numbers` ', () => {
  it("numbers([1, 2]); // Retorna: true", () => {
    expect(numbers([1, 2])).toBe(true);
  });

  it("numbers([1, 2, 3, 4, 5]); // Retorna: falso", () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  it("numbers([1, 2, 'a']); // Retorna: false", () => {
    expect(numbers([1, 2, 'a'])).toEqual(false);
  });

  it("numbers([ ]); // Retorna: false", () => {
    expect(numbers([' '])).toBe(false);
  });

});

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it("numbers([1, 2, 3, 4, 5]); Retorna: true", () => {
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });
  it("numbers([1, 2, '3', 4, 5]); Retorna: false", () => {
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false);
  });
  it("numbers([1, 'a', 3]); Retorna: false", () => {
    expect(numbers([1, 'a', 3])).toEqual(false);
  });
  it("numbers([' ']); Retorna: false", () => {
    expect(numbers([' '])).toEqual(false);
  });
});