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

const keys = Object.keys(copyPerson)
console.log(keys)
// const address = Object.keys(copyPerson.address)
// console.log(address)

person.getPersonInfo = function (name, age, country, skills){
    name =  this.getFullName();
     age = this.age
     country = this.country
      let details =`${name} .\nis age of ${age} .\nfrom ${country}`
    return details
}

console.log(person.getPersonInfo())

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
    let details = `The name of the dog is ${name}\n It has four ${legs} legs. \ncolor is ${color} \n the age is ${age} \nIts barks like ${bark}`
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

// 1.Find the person who has many skills in the users object.



