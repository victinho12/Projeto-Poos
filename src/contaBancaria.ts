const prompt = require("prompt-sync")();
export class ContaBancario{
    private numeroConta : number
    private titular : string
    private saldo : number

    constructor(numeroConta : number, titular: string, saldo: number){
        this.numeroConta = numeroConta
        this.titular = titular
        this.saldo = saldo
    }

    deposito(depositos : number):number{
        let num1 = this.saldo
        let num2 = depositos
        let conta = num1 += num2 
        return conta
      
    }
    saque(saque : number){
        if(saque > this.saldo)
            console.log("esta tentando saquar mais do que deve seu safado 8======D")
        else{
            return saque
        }
    }
}

