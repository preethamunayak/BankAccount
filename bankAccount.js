let accountId = 1122334400000; //13 digit accountId
//creating a bank account
class bankAccount {
  constructor(hName, amount) {
    this.holderName = hName;
    this.requiredBalance = 3000;
    this.balance = amount;
    this.openTime;
    this.lastEntry;
  }
  createAccount() {
    this.accountNumber = accountId++;
    this.openTime = new Date();
    this.lastEntry = this.openTime;
  }
  viewAccountBalance() {
    return {
      accountNumber: this.accountNumber,
      balance: this.balance,
      holderName: this.holderName,
    };
  }
  viewAccountInfo() {
    return {
      accountNumber: this.accountNumber,
      balance: this.balance,
      holderName: this.holderName,
      openTime: this.openTime,
      lastEntry: this.lastEntry,
    };
  }
}
//creating a saving account in th bank
class Savings extends bankAccount {
  constructor(hName, amount) {
    super(hName, amount);
    this.interest = 4.5;
    this.createAccount();
  }
  displayBalance() {
    let;
  }
}
