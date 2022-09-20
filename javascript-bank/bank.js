/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) === false || balance <= 0) {
    return null;
  }
  // new Account(this.nextAccountNumber, holder);
  this.nextAccountNumber++;

  return this.nextAccountNumber;
};
