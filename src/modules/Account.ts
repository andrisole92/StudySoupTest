import Transaction from "./Transaction";

export default class Account {
  private pin: number = null;
  private balance: number = 0;
  private withdrawLimit: number = 300;
  private withdrawHistory: Transaction[] = [];


  constructor(pin: number) {
    this.pin = pin;
    this.balance = 0;
  }

  addMoney(pin: number, amount: number) {
    if (this.pin !== pin) throw new Error('Pin is incorrect');
    if (amount <= 0) throw new Error('Amount can be less or equal 0');
    this.balance += amount;
  }

  withdraw(pin: number, amount: number) {
    if (this.pin !== pin) throw new Error('Pin is incorrect');
    if (amount <= 0) throw new Error('Amount can be less or equal 0');
    if (amount > this.balance) throw new Error('Withdraw mount can be more than balance');
    let withdrawnInPast24 = this.getWithdrawnInPast24(pin);
    console.log('withdrawnInPast24:'+withdrawnInPast24);
    if (withdrawnInPast24+amount > this.withdrawLimit) throw new Error('Your current withdraw limit set to 300. Withdrawn in past 24hr: ' + withdrawnInPast24);
    this.withdrawHistory.push(new Transaction(Date.now(), amount));
    this.balance -= amount;
  }

  getBalance(pin: number): number {
    if (this.pin !== pin) throw new Error('Pin is incorrect');
    return this.balance;
  }

  getWithdrawnInPast24(pin: number): number {
    console.log(this.withdrawHistory)
    if (this.pin !== pin) throw new Error('Pin is incorrect');

    let now = Date.now();
    let amount = 0;
    for (let i = this.withdrawHistory.length - 1; i >= 0; i--) {
      let transaction = this.withdrawHistory[i];
      if (transaction.time - now > 86400000) break;
      amount += transaction.amount;
    }
    return amount;
  }

  authorizeSelf(pin: number) {
    if (this.pin !== pin) throw new Error('Pin is incorrect');
    return pin === this.pin;
  }
}
