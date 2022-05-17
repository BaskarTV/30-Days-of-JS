// *******************Exercise: Level 1*****************************

// Question-1 Declare an empty array;

const emptyArr =[];

console.log(emptyArr)

// Question-2 Declare an array with more than 5 number of elements

const states = ['TamilNadu','Kerala','Andhrapradesh','Karnataka','Telgana']

console.log(states)

// Question-3 Find the length of your array

console.log(states.length)

// Question-4 Get the first item, the middle item and the last item of the array

console.log(states[0])
console.log(states[2]);
console.log(states[4])

// Question-5 Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5

const mixedDataTypes =['Baskar',{
    'isMarried': false,
    'Nationality':'indian',
    'age':30
},  1992, null, undefined,'chennai','']
console.log(mixedDataTypes)
console.log(mixedDataTypes.length)

// Question-6 Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

const itCompanies =['Facebook','Google','Microsoft','Apple','IBM','Oracle','Amazon']

// Question-7 Print the array using console.log()
console.log(itCompanies)

// QUestion-8 Print the number of companies in the array

console.log(itCompanies.length)

// Question-9 Print the first company, middle and last company

console.log(itCompanies[0])
console.log(itCompanies[3])
console.log(itCompanies[6])

// Question-10 Print out each company

// Method-1 Normal array index method
console.log(itCompanies[0])
console.log(itCompanies[1])
console.log(itCompanies[2])
console.log(itCompanies[3])
console.log(itCompanies[4])
console.log(itCompanies[5])
console.log(itCompanies[6])

// Method-2 Using for loop 
for(let i =0; i < itCompanies.length; i++){
    console.log(itCompanies[i].split(','))
}

// Question-11 Change each company name to uppercase one by one and print them out

for(let i =0; i <itCompanies.length; i++){
    console.log(itCompanies[i].toUpperCase())
}

// Question-12 Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

const companies = itCompanies.toString()

console.log(`${companies} are big IT companies`)

// Question-13 Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found

let index = itCompanies.indexOf('Google')

if(index === -1){
     console.log('Company is not found')
}else {
   console.log('Company found')
}
console.log('Company found in this list')

// Question-14 Filter out companies which have more than one 'o' without the filter method

// let convString = companies.toString()

// let matchCase = convString.match(/(oo)+/gi)

// console.log(matchCase)

// ******tried to take out match case of the string but failed ******

// Question-15 Sort the array using sort() method

console.log(itCompanies.sort())

// Question-16 Reverse the array using reverse() method
 
const reverseCompanies = itCompanies

console.log(reverseCompanies.reverse())
// Question-17 Slice out the first 3 companies from the array

const firstThree = itCompanies

console.log("Slice:",firstThree.slice(3,7))

// Question-18  Slice out the last 3 companies from the array

console.log('Slice:', itCompanies.slice(0,4))

// Question-19 Slice out the middle IT company or companies from the array


let midCompany = itCompanies.slice(parseInt(itCompanies.length/2));
console.log(midCompany);

// Question-20 Remove the first IT company from the array

console.log(itCompanies.shift())

// Question-21 Remove the middle IT company or companies from the array
itCompanies.splice(parseInt(itCompanies.length/2)-1, 2); 
console.log(itCompanies);

// Question-22 Remove the middle IT company or companies from the array

console.log(itCompanies.pop())

// Question-23 Remove all IT companies

console.log(itCompanies.splice(0,0))


// ********************************Exercise: Level 2**********************************************************

// Question-1 Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


import {countries} from "./countries.js"
import {webTechs} from "./web_techs.js"

console.log(countries)
console.log(webTechs)


// Question-2 First remove all the punctuations and change the string to array and count the number of words in the array

let text ='I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

let words = text

console.log(words.split(' '))

// Question-3 In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']


/*
* add 'Meat' in the beginning of your shopping cart if it has not been already added
* add Sugar at the end of you shopping cart if it has not been already added
* remove 'Honey' if you are allergic to honey
* modify Tea to 'Green Tea' */

console.log(shoppingCart)
console.log(shoppingCart.unshift('Meat'),shoppingCart)
console.log(shoppingCart.push('Sugar'),shoppingCart)
let midItem = shoppingCart.indexOf('Honey')
console.log(shoppingCart.splice(midItem,1),shoppingCart)
shoppingCart[3] = 'GreenTea'
console.log(shoppingCart)


// Question-4 In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.



if(countries.indexOf('Ethiopia')){
    console.log('ETHIOPIA')
}else{
    countries.push('Ethiopia')
}

// Question-5  In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

if (webTechs.indexOf('Sass')){
    console.log('Sass is a CSS preprocess')
}else{
    webTechs.push('Sass')
}

// Question-6 Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

const fullStack =[]


console.log(fullStack.concat(frontEnd,backEnd))

//************************* */ Exercise: Level 3**************************************



