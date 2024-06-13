// TASK 1 , TASK 2

class Account {
    constructor(accountNumber, balance, owner){
        this.accountNumber = accountNumber
        this.balance = balance
        this.owner = owner
    }

    deposit = (amount) => {
        if (amount > 0) {
            this.balance += amount;
            console.log(`You have deposited $${amount}. Your new balance is $${this.balance}.`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }
    
    withdraw = (amount) => {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`You have withdrawn $${amount}. Your new balance is $${this.balance}.`);
            } else {
                console.log("Insufficient balance for this withdrawal.");
            }
        } else {
            console.log("Withdrawal amount must be greater than zero.");
        }
    }

    calculateCompoundInterest(interestRate, years) {
        const P = this.balance;
        const r = interestRate;
        const n = 1;
        const t = years;
        const A = P * Math.pow((1 + r / n), (n * t));
        const roundedA = Math.ceil(A);
        console.log(`After ${years} years at an annual interest rate of ${r*100}%, your balance will be ${roundedA}.`);

    }
}
let myAccount = new Account("1234567", 10, "T Pain");
myAccount.deposit(20);  
myAccount.withdraw(15); 
let futureBalance = myAccount.calculateCompoundInterest(0.05, 10); 