/*
 * Números primos
 */

/* ENUNCIADO
 *
 * Você deve fazer um programa que soma o valor de todos
 * os números primos existentes de 1 a n, onde n é dado como
 * parâmetro.
 *
 * Para isso você deve usar a função já escrita de verificação
 * de primalidade.
 *
 * Exemplo:
 * sumPrimes(15) deve retornar 41
 *
 */

const isPrime = require('../../utils/isPrime');
let sum = 0;
let cont = 1;

const sumPrimes = n => {
    while(cont <= n){
        isPrime(cont) ? sum += cont : null;
        cont++;
    }
    return sum;
}

module.exports = sumPrimes;