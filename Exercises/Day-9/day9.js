// ************Higer Order function or Callback Functions******************




// Countries data import variable names changed due to variables duplications 

import {data} from './coutries.js'




//  Callback function 

const callback = (n) =>{
    return n ** 2
}

console.log(callback(2))

function cube(callback, n){
    return callback(n) * n
}

console.log(cube(callback, 4))



// Returning function

// Higher order functions retuns functions as a value

const higherOrder = n =>{
    const doSomething = m =>{
        const doWhatever = t => {
            return 2 * n + 3 * m + t
        }
        return doWhatever
    }
    return doSomething
}

console.log(higherOrder(2)(3)(10))

// Callback function using forEach method


const numbers = [1,2,3,4,5]

const sumArray = arr =>{
    let sum = 0 
    arr.forEach(function (element){
        sum += element
    })
    return sum
}

console.log(sumArray(numbers))



//*************** */ Setting time ****************************

// syntax

// function callback() {
//     // code goes here
//   }
//   setInterval(callback, duration)


  function message() {
    console.log("Hello there")
  }
//   setInterval(message, 1000)

// setting time using a setTimeout

// syntax

// function callback() {
//     // code goes here
//   }



// *************setTimeout(callback, duration) // duration in milliseconds**********************



let user = 'Baskar'
let wishing = 'hello'

function greetings(){
 console.log(`${wishing} ${user} Welcome back`)
}
setTimeout(greetings, 500)



// ******************Functional Programming***********************************************


// *******************FOR Each Method**********************
const num = [1,2,3,4,5]

num.forEach(num =>{
    console.log(num)
})

let total = 0;

num.forEach(num =>{
    total += num
})
console.log(total)


const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya',
  ]

countries.forEach(element =>
 console.log(element.toUpperCase())
)

// **********************Map Method ********************

// Example-1

const numberSquare = num.map((num) => num * num)

console.log(numberSquare)

// Example-2 

const countriesArr = countries.map((elements) => elements.toUpperCase())

console.log(countriesArr)



// Example-3

const countriesFirstThreeLetters = countries.map((element) => element.toUpperCase().slice(0,3))

console.log(countriesFirstThreeLetters)


// **************Filter Method**************************

// Example-1

const countiesContainingLand = countries.filter((conuntry) => conuntry.includes('land'))

console.log(countiesContainingLand)


// Example-2 


const countriesEndByia = countries.filter((conuntry) => conuntry.includes('ia'))

console.log(countriesEndByia)


// Example-3

const  countriesHaveFiveLetters = countries.filter((country) => country.length === 5)

console.log(countriesHaveFiveLetters)


// Example-4

const scores = [
    { name: 'Asabeneh', score: 95 },
     { name: 'Lidiya', score: 98 },
    { name: 'Mathias', score: 80 },
    { name: 'Elias', score: 50 },
    { name: 'Martha', score: 85 },
    { name: 'John', score: 100 },
  ]


  const scoreGreaterEighty =  scores.filter((score) => score.score > 80)





  console.log(scoreGreaterEighty);
  
// ***************Reduce Method ***************************


// Example-1


const sum = num.reduce((acc, cur) => acc + cur, 0)

console.log(sum)


// ****************Every Method***************

// Example-1

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const areAllStr = names.every((name) => typeof name === 'string')

console.log(areAllStr) //true


// Example-2

const bools = [true, true, true, true]
const areAllTrue = bools.every((b) => b === true) // Are all true? 

console.log(areAllTrue) // true


// *******************Find Method**********************

// Example-1

const ages = [24,22,25,32,35,18]
const age = ages.find((age) => age < 20)

console.log(age)


// Example -2

const result = names.find((name) => name.length > 7)

console.log(result)



// Example-3

const scoreByFind = scores.find((user) => user.score > 80)

console.log(scoreByFind);


// ***************FindIndex Method***************

// Example-1
const nameIndex = names.findIndex((names) => names.length > 7)
const numIndex = ages.findIndex((numbers) => numbers < 20)


console.log(nameIndex)
console.log(numIndex)



// **************Some Method***********************

// Same as Every Method


// *****************Sort Method**********************

// Example-1

const products = ['Milk', 'Coffee', 'Sugar', 'Honey', 'Apple', 'Carrot']
console.log(products.sort())

// Example-2

const numeric = [9.8,3.14,100,37]

console.log("Wrong Result", numeric.sort())


numeric.sort((a,b) => a - b)

console.log(numeric)

numeric.sort((a,b) => b - a)

console.log(numeric)


// Example-3

const users = [
    { name: 'Asabeneh', age: 150 },
    { name: 'Brook', age: 50 },
    { name: 'Eyob', age: 100 },
    { name: 'Elias', age: 22 },
  ]

  users.sort((a,b) => {
    if(a.age > b.age ) return 1
    if(a.age < b.age )  return -1
    
    return 0
  })

  console.log(users)


// ***********************************************************💻 Exercises********************************************************************

// Exercises: Level 1

// Variable names modified as it is already in the partices in the Examples sections

const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products1 = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]



// 1. Explain the difference between forEach, map, filter, and reduce.

//* ForEach: It takes a callback function with elements,index parameter and array itself

//* Map: It takes a callback function with elements,index array parameter and returns an new array

//* Filter: Filter out items which full filling conditions and returns a new array

//* Reduce: The callback function takes accumulator, current and optional intial value as a parameter and returns a single value 


// 2. Define a callback function before you use it in forEach, map, filter or reduce.

//* A callback is a function which can be passed as parameter to other function


// 3. Use forEach to console.log each country in the countries array.

const eachCountries = countries1.forEach((country) => console.log(country))

// 4. Use forEach to console.log each name in the names array.

const eachNames = names1.forEach((names) => console.log(names))

// 5.Use forEach to console.log each number in the numbers array.

const eachNumbers = numbers1.forEach((num) => console.log(num))

//6. Use map to create a new array by changing each country to uppercase in the countries array.

const countryArray = countries1.map((country) => country.toUpperCase())

console.log(countryArray)

// 7. Use map to create an array of countries length from countries array.

const countriesLength = countries1.map((country) => country.length)

console.log(countriesLength)

// 8. Use map to create a new array by changing each number to square in the numbers array

const squarNumbers = numbers1.map((square) => square * square)

console.log(squarNumbers)

// 9.Use map to change to each name to uppercase in the names array

const captialNames = names1.map((names) => names.toUpperCase())

console.log(captialNames)

// 10.Use map to map the products array to its corresponding prices.

const productPrice = products1.map((products) => `${products.product}:${products.price}`);

console.log(productPrice)

// 11.Use filter to filter out countries containing land.

const land = countries1.filter((land) =>land.toLowerCase().includes('land'))

console.log(land)

// 12.Use filter to filter out countries having six character.

const countryWithSixChar = countries1.filter((country) => country.length === 6)

console.log(countryWithSixChar)

// 13.Use filter to filter out countries containing six letters and more in the country array.

const countryWithMaxChar = countries1.filter((country) => country.length >= 6)

console.log(countryWithMaxChar)

// 14.Use filter to filter out country start with 'E';

const letterWithE = countries1.filter((country) => country.toUpperCase().includes('E'))

console.log(letterWithE);

// 15.Use filter to filter out only prices with values.

const priceWithValues = products1.filter((product) => product.price > 0)

console.log(priceWithValues)

// 16.Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.

const getStringLists = (arr) => {
    let string = arr.filter(item => {
        return typeof item === 'string'
    })
    return string
}
console.log(getStringLists(['google', 5, 'Microsoft', 6]))

// 17.Use reduce to sum all the numbers in the numbers array.

const reduceNum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(reduceNum)

// 18.Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
 
let text ="are north European countries"

const europeanCountries = countries1.reduce((accumulator, currentValue) =>`${accumulator},${currentValue}`)

console.log("Estonia",europeanCountries,`${text}`)

// 19.Explain the difference between some and every

//Some Determines whether the specified callback function returns true for any element of an array.

let someArr = countries1.some((value) => value.length > 6)

console.log(someArr)

// every Determines whether all the members of an array satisfy the specified test.

let everyArr = countries1.every((value) => value.toLowerCase().includes('land'))

console.log(everyArr)



// 20.Use some to check if some names' length greater than seven in names array

let someNames = names1.some((names) => names.length > 7)

console.log(someNames)

// 21. Use every to check if all the countries contain the word land

let everyCountries = countries.every((country) => country.toLowerCase().includes('land'))


console.log(everyCountries)

// 22.Explain the difference between find and findIndex.

// find: Return the first element which satisfies the condition

// Example:

const  findeArr = numbers1.find((num) => num < 10)

console.log(findeArr)

// findIndex: Return the position of the first element which satisfies the condition

// Example:

const findeIndexArr = numbers1.findIndex((num) =>  num < 10)

console.log(findeIndexArr)

// 23.Use find to find the first country containing only six letters in the countries array

const firstCountry = countries1.find((country) => country.length > 6)

console.log(firstCountry)

// 24.Use findIndex to find the position of the first country containing only six letters in the countries array

const firstIndexCountry = countries1.findIndex((country) => country.length <= 6)

console.log(firstIndexCountry)


// 25.Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const findNorway = countries1.findIndex((country) => country.includes('Norway'))    

console.log(findNorway)

// 26.Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const findRussia = countries1.findIndex((country) =>country.includes('Russia'))

console.log(findRussia)

// *****************************Exercises: Level 2******************

// 1.Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))

const totalPrice = products1.map((product) => {
    return product.price
}).filter(price => {
    return price > 0
}).reduce((accumulator, currentValue) =>{
    return accumulator + currentValue
})

console.log('TotalPrice:' ,totalPrice)

// 2.Find the sum of price of products using only reduce reduce(callback))

// const products1 = [
//     { product: 'banana', price: 3 },
//     { product: 'mango', price: 6 },
//     { product: 'potato', price: ' ' },
//     { product: 'avocado', price: 8 },
//     { product: 'coffee', price: 10 },
//     { product: 'tea', price: '' },
//   ]


  const sumOfProduct =  products1.reduce((accumulator, currentValue) => accumulator + currentValue.price,0)
  console.log(sumOfProduct)

//***Unable to solve in pending

// 3.Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).

const categorizeCountries = (countries) => {
    let coun = countries.filter(country => {
        return country.toLowerCase().includes("ia") || country.toLowerCase().includes("island") || country.toLowerCase().includes("land") || country.toLowerCase().includes("stan");
    })
    return coun;
}
console.log(categorizeCountries(countries));

// 4.Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.

// 5.Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array

let n = 10
const firstTenCoutries = data.slice(0,n).map(countries => {
    return countries.name
})

console.log(firstTenCoutries);


// 6.Declare a getLastTenCountries function which which returns the last ten countries in the countries array.

let N = 10

const lastTenCountries = data.slice(-11,-1).map(countries => {
    return countries.name
})

console.log(lastTenCountries)



// 7.Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
const frequentFirstLetter = Object.entries(data.map(c => c[0]).reduce((acc,cur) => {
    acc[cur] = (acc[cur] || 0) +1;
    return acc;
 }, {})).reduce((obj, cur) => {
    obj.max = (obj.max || cur[1]);
    obj.letter = (obj.letter || '');
 
    if (obj.max < cur[1]) {
       obj.max = cur[1];
       obj.letter = cur[0];
    }
    return obj;
 }, {}).letter;
 
 console.log(frequentFirstLetter);