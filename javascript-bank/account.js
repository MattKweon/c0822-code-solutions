/* exported Account */
function Account(number, holder) {
  this.number = number;
  this.holder = holder;
  this.transactions = [];
}

Account.prototype.deposit = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('deposit', amount));
    return true;
  }
  return false;
};

Account.prototype.withdraw = function (amount) {
  if (Number.isInteger(amount) && amount > 0) {
    this.transactions.push(new Transaction('withdrawal', amount));
    return true;
  }
  return false;
};

Account.prototype.getBalance = function () {
  var output = 0;
  for (var i = 0; i < this.transactions.length; i++) {
    if (this.transactions[i].type === 'deposit') {
      output += this.transactions[i].amount;
    } else {
      output -= this.transactions[i].amount;
    }
  }
  return output;
};
