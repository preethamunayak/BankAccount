let accountList = [];
class account {
  constructor(name, accountType, amount, emailId, phoneNumber) {
    this.openingDate = new Date();
    this.emailId = emailId;
    this.phoneNumber = phoneNumber;
    this.accountNumber = Math.floor(
      Math.pow(10, 13 - 1) +
        Math.random() * (Math.pow(10, 13) - Math.pow(10, 13 - 1) - 1)
    );

    accountList.push({
      accountNumber: this.accountNumber,
      name: this.name,
      accountType: this.accountType,
      date: this.openingDate,
      amount: this.balance,
      emailId: this.emailId,
      phoneNumber: this.phoneNumber,
    });
  }
  //   interest(rate, time) {
  //     let interest = (this.balance * rate * time) / 365;
  //     this.balance += interest;
  //     console.log(`interest is ${interest}`);
  //   }
  printDetails(person) {
    for (acc in accountList) {
      if (person == accountList[acc]) {
        console.log | accountList(person);
      }
    }
  }
}
class accountManager extends account {}
//This account has minimum balance of 1000 and its a type of account
class savingsAccount extends account {
  deposit(amount) {
    this.balance = this.balance + amount;
    console.log(`Deposited Rs:${amount} in Savings Account`);
  }
  withdraw(amount) {
    if (amount < this.balance && this.balance == 1000) {
      this.balance -= amount;
      console.log(`Withdrawed Rs:${amount}in Savings Account`);
    } else {
      console.log("Please maintain the minimum balance");
    }
  }
}
//This account has no minimum balance and its a type of account
class currentAccount extends account {
  deposit(amount) {
    this.balance = this.balance + amount;
    console.log(`Deposited Rs:${amount} in Current Account`);
  }
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawed Rs:${amount} in Current Account`);
    } else {
      console.log("Please maintain the minimum balance");
    }
  }
}

//Recurring account can only be deposited
class recurringDeposit extends account {
  deposit(amount) {
    this.balance = this.balance + amount;
    console.log(`Deposited Rs:${amount}} in Reccuring Deposit account`);
  }
}

class fixedDeposit extends account {
  balance(time) {
    const rate = 0.6;
    this.balance = this.balance + this.balance * rate * time;
    console.log(`Balance Remaining Rs:${this.balance}`);
  }
}
const abc = new account(
  "Preetham",
  "Savings",
  10000,
  "preetham@gmail.com",
  1234567890
);
console.log(abc.printDetails("Preetham"));
// console.log(accountList);
