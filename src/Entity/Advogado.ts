/*const prompt = require('prompt-sync')();
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',       // Substitua pelo seu usuário
    host: 'localhost',         // Host do PostgreSQL
    database: 'martinsassociados',   // Nome do banco de dados
    password: '1234',     // Substitua pela sua senha
    port: 5432                 // Porta do PostgreSQL
  });
*/

//exportando para outros arquivos
export class Advogado {
    //atributos da classe
  private nome: string;
  private Especialidade: string;
  private Email: string;
  private Telefone: number;
  private cpf:string
//construtor da classe
  constructor(
    nome: string,
    Especialidade: string,
    Email: string,
    Telefone: number,
    Cpf: string,
  ) {
    this.nome = nome;
    this.Especialidade = Especialidade;
    this.Email = Email;
    this.Telefone = Telefone;
    this.cpf = Cpf;
  }
  //chamar o email do adv
  public getEmail(): string {
    return this.Email;
  }
  //chamar o seu telefone
  public getTelefone(): number {
    return this.Telefone;
  }
  //chamar o seu nome
  public getNome(): string {
    return this.nome;
  }
  //chamar a sua especialidade
  public getEspecialidade(): String {
    return this.Especialidade
  }
  //função que chama se ele esta ativo na firma ou se ele esta inativo
  public getSituacao(Valor: string):string{
    if (Valor !== 'ativo'){
        return 'Está inativo'
    }
    else{
        return 'Está ativo'
    }
    //chamar o cpf do adv
  }
  public getCpf():string{
    return this.cpf
  }
  public verTodosAdv():void{
    
  }
}
