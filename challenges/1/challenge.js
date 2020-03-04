/*
 * Somar os argumentos
 */

/* ENUNCIADO
 *
 * Você deve escrever uma função que some
 * todos os argumentos providos.
 *
 */

const sumArguments = (...arr) => arr.reduce((accumulator, currently) => accumulator + currently);

module.exports = sumArguments
