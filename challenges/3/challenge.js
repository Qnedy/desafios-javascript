/*
 * Calcular o MDC
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que calcula e retorna o MDC
 * (máximo divisor comum) entre dois números.
 * Para isso você pode usar as seguintes informações:
 *
 * 1. O MDC de um número N com 0 é o próprio N.
 *
 * 2. O MDC entre dois números M e N, onde M > N é
 * igual ao MDC de N e do resto da divisão de M por N.
 *
 * Você pode considerar que nas entradas dos testes
 * a > b sempre.
 */

const MDC = (a, b) => {
    let maxNumber = Math.max(a, b);
    let minNumber = Math.min(a, b);
    let remainder = -1;

    while(remainder != 0){
        remainder = maxNumber % minNumber;
        maxNumber = minNumber;
        minNumber = remainder;
    }
    mdcFinal = maxNumber;
    return mdcFinal;
}

module.exports = MDC
