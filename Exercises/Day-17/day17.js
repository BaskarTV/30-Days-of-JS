// **************************Exercises: Level 1**************************

// 1.Store you first name, last name, age, country, city in your browser localStorage.


const user = {
    firstName:'Baskar',
    lastName:'Thangavelu',
    age:30,
    country:'India',
    city:'Chennai'
}

const userData = JSON.stringify(user)

localStorage.setItem('User',userData);

console.log(localStorage)

let firstName = localStorage.getItem('firstName');
let lastName = localStorage.getItem('lastName');
let age = localStorage.getItem('age');
let city = localStorage.getItem('city');
let country =localStorage.getItem('country');

console.log(JSON.parse(localStorage.getItem('firstName','lastName','age','city','country')));

// **********************Exercises: Level 2 ******************************

// 1.Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.

const student = {
    firstName:'Asabeen',
    lastName:'Yentee',
    age:34,
    skills:['HTML','CSS','JS','React','NodeJS'],
    country:'Ethopia',
    enrolled:'false'

}

const studentData = JSON.stringify(student);

localStorage.setItem('Student',studentData);

console.log(localStorage)

// ***************************Exercises: Level 3 *************************

// 1.Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.

 const personAccount = {
    firstName:'Alex',
    lastName:'Lorren',
    incomes:0,
    expenses:0,
    totalIncome:10,
    totalExpense:1,
    accountInfo:getaccInfo(),
    addIncome:getIncome(),
 }
function getaccInfo(){

}

function getIncome(){
    
}

 const accDetails = JSON.stringify(personAccount)

 localStorage.setItem('PersonAc',personAccount)

 console.log(localStorage)