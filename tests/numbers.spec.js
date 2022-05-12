/* eslint-disable max-len */
/* eslint-disable no-unused-vars */

const numbers = require('../src/numbers');

describe('1 -Testando a função `numbers` ', () => {
  it("numbers([1, 2]); // Retorna: true", ()=>{
    expect(numbers([1, 2])).toBe(true);
  });

  it("numbers([1, 2, 3, 4, 5]); // Retorna: falso", ()=>{
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });

  it("numbers([1, 2, 'a']); // Retorna: false", ()=>{
    expect(numbers([1, 2, 'a'])).toEqual(false);
  });

  it("numbers([ ]); // Retorna: false", ()=>{
    expect(numbers([2, 'errado', 5])).toEqual(false);
  });

});
/*
  A função `numbers` recebe um array de tamanho variável e retorna `true` se todos os parâmetros forem do tipo 'number' e `false` caso contrário.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, 'a']; [].
  Comportamento:
    - numbers([2, 3, 4]); // Retorna: true
    - numbers([2, 'errado', 5]); // Retorna: false

*/

describe('2 - Implemente os casos de teste para a função `numbers`', () => {
  it("numbers([1, 2, 3, 4, 5]); Retorna: true", ()=>{
    expect(numbers([1, 2, 3, 4, 5])).toBe(true);
  });
  it("numbers([1, 2, '3', 4, 5]); Retorna: false", ()=>{
    expect(numbers([1, 2, '3', 4, 5])).toEqual(false);
  });
  it("numbers([1, 'a', 3]); Retorna: false", ()=>{
    expect(numbers([1, 'a', 3])).toEqual(false);
  });
  it("numbers([' ']); Retorna: false", ()=>{
    expect(numbers([' '])).toEqual(false);
  });
});
  // Escreva um teste em que a função recebe [1, 2, 3, 4, 5] e retorna true
  // Escreva um teste em que a função recebe [1, 2, '3', 4, 5] e retorna false
  // Escreva um teste em que a função recebe [1, 'a', 3] e retorna false
  // Escreva um teste em que a função recebe [' '] e retorna false
