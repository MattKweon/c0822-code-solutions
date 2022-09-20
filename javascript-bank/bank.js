/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (Number.isInteger(balance) !== true || balance < 0) {
    return null;
  }
  this.accounts.push(new Account(Bank.nextAccountNumber, holder));
  this.deposit = balance;
  this.nextAccountNumber++;
  return Bank.nextAccountNumber;
};
