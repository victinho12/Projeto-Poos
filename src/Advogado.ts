const prompt = require('prompt-sync')();
const { Pool } = require('pg')

const pool = new Pool({
    user: 'postgres',       // Substitua pelo seu usuário
    host: 'localhost',         // Host do PostgreSQL
    database: 'martinsassociados',   // Nome do banco de dados
    password: '1234',     // Substitua pela sua senha
    port: 5432                 // Porta do PostgreSQL
  });

  
export class Advogado{
    public nome: string
    public Especialidade:string
    public Email:string
    private Telefone:number
    private Situacao:boolean


    constructor(nome:string,Especialidade:string, Email:string ){
        this.nome = nome 
        this.Especialidade = Especialidade
        this.Email= Email

    }
    public getNomeAdv():string{
        return this.nome
    }
    public getAtuacao():string{
        return this.atuacao
    }
}