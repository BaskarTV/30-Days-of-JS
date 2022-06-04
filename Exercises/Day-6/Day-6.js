//*************************************💻 Exercises:Day 6*************************************************** */

// ***************************Exercises: Level 1 **********************************************************

// QUestion-1 Iterate 0 to 10 using for loop, do the same using while and do while loop

for(let i=0; i<=10; i++){
    console.log('ForLoop:',i)
}

// **While Loop**
let i =0;
while(i<=10){
    console.log('WhileLoop:',i) 
    i++
}

// Question-2 Iterate 10 to 0 using for loop, do the same using while and do while loop

for(let i =10; i>=0; i--){
    console.log('RevLoop:',i)
}

let x =10
 
while(x >=0){
    console.log('RevWhie:',x)
    x--
}

// Question-3  Iterate 0 to n using for loop
let n =10

for(let i =0; i<=10; i++){
    console.log('N:',i)
}

// Question-4 Write a loop that makes the following pattern using console.log():

for(let string ='#'; string.length <=7; string +='#'){
    console.log(string)
}

// Question-5 Use loop to print the following pattern:

/*
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100 
*/

for(let i = 0; i <= 10; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}

// Question-6 Using loop print the following pattern

/*
 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000
 */

console.log('i  i^2   i^3')
for(let i = 0; i <= 10; i++){
  console.log(`${i}   ${i * i}    ${i * i * i}`)
}

// Question-7 Use for loop to iterate from 0 to 100 and print only even numbers
 for(let i =0; i <=100; i++){
    if((i % 2) === 0  ){
    console.log('Even Num:',i)
    }
}

// Question-8 Use for loop to iterate from 0 to 100 and print only odd numbers
   for(let i =0; i <=100; i++){
    if((i % 3)===0){
        console.log('Odd Num:',i)
    }
   }

// Question-9 Use for loop to iterate from 0 to 100 and print only prime numbers
let num =100     
for(let i=2; i*i <=num; i++){
     if(num % i ==0){
         console.log('Prime:',i)
     }
    }

// Question-10 Use for loop to iterate from 0 to 100 and print the sum of all numbers.

// The sum of all numbers from 0 to 100 is 5050.

let sum = 0;
for(let i = 0; i <= 100; i++) {
   sum += i;
 console.log("Sum of 0-100: ", sum);
}


// Question-11 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

let sumOdd = 0
let sumEven = 0

for(let i = 0; i <=100; i++){
    if((i % 2)===0){
        sumEven += i
    }else {
          sumOdd += i
    }
    console.log(sumEven, sumOdd)
}

// Question-12 Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

console.log([sumEven,sumOdd])

//Question-13  Develop a small script which generate array of 5 random numbers

let randomNum = []

for(let i = 0; i <5; i++){
    randomNum.push(parseInt(Math.PI * Math.random() * 100 + 3))
}
console.log("RandomNum:",randomNum)

// Question-14 Develop a small script which generate array of 5 random numbers and the numbers must be unique

let uniqueRandoNum = []

for(let i = 0; i <5; i++){
   let numbers = parseInt(Math.PI * Math.random() * 100 + i)
   if(uniqueRandoNum.indexOf(numbers) == -1){
       uniqueRandoNum.push(numbers)
   }
   console.log('UniqueNum:',uniqueRandoNum)
}

// Question-15 Develop a small script which generate a six characters random id:

let alphabets = 'abcdefghijklmnopqrstuvwxyz';
let randoms = [];
for(let i = 0; i < 6; i++) {
   if(i%2 == 0) randoms.push(i);
   else randoms.push(alphabets[parseInt(Math.random() * 25)])
}
console.log('SixdigiId:', randoms.join(''));

// ********************************Exercises: Level 2**********************

// 1.Develop a small script which generate any number of characters random id:

let setCharacters = '123456789abcdefghijklmnopqrstuvwxyz'

let m = parseInt(Math.random() *  setCharacters.length) % 16

let randomId =[]

for(let i =0; i <=m; i++){
    randomId.push(setCharacters[Math.floor(Math.random() * setCharacters.length)-1])
}console.log('FifdigiId:', randomId.join(""))

// 2.Write a script which generates a random hexadecimal number.

let allHexCodes = '123456789abcdef';
let hexChars = [];
for(let i=0; i<6; i++) {
   hexChars.push(allHexCodes[parseInt(Math.random()*allHexCodes.length)-1]);
} console.log('HexaChar:' ,'#' + hexChars.join(''));


// 3. Write a script which generates a random rgb color number.

let rgb =[];

for(const char of '123'){
    let red =(parseInt(Math.random() * 255))
    let green =(parseInt(Math.random()*255))
    let blue =(parseInt(Math.random()* 255))

    rgb.push(red, green,blue)
    
    console.log(`rgb(${red},${green},${blue})`)
}

// 4. Using the above countries array, create the following new array.

import {countries} from "./countries.js"

// console.log('Countries',countries)

let country =[]
for(let i=0; i<countries.length; i++){
 country.push(countries[i].toUpperCase())
}
console.log(country)

// 5.Using the above countries array, create an array for countries length'.

let numCountries = []

for(let i =0; i<countries.length; i++){
    numCountries.push(countries[i].length)
}
console.log(numCountries)

// 6.Use the countries array to create the following array of arrays:

let countryArr =[]

for(const country of countries){
    let len = country.length
    let firstLetter = country.slice(0, 3).toUpperCase();
    countryArr.push([country,firstLetter,len])
}
console.log(countryArr) 

// 7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

let landCountry = []


for(const country of countries){
    if(country.includes('land')){
        landCountry.push(country)
        console.log(landCountry)
    }else{
       
    }
}
 console.log('All these countries are without land:' ,country)
// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

let iaCountry =[]

for(const country of countries){
    if(country.includes('ia')){
        iaCountry.push(country)
        console.log(iaCountry)
    }else{
      
    }
}
  console.log(`These are countries ends without ia: ${country}`)
// 9.Using the above countries array, find the country containing the biggest number of characters.

let larageChar = 0

let maxChar;

for(const country of countries){
if(country.length > larageChar){
  larageChar = country.length
  maxChar = country
}
}
console.log(maxChar)

// 10. Using the above countries array, find the country containing only 5 characters.

let fiveCountry = []

for(const country of countries){
    if(country.length === 5)
        fiveCountry.push(country)
    
}
console.log(fiveCountry)


// importing webTechs from Day-5 js files

import {webTechs} from "./webTechs.js"

// console.log(webTechs)

// 11.Find the longest word in the webTechs array

let largeTech =0

let maxTech;

for(const webtech of webTechs){
    if(webtech.length > largeTech){
        largeTech = webtech.length
        maxTech = webtech
    }
}
console.log(maxTech)


//12. Use the webTechs array to create the following array of arrays:

let techlen = []

for(const webtech of webTechs){
    let len = webtech.length
    let caps =webtech.toUpperCase()

    techlen.push([caps,len])
}
 console.log(techlen)


//  13.An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

let mernArr = ['MongoDB','Express','React','Node']
let mernStack =[]

for(const techarr of mernArr){
    mernStack.push(techarr[0])
}
console.log(mernStack.join(''))

// 14.Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

for(const tech of webTechs){
   console.log('Webtechs:',tech)
} 

//15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

let fruitsArr =  ['banana', 'orange', 'mango', 'lemon']

let reverseFruits = []

for(let i = fruitsArr.length -1; i >=0; i--){
    reverseFruits.push(fruitsArr[i]);
    }console.log(reverseFruits) 

// 16 Print all the elements of array as shown below.

  const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
  ]


// Using for...of loop method to itearte over the multidimensional array of example

for(let i of fullStack) {
    for(let j of i)
    console.log(j)
}

// *********Exercise-3**************

//1. Copy countries array(Avoid mutation)



let countryCopy = [];

for (const  country of countries){
    countryCopy.push(country)
}console.log(countryCopy)

// 2.Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

let sortCountries = countryCopy.sort()

console.log('Sorted',sortCountries) 

// 3. Sort the webTechs array and mernStack array

console.log(webTechs.sort())
console.log(mernStack.sort())

// 4.Extract all the countries contain the word 'land' from the countries array and print it as array

// Same as in Exercise -2 7th question

 console.log(landCountry)

//  5.Find the country containing the hightest number of characters in the countries array

// Same as in Exercise-3 9th question
 console.log(maxChar)


//  6.Extract all the countries contain the word 'land' from the countries array and print it as array
// Same repeated Question


// 7.Extract all the countries containing only four characters from the countries array and print it as array

let lenFourCountries = [];
for (const country of countries) {
   if(country.length === 4) 
      lenFourCountries.push(country);
} console.log(lenFourCountries);

// 8. Extract all the countries containing two or more words from the countries array and print it as array
let twoWordCountries = [];
for(const country of countries) {
   if(country.split(' ').length > 1) 
      twoWordCountries.push(country);
} console.log(twoWordCountries);


// 9. Reverse the countries array and capitalize each country and stored it as an array

let reversedCountries = countries.reverse();
let capReverseCountries = [];

for(const country of reversedCountries) {
   capReverseCountries.push(country.toUpperCase());   
} 
console.log(capReverseCountries);