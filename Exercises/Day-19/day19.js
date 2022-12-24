// **************** Exercises *******************


// ************ Exercises: Level 1 ***************

// 1.Create a closure which has one inner function

function outerFunction(){
    let count = 0
    function innerFunction(){
        count++
        return count
    }
    return innerFunction
}

const innerFun = outerFunction()

// **************** Exercises: Level 2 ******************

// 1. Create a closure which has three inner functions

function firstFunction(){
    let data = 0;
    function one(){
         data ++
         return data
} 
    function two(){
        data --
        return data
    }
    function three(){
        data * 2
        return data
    }
    return {
       one:one(),two:two(),three:three()
    }
}

// ***************** Exercises: Level 3 *******************

// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
class PersonAccount {
    constructor(fName, lName) {
      this.fName = fName;
      this.lName = lName;
      
      // inits      
      this.accountBalance = 0;
      this.incomes = [];
      this.expenses = [];
    }
    
    // methods      
    totalIncome() { return this.incomes.reduce((sum, cur) => sum + cur, 0)};
    
    totalExpense() { return this.expenses.reduce((sum, cur) => sum + cur, 0)};
    
    checkAccountBalance() {
      return this.accountBalance;
    }
    withDraw(bal) {
       if (bal > 0 && this.accountBalance > 0) {
         this.accountBalance -= bal;
       }
    } 
    accountInfo() {
      return `
        *****Billing Account Info******
        Name: ${this.fName + ' ' + this.lName}
        Baln: ${this.accountBalance}$
        Incm: ${this.totalIncome()}$
        Expn: ${this.totalExpense()}$
        
        _________END OF INFO__________
      `
    }
    // setters     
    set addIncome(income) {
      if(income > 0) {
      this.incomes.push(income);
      }
    }
    
    set addExpense(expense) {
      if(expense > 0) {
        this.expenses.push(expense);
      }
    }
    
    set deposit(bal) {
      if (bal > 0) this.accountBalance += bal;
    }
  }
  
  // create an object     
  let bilAccount = new PersonAccount('Hamza', "Mateen");
  
  console.log(bilAccount.accountInfo())
  