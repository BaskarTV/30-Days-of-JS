//*************** Practise portion *************************

class Person {
    constructor(firstName, lastName,age,country,city){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age
      this.country = country
      this.city = city
    }
  getFullName() {
    const fullName = this.firstName + " " + this.lastName
    return fullName
  }

}

const person = new Person('Baskar','Thangavelu', 20, 'India', 'Chennai')


console.log(person.getFullName())


class defaultPerson{
    constructor(
        firstName ='Baskar',
        lastName ='Thangavelu',
        age = 20,
        country = 'India',
        city = 'Chennai'
    ){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }

}

const person1 = new defaultPerson()
const person2 = new defaultPerson('Ranga','Murugan',30,'India','Kumbakkonam')

console.log(person1)
console.log(person2)


class personSkill {
    constructor(firstName,lastName,age,country,city){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
        this.score = 0
        this.skills = []
    }
    getFullName(){
     const fullName = `${this.firstName} ${this.lastName}`
     return fullName
    }
    
    //  added get for getter method topic

    get getScore(){
        return this.score
    }

    get getSkills(){
        return this.skills
    }
 
   //  added set for setter method topic 

   set setScores(score) {
     this.score += score
     
    }
  set setSkills(skill){
    this.skills.push(skill)
  }
// ****Getting Fullinfo with Regular Method******

getPersoninfo(){
 let fullName = `${this.firstName} ${this.lastName}`
 let skills = this.skills.length > 0 && this.skills.slice(0, this.skills.length -1).join(', ') + ` and ${this.skills[this.skills.length -1]}`
 let formattedSkills = skills ? `He Knows ${skills}` : ''
  
 let info = `${fullName} is ${this.age}. He lives in ${this.city}, in ${this.country}. ${formattedSkills}`
 return info
}

// ******Static Method**************

static favoriteSkill(){
  const skillSet = ['HTML','CSS', 'JS','React','Python','Node']
  const index = Math.floor(Math.random() * skillSet.length)
  return skillSet[index];
}



}

const skillPerson = new personSkill('Baskar','Thangavelu', 30, 'India', 'Chennai')


console.log(skillPerson.score)
console.log(skillPerson.skills)


// ***Getter Method*******

console.log(skillPerson.getScore) //We do not need parenthesis to call a getter method
console.log(skillPerson.getSkills)

// ***Setter Method******

skillPerson.setScores = 100;
skillPerson.setSkills ='Javascript';
skillPerson.setSkills ='Node.js';
skillPerson.setSkills ='React';
skillPerson.setSkills = 'MongoDB';
skillPerson.setSkills ='RestApi';
skillPerson.setSkills ='Linux';

console.log(skillPerson)
console.log(skillPerson.score)
console.log(skillPerson.skills)

// *****Getting fullInfo********

console.log(skillPerson.getPersoninfo())

// static Method

// console.log(skillPerson.favoriteSkill())


// Inheritance

class Student extends Person{
  saySomething(){
    console.log('I am child of the person class')
  }
}

const s1 = new Student ('Asabeneh', 'Yetayeh', 'Finland',250, 'Helsinki')
console.log(s1)
console.log(s1.saySomething())
console.log(s1.getFullName())



// ********************Exercises********************

// ****************Exercises Level 1*****************

// 1.Create an Animal class. The class will have name, age, color, legs properties and create different methods

class Animal{
  constructor(name, age,color,legs){
    this.name = name
    this.age = age
    this.color = color
    this.legs = legs
    this.loves = []
    this.plays = []
  }
  getDogName(){
     const name = this.name
     return name
  }
 

  set dogLoves(loves){
    this.loves.push(loves)
  }
  set dogPlays(plays){
    this.plays.push(plays)
  }

  getDogLoves(){
    const loves = this.loves
    return loves
  }

  getDogPlays(){
    const plays = this.plays
    return plays
  }
}

const dog = new Animal('Bheethoven', 1,'White&Brown',4)

dog.dogLoves ='Loves to swim'
dog.dogPlays ='Plays Fetch Ball'

dog.dogLoves ='Get Treats'
dog.dogPlays ='Running'

dog.dogLoves ='Bark'
dog.dogPlays = 'Sleep'

console.log(dog)
console.table(dog.getDogName())
console.log(dog.getDogLoves())
console.log(dog.getDogPlays())


// 2.Create a Dog and Cat child class from the Animal Class.

class Dog extends Animal{

}

const D1 = new Dog('Tiger',2,'Brown',4)

console.log(D1)

class Cat extends Animal{

}

const C1 = new Cat('Anabell',1,'White',4)

console.log(C1)


// ****************Exercises Level 2*****************

//1.Override the method you create in Animal class

class Parrot extends Animal{
  constructor(name,age,color,legs,breed){
    super(name,age,color,legs)
    this.breed = breed
  }

  getanimalsInfo(){
    let pronoun = this.breed == 'Dog' ?'Dog' : 'Parrot'
    let fullName = this.getDogName()
    let likes = this.getDogLoves()
    let plays = this.getDogPlays()
    
    let info = `${fullName} is.${pronoun} loves to ${likes}and Plays ${plays}`
    return info
  }

}

const p1 = new Parrot(
  'Tooto',
  2,
  'Green',
  2,
  'Parrot'
)

const p2 = new Parrot(
  'MoMo',
  4,
  'White',
  'Dog'
)

console.log(p1.getanimalsInfo())
console.log(p2.getanimalsInfo())

// *********************Exercises Level 3***********************************

// 1.Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation).
//  In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions 
//   which do statistical calculations as method for the Statistics class. Check the output below.

class statistics {
  constructor(arr) {
    this.arr = arr;
  }
  
  // methods      
  count() { return this.arr.length; }
  
  sum() { return this.arr.reduce((sum, value) => sum + value, 0)};
  
  min() { return this.arr.reduce((min, val) => {
    min = min < val ? min: val;
    return min;
  })}
  
  max() { return this.arr.reduce((max, val) => {max = max < val? val: max})};
  
  range() {return Math.abs(this.max() - this.min())};

  mean() {
    return arr.reduce((a, b) => (a+b)/arr.length, 0)
  }
  
  median() {
    let sorted = this.arr.sort((a, b) => a-b);
    let len = sorted.length;     
    if(len%2===0) {
      return (sorted[parseInt(len/2)] +sorted[parseInt(len/2)-1]);
    }
    else return (sorted[parseInt(len/2)]);
  }
  
  mode() {
    return Object.entries(this.arr.reduce((obj, cur) => {
      obj[cur] = (obj[cur] || 0) +1;
      return obj;
    }, {})).sort((a, b) => a[1] - b[1]).pop();
  }
  
  var() {
    return this.arr.reduce((v, cur) => 
      v + Math.pow(cur, 2), 0)
  }
  
  std() {
    return Math.sqrt(this.var());
  }
}
let arr = [1, 2,3 ,4, 432, 2, 3, 3, 3];
let stats = new statistics(arr);
console.log(stats.std())

// 2 create a bank account 
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



