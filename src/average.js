/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable sonarjs/no-one-iteration-loop */
/*
  A função average recebe um array de tamanho variável e retorna a média dos valores recebidos.
  Caso a função receba algum valor não numérico ou um array vazio, o valor undefined deve ser retornado.
  Todos os resultados devem ser arredondados para valores inteiros. Ex: 4,6 vira 5; 1,3 vira 1.

  Parâmetros:
    - Um array. Exemplos: [1, 2]; [1, 2, 3, 4, 5]; [1, 2, '3']; [];
  Comportamento:
    - average([2, 2]) // Retorno: 2;
    - average([1, 1]) // Retorno: 1;
    - average([1, '2']) // Retorno: undefined;
*/

const average = (numeros) => {
  // console.log(`Os numeros do array são estes: ${numeros.length}`);
  for (const semNum of numeros) {
    if (typeof semNum === 'string') {
      return undefined;
      // console.log(`semNum entrou nesta constante ${semNum}`);
    }
  }
  let numberTrat = 0;
  for (const numMedia of numeros) {
    if (numMedia === 0) {
      return undefined;
      // console.log(`ENTROU NO ZERO - ${numMedia}`);
    }
    // console.log(`Os numeros do array são estes no for "numMedia": ${numeros.length}`);
    numberTrat += numMedia;
    // console.log(`a soma é: ${numberTrat}`);
    let media = 0; 
    media = Math.round(numberTrat / numeros.length);
    return media;
    // console.log(`a media é: ${media}`);
  }
};

module.exports = average;  