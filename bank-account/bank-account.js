export class BankAccount {
  open() {
    if(this.status)throw new ValueError();
   this.status =1;this.bal=0;
  }

  close() {
    if(!this.status)throw new ValueError();
    this.status =0;
    this.bal =0;
  }

  deposit(amount) {
    if(!this.status)throw new ValueError();
    if(amount<0) throw new ValueError();
    this.bal+=amount;
  }

  withdraw(amount) {
    if(!this.status)throw new ValueError();
    if(amount>this.bal|| amount<0) throw new ValueError();
    this.bal-=amount;
  }

  get balance() {
    if(!this.status)throw new ValueError();
    return this.bal;
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
