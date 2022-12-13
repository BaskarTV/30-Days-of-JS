
// ***********Exercises:Level 1****************

// 1.Display the countries array as a table

const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]
console.table(countries)
  
// 2.Display the countries object as a table

const countriesObj =[
    {country:'Finland',
    city:'Helsinki'},
    {country:'Sweden',
    city:'Stockholm'},
    {country:'Norway',
    city:'Oslo'}
]

console.table(countriesObj)

// 3.Use console.group() to group logs

const names = ['Asabeneh', 'Brook', 'David', 'John']

// countries name changed to countriesArr due to variable duplication


const countriesArr= [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo']
]

const user = {
  name: 'Asabeneh',
  title: 'Programmer',
  country: 'Finland',
  city: 'Helsinki',
  age: 250
}
const users = [
  {
    name: 'Asabeneh',
    title: 'Programmer',
    country: 'Finland',
    city: 'Helsinki',
    age: 250
  },
  {
    name: 'Eyob',
    title: 'Teacher',
    country: 'Sweden',
    city: 'London',
    age: 25
  },
  {
    name: 'Asab',
    title: 'Instructor',
    country: 'Norway',
    city: 'Oslo',
    age: 22
  },
  {
    name: 'Matias',
    title: 'Developer',
    country: 'Denmark',
    city: 'Copenhagen',
    age: 28
  }
]

console.group('Names')
console.log(names)
console.groupEnd()

console.group('Countries')
console.log(countriesArr)
console.groupEnd()

console.group('Users')
console.log(user)
console.groupEnd()

// **************Exercises:Level 2*************

// 1.10 > 2 * 10 use console.assert()

console.assert(10 > 2 * 10, '10 is not greater than 20')

// 2.Write a warning message using console.warn()

console.warn('Warning Message')

// 3.Write an error message using console.error()

console.error('Error Message')

// **************Exercises:Level 2*************

// 1.Check the speed difference among the following loops: while, for, for of, forEach


console.time('Regular for loop')
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1])
}
console.timeEnd('Regular for loop')

console.time('for of loop')
for (const [name, city] of countries) {
  console.log(name, city)
}
console.timeEnd('for of loop')

console.time('forEach loop')
countries.forEach(([name, city]) => {
  console.log(name, city)
})
console.timeEnd('forEach loop')
