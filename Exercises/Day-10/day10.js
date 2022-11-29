const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']


// 1.create an empty set

const emptySet = new Set()

console.log(emptySet)


// 2.Create a set containing 0 to 10 using loop

 const arr = [0,1,2,3,4,5,6,7,8,9,10]

const countSet = new Set()

for(const num  of arr){
    countSet.add(num)
}

console.log(countSet)

// 3.Remove an element from a set

const contriesSet = new Set(countries)

 console.log(contriesSet)

contriesSet.delete('Sweden')

console.log(contriesSet)

// 4.Clear a set

const clearSet = new Set(a)
 
console.log(clearSet)

clearSet.clear()

console.log(clearSet)

// 5.Create a set of 5 string elements from array

const cites =['Mumbai','Delhi','Bangalore','Hyderabad','Chennai']

const setStrings = new Set(cites)

for(const city of setStrings){
    console.log(city)
}


// 6.Create a map of countries and number of characters of a country

const mapCountries = new Map()

for(const country of countries){
    console.log(mapCountries.set(country,country.length))
}
 

// ***********************************Exercises:Level 2 ************************************

// 1.Find a union b


let A = new Set(a)
let B = new Set(b)

const c = [...A,...B]

const unionSet = new Set(c)

console.log(unionSet)



// 2.Find a intersection b

let charA = new Set(a)
let charB = new Set(b)

const charC = a.filter((num) => charB.has(num))

const interSection = new Set(charC)

console.log(interSection)

// 3. Find a with b

let setA = new Set(a);
let setB = new Set(b);

let setC = a.filter((num) => !B.has(num))

let result = new Set(setC);

console.log(result)

// ***************************Exercises:Level 3**********************************


// *****Countries.js imported from the Day-9*****

import {data} from '/Exercises/Day-9/coutries.js'


// 1.How many languages are there in the countries object file.


const lang = (new Set(data.reduce((arr, curr)=> {
    arr = arr.concat(curr.languages)
    return arr
},[]))).size;

console.log(lang)


// 2.*** Use the countries data to find the 10 most spoken languages:

const mostSpokenLang = new Set(Object.entries(data.reduce((arr, obj) =>(arr = arr.concat(obj.languages)),[]).reduce((obj,name)=>{
    obj[name] = (obj[name] || 0) +1;
    return obj
},{})));

console.log(mostSpokenLang)



