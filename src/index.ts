import { ContaBancario } from "./contaBancaria";
const prompt = require("prompt-sync")();



let victorConta = new ContaBancario (1213, "victor", 20)
let perguntaDeposito = parseFloat(prompt("digite o valor de deposito: "))
console.log(victorConta.deposito(perguntaDeposito))



let perguntaSaque = parseFloat(prompt("digite o valor de saque"))
console.log(victorConta.saque(perguntaSaque))