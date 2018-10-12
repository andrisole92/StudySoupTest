
export enum TransactionType {
  Deposit,
  Withdraw
}

export default class Transaction {
  public time: number;
  public amount: number;
  public type: TransactionType;


  constructor(time: number, amount: number) {
    this.time = time;
    this.amount = amount;
  }


}
