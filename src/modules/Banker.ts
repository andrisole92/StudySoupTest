
import Account from "./Account";

export default class Banker{
  public static accounts: Map<string, Account> = new Map<string,Account>();


  constructor(){

  }

  static newAccount(id:string, pin: number){
    if (this.accounts[id]) throw new Error('Account with this id already exists.')
    this.accounts[id] = new Account(pin);
  }

  static authorizeSelf(id:string,pin:number){
    let acc = this.accounts[id];
    return acc.authorizeSelf(pin);
  }

  static withdrawMoney(id:string,pin:number,amount:number){
    let acc = this.accounts[id];
    return acc.withdraw(pin,amount);
  }

  static depositMoney(id:string,pin:number,amount:number){
    let acc = this.accounts[id];
    acc.addMoney(pin, amount)
  }

  static getBalance(id:string,pin:number){
    let acc = this.accounts[id];
    return acc.getBalance(pin);
  }

}
