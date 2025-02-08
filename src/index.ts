/*
import { Advogado } from "./Entity/Advogado";
const prompt = require('prompt-sync')();

const nomeAdv = prompt('digite o nome do adv: ')
const especialidadeAdv = prompt('digite qual a especialidade do adv: ')
const emailAdv = prompt('digite o email do adv: ')
const telefoneAdv = prompt('digite o telefone do adv: ')
const cpfAdv = prompt('digite o cpf do adv: ')
const getSituacao = prompt('digite se ele esta ativo ou esta inativo: ')


let Alan = new Advogado(nomeAdv,especialidadeAdv, emailAdv, telefoneAdv, cpfAdv) 
console.log(`o nome do profissional é ${nomeAdv} e esta ${getSituacao}, o profissional é ${especialidadeAdv}, seu telefone é ${telefoneAdv}, cpf: ${cpfAdv} `)

let listaAdvogados : Advogado[] = []
listaAdvogados.push(Alan)
console.table(listaAdvogados)
*/

import { pool } from "./Repository/Database";

console.log("oiiii");

async function testConection() {
  try {
    const cliente = await pool.connect();
    console.log("conexão bem sucedida.");
    cliente.release();
  } catch (error) {
    return error
  }
  
}
testConection();