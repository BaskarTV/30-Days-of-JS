const rectangle = {
  length: 20,
  width: 20
}
// console.log(rectangle.length = 10) // {length: 20, width: 20}
// console.log(rectangle)
const person = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
  age: 250,
  country: 'Finland',
  city: 'Helsinki',
  skills: [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Node',
    'MongoDB',
    'Python',
    'D3.js'
  ],
  getFullName: function(){
  return `${this.firstName} ${this.lastName}`
  },
  isMarried: true,
  location: 'Earth',
  'phone number': '+1234566788898'
}




person.nationallity = 'Ethiopian'
person.title = 'teacher'
person.skills.push('Meteor')
person.skills.push('SasS')
console.log(person.firstName)
console.log(person.lastName)
console.log(person.age)
console.log(person.location)
console.log(person.getFullName())
console.log(person["phone number"])
console.log(person.skills)

person.getPersonInfo = function (){
  let fullName = this.getFullName()
  let age =this.age;
  let skills = this.skills
  let country =this.country
  let title = this.title
  let details = `${fullName} is a ${title}.\nHis age is ${age}.\nHe is from ${country}.\nHe teaches ${skills}`
  return details
 
}

console.log(person.getPersonInfo())

person.getPersonInfo = function(){
    let skillsWithoutLastSkills = this.skills.splice(0, this.skills.length-1).join(',')
    let lastskills = this.skills.splice(this.skills.length -1)[0]
    let  skills = `${skillsWithoutLastSkills}, and ${lastskills}`
    let fullName = this.getFullName()
    let statement = `${fullName} is a ${this.title}.\nHe lives in ${this.country}.\nHe teaches ${skills}`
    return statement
}

console.log(person)
console.log(person.getPersonInfo())

const copyPerson = Object.assign({},person)

console.log(copyPerson)


//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty


// const address = Object.keys(copyPerson.address)
// console.log(address)






const entries = Object.entries(copyPerson)
console.log(entries)

console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('country'))

//*********************************************************** */ 💻 Exercises***************************************************************

// ***************Exercises: Level 1*********************************

// 1. Create an empty object called dog

const dog ={}

// 2.Print the the dog object on the console

console.log(dog)

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof

dog.addDogInfo = function(){
    dog.name = 'Hulk'
    dog.legs = 4
   dog.color = 'Brown'
   dog.age = 1
  dog.bark =function()
  {
    return "woof woof"
  }
  return  
}

console.log(dog.addDogInfo())

// 4. Get name, legs, color, age and bark value from the dog object

dog.getDogInfo = function(name,legs,color,age,bark){
    name = this.name
    legs = this.legs
    color = this.color
    age = this.age
    bark = this.bark()
    let details = `The name of the dog is ${name} \nIt has four ${legs} legs. \ncolor is ${color}\nThe age is ${age} \nIts barks like ${bark}`
    return details
}
console.log(dog.getDogInfo())

// 5. Set new properties the dog object: breed, getDogInfo

dog.breed ="American Pitbull"

console.log(dog)


// ****************************************************Exercises: Level 2*******************************************************************

const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
  }
}

// Trial for larger numbers


const ages = [21,18,42,40,64,63,34]

const max = ages.reduce((max, value) => (value > max) ? value : max, 0)

console.log("max:",max)


// 1.Find the person who has many skills in the users object.

let maxSkills = 0

let skilledPerson;

for(const user of Object.keys(users)){
  if(users[user].skills.length > maxSkills){
    maxSkills = users[user].skills.length
    skilledPerson= Object.assign({}, users[user])
  }
}
console.log(skilledPerson.skills, max)


// 2.Count logged in users, count users having greater than equal to 50 points from the following object.

let loggedInUsers = 0;
let points50UpUsers = 0;

for(const user of Object.keys(users)) {
   if(users[user].isLoggedIn) 
      loggedInUsers++;
    
   if(users[user].points >= 50) 
      points50UpUsers++;
}
console.log(loggedInUsers, points50UpUsers);

// 3 : Find people who are MERN stack developer from the users object

   
let findMernStackDevs = () => {
   let mern = ['MangoDB', 'Express', 'React', 'Node'];
   let count = 0;
   let mernStackDevs = [];
   
   for(const dev of Object.values(users)) {
      for(const skill of dev['skills']) {
         if (mern.indexOf(skill) != -1) 
            count++;
      }
      if(count == 4) 
         mernStackDevs.push(dev);
   }
   return mernStackDevs;
}

findMernStackDevs().forEach((el) => {
   console.log(el); 
})

// 4 Set your name in the users object without modifying the original users object


const usersCopy = Object.assign({}, users);
usersCopy['Hamza'] = {};

// 5 Get all keys or properties of users object


const keys = Object.keys(users);

// 6 Get all the values of users object


const values = Object.values(users);

// 7: Use the countries object to print a country name, capital, populations and languages.

import {countries} from "./countries.js"

const country = countries[Object.keys(countries)[104]];
  
   console.log("Name: ", country.name)
   console.log("Capital: ", country.capital)
   console.log("Population: ", country.population);
   console.log("Languages: ", country.languages);

  //  *************************************************Exercises: Level 3*******************************************************************

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// *firstName
// *lastName
// *incomes
// *expenses
// *totalIncome
// *totalExpense
// *totalExpense
// *accountInfo
// *addIncome
// *addExpense
// *accountBalance


  const personAccount ={
                firstName: "Baskar",
                lastName: "Thangavelu",
                balance: 0,

            incomes:{
                courses: 1000,
                salary: 25000,
                tutoring: 1500
            },
            expenses:{
              rent: 15000,
              netbill: 700,
              electricbill: 3000
            },

          totalIncome:function(){
            let total = 0
            for(const each of Object.keys(personAccount.incomes))
            total += personAccount.incomes[each]
            return total
          },

          totalExpense: function(){
            let total = 0
            for(const each of Object.values(personAccount.expenses)){
              total += each
            
          }
          return total
          },

          accontbalance: function(){
            return this.balance
          },
             
          accontInfo:function(){
             console.log("Name: ", this.firstName + ' ' + this.lastName)
             console.log("AccountBalance: ", this.balance)
          },

          addIncome: function(type, amount){
            this.incomes[type] = amount
          },
          addExpense: function(type, amount){
            this.expenses[type] = amount
          }


  }

  console.log(personAccount.totalIncome())
  console.log(personAccount.totalExpense())
  console.log(personAccount.accontInfo())
  console.log(personAccount.addIncome('art', 500))
  console.log(personAccount.addExpense('petrol',200))
  console.log(personAccount.accontInfo())

let signUP = (name, mail, pswd) => {
   // check if user exists    
   for(const usr of users)
      if(usr.mail == mail)
         return 'User Exists!';
         
   // generate ID first      
   let alps = '123456abhsgesvj2672sa';
   let rand = [];
   
   for(const chr of '______') {
      let random = parseInt(Math.random()*alps.length);
      rand.push(alps[random]);
   }
   let id = rand.join('');
   
   // create the date   
   const d = new Date();
   
   let mins = d.getMinutes();
   mins < 10 ? '0' + mins.toString() : mins;
   let hrs = d.getHours();
   hrs < 10 ? '0' + hrs.toString() : hrs;
   
   let year = d.getFullYear();
   let month = d.getMonth();
   let date = d.getDate();
  
   let DATE = `${year}/${month+1}/${date}  ${hrs>12? (hrs-12).toString() + ':' + mins.toString() + ' PM': hrs.toString()+':' + mins.toString() + ' AM'}`;
     
   // add to the object of users     
   let userData = {
         _id: id,
         username: name,
         email: mail,
         password: pswd,
         createdAt: DATE,
         isLoggedIn: false
      };
   users.push(userData);
}
signUP('alecy', 'aex@alex.com', 'pstg34');

users.forEach((x) => console.log(x));
// ii: SignIN 
let signIN = (mail, pswd) => {
   for(const user of users) {
      if(user.email == mail && user.password == pswd) {
         user.isLoggedIn = true;
         return 'You have been signed in!!';
      }  
   }
   return 'Incorrect Email or password';
}
console.log(signIN('alex@alex.com', '123123'))
// 3 
// i     
let rateProduct = (productNum, userId, rate) => {
   let theRating = {'userId': userId, 'rate': rate};
   products[productNum-1].ratings.push(theRating); 
   console.log(products[productNum-1].ratings);
} 
rateProduct(2, '23sdf2', 4);

// ii
let averageRating = (productID) => {
   let total = 0;
   let pdt;
   
   for(const prod of products) {
      if(prod._id == productID)
         pdt = prod;
   } 
   
   for(const usr of pdt.ratings) {
        total += usr.rate;
   }
   return total/pdt.ratings.length; 
}
console.log(averageRating('eedfcf'));

// 4 
let likeProduct = (userId, productNo) => {
   let pdt = products[productNo-1];
   let index = pdt.likes.indexOf(userId);
  
   if(index == -1) {
      pdt.likes.push(userId);
   }  
   else {
      pdt.likes.splice(index, 1);   
   }
}

likeProduct('venom23', 1);

