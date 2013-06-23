var assert = require('assert');


var account = {
  balance: 100,
  deposit: function (amount) {
    account.balance = account.balance + amount;
  },
  withdraw: function (amount) {
    newBalance = account.balance - amount;
    account.balance = newBalance > 0 ? newBalance : 0;
  }
}

assert(account.balance == 100)
account.deposit(20)
assert(account.balance == 120)
account.withdraw(200)
assert(account.balance === 0)
