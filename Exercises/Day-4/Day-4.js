// *******************Exercises: Level 1********************************************

// Question-1 Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

// const age = Number(prompt("Enter your age:"))

// if (age >=18){
//     console.log('You are old enough to drive')
// }else {
//     console.log(`You are left with ${18 - age} years to drive`)
// }

console.log('Feedback based on age')

// Question-2 Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

// const myAge =25

// const yourAge = Number(prompt('Enter your age'))

// console.log(`You are ${yourAge - myAge} years older than me.`)

console.log('Age comparesion')

// Question-3 If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

let a =4
let b =3 

a > b ?console.log(`${a} is greater than ${b}`) :console.log(`${a} is less than ${b}`)

if(a > b) {
    console.log(`${a} is greater than ${b}`)
}else {
     console.log(`${a} is less than ${b}`)
}

// Question-4 Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

// let evenNum = Number(prompt('Enter Odd number'))
// let oddNum = Number(prompt('Enter Even number'))

// if (evenNum / 2)
// {
//     console.log(`${evenNum} is an even number`)
// }
// else if (evenNum / 2===0 )
// {
//     console.log(`${evenNum} is an even number`)
// }
// if (oddNum / 3)
// {
//     console.log(`${oddNum} is an odd number`)
// }
// else if (oddNum /3 ===0){
//     console.log(`${oddNum} is an odd number`)
// }
console.log('Odd 0r Even number')
// ************************Exercises: Level 2*******************************************************

// Question-1 Write a code which can give grades to students according to theirs scores:
/*80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */


let scores = 100
let result =''

//***If else Method */

/*if(scores >= 50 && scores <=100)
{
    result = 'A'
}
else if (scores >=70 && scores <=89)
{
    result ='B'
}
else if (scores >= 60 && scores <=69)
{
    result ='C'
}
else if(scores >= 50 && scores <=59)
{
    result ='D'
}
else {
    result ='F'
}*/

switch (scores){
    case 80:
    case 100:
    result ='A'
    break;
    case 70:
    case 89:
    result ='B'
    break;
    case 60:
    case 69:
    result ='C'
    break;
    case 50:
    case 59:
    result ='D'
    default:
    result ='F'
}

console.log(result)

// Question-2 Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

// const month = prompt('Enter the month')

// const season = month.toLowerCase()

// let inputSeason =''

/*switch (season){
    case 'september':
    case 'october':
    case 'november':
     inputSeason ='Autumn'
     break;   
     case 'december':
    case 'january':
    case 'february':
     inputSeason ='Winter'
     break;
     case 'march':
    case 'apirl':
    case 'may':
     inputSeason ='Spring'
     break;
     case 'june':
    case 'july':
    case 'august':
     inputSeason ='Summer'
     break;
     default:
    inputSeason ="What Month it is ?"
}

console.log(inputSeason)*/

console.log("Seson based on user input")


// Question-3 Check if a day is weekend day or a working day. Your script will take day as an input.


/*const week = prompt('What is the day today ?')

const days = week.toLowerCase()

let Weekend =""

switch (days){
    case 'monday':
    case 'tuesday': 
    case 'wednesday': 
    case 'thursday': 
    case 'friday':
    Weekend = ` ${days} is a working day`
    break;
    default:
    Weekend =`${days} is a weekend` 
}
console.log(Weekend)*/

console.log('Weekend or Working day check')


// ******************Exercises: Level 3**************************

// Question-1 Write a program which tells the number of days in a month.


/*let month = prompt("enter month to check number of days");

let getMonth = month.toLowerCase()
switch (getMonth) {
    case "january":
    case "march":
    case "may":
    case "july":
    case "august":
    case "october":
    case "december":
        console.log(`${getMonth} has 31 days`)
        break;
    case "april":
    case "june":``
    case "september":
    case "november":
        console.log(`${getMonth} has 30 days`)
        break;
    case "febuary":
        console.log(`${getMonth} has 29 days`)
        break;
    default:
        console.log("invalid month entered");
}*/

console.log('Days in a Month')

