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
console.log(index)