// const accountType = {
//   CaSa: ["Current", "Savings"],
//   Deposit: ["Fixed", "Recurring"],
//   Loan: ["House", "Vehicle", "Personal"],
// };

let accounts = []; //holds all accounts
let accountId = 1122334400000; //unique accountidnumber

class bankAccount {
  constructor(hName, aType, amount, emailId, phNumber) {
    this.hName = hName;
    this.aType = aType;
    this.Amount = amount;
    this.emailId = emailId;
    this.phNumber = phNumber;
    accounts.push({
      accountId: accountId++,
      holderName: hName,
      accountType: aType,
      openingDate: new Date(),
      phoneNumber: phNumber,
      email: emailId,
      Amount: amount,
    });
  }
  //to viev details of a given name and id
  viewDetails(aname, accID) {
    for (let acc of accounts) {
      if (acc.accountId == accID && acc.holderName == aname) {
        console.log(acc);
      }
    }
  }
}
class accountManager extends bankAccount {
  list() {
    console.log(accounts);
  }
}
//savings account to deposit and withdraw
class savingsAcc extends bankAccount {
  constructor(hName, accountType, amount, emailId, phNumber) {
    super(hName, accountType, amount, emailId, phNumber);
  }
  deposit(amount) {
    this.Amount = this.Amount + amount;
    console.log(
      `Deposited Rs:${amount} in Savings Account\n current balance:Rs${this.Amount}`
    );
  }
  withdraw(amount) {
    if (amount < this.Amount && this.Amount == 1000) {
      this.Amount -= amount;
      console.log(
        `Withdrawed Rs:${amount}in Savings Account\n current balance:Rs${this.Amount}`
      );
    } else {
      console.log("Please maintain the minimum balance");
    }
  }
}
//current account to deposit and withdraw
class currentAccount extends bankAccount {
  constructor(hName, accountType, amount, emailId, phNumber) {
    super(hName, accountType, amount, emailId, phNumber);
  }
  deposit(amount) {
    this.Amount = this.Amount + amount;
    console.log(
      `Deposited Rs:${amount} in Current Account\n current balance:Rs${this.Amount}`
    );
  }
  withdraw(amount) {
    if (amount <= this.Amount) {
      this.Amount -= amount;
      console.log(
        `Withdrawed Rs:${amount} in Current Account\n current balance:Rs${this.Amount}`
      );
    } else {
      console.log("Please maintain the minimum balance");
    }
  }
  viewCurrentBalance() {
    const rate = 0.15;
    const interest = (this.Amount * rate) / 365;
    this.Amount = this.Amount + interest;
    console.log(this.Amount);
  }
}
//fixed deposit account
class fixedDepoAcc extends bankAccount {
  constructor(hName, accountType, amount, emailId, phNumber) {
    super(hName, accountType, amount, emailId, phNumber);
  }
  deposit(amount) {
    this.Amount = this.Amount + amount;
    console.log(
      `Deposited Rs:${amount} in Current Account\n current balance:Rs${this.Amount}`
    );
  }
}
//recurring deposit account
class recurringDeposit extends bankAccount {
  constructor(hName, accountType, amount, emailId, phNumber) {
    super(hName, accountType, amount, emailId, phNumber);
  }
  deposit(amount) {
    this.Amount = this.Amount + amount;
    console.log(
      `Deposited Rs:${amount}} in Reccuring Deposit account\n current balance:Rs${this.Amount}`
    );
  }
}
class personalLoan extends bankAccount {
  constructor(hName, accountType, amount, emailId, phNumber) {
    super(hName, accountType, amount, emailId, phNumber);
  }
}
class homeLoan extends bankAccount {
  constructor(hName, accountType, amount, emailId, phNumber) {
    super(hName, accountType, amount, emailId, phNumber);
  }
}
class vehicleLoan extends bankAccount {
  constructor(hName, accountType, amount, emailId, phNumber) {
    super(hName, accountType, amount, emailId, phNumber);
  }
}
const acc1 = new savingsAcc("preetham", "savings", 2000, "p@gmail.com", 1234);
const acc2 = new currentAccount("vineeth", "Current", 3000, "v@g.com", 1122);
const acc3 = new recurringDeposit(
  "sandesh",
  "Recurring",
  3000,
  "v@g.com",
  1122
);

// console.log(acc1.viewDetails("preetham", 1122334400000));

console.log(accounts);
acc1.deposit(100);
acc2.withdraw(100);
