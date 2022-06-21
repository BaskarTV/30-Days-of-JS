// *********************************Exercise: Level-1****************************************************************************

// 1.  Declare a function fullName and it print out your full name.

function fullName (){
    console.log('BaskarThangavelu')
}

fullName()

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.

function fullName2(firstName,lastName){
    let fullName =`${firstName} ${lastName}`
    return fullName
}

console.log(fullName2('FunRet:',fullName2('Baskar','Thangavelu')))

// 3.Declare a function addNumbers and it takes two two parameters and it returns sum.

function addNumbers(numOne, numTwo){
    let sum = numOne + numTwo
   return sum
}

console.log(addNumbers(10 , 20))


// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.

function areaOfRectangle(length, width){
    let area = length * width
   return area
}

console.log(areaOfRectangle(10, 33))

// 5.A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.

function perimeterOfRectangle(length, width){
    let perimeter = 2 * (length + width)
    return perimeter
}

console.log(perimeterOfRectangle(11,33))


// 6.A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function volumeOfRectPrism(length,width,height){
    let volume = length * width * height
  return volume
}

console.log(volumeOfRectPrism(10,20,30))


// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

  function areaOfCircle(r){
      let area = Math.PI * r * r
      return area
  }
  console.log(areaOfCircle(2))

  //8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function circumOfCircle(r){
    let circumference = Math.PI * 2 * r
     return circumference
}
console.log(circumOfCircle(10))

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function density (mass, volume){
    let n = mass/volume
    return n
}
console.log(density(10,20)) 

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

function speed(time, distance){
    let totalCoverage = distance/time
    return totalCoverage
}
console.log(speed(10,12))

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function weightOfSubstance(mass, gravity){
    let weight = mass * gravity
    return weight
}
console.log(weightOfSubstance(10,10))

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function celsiusToFahrenheit(c){
    let Farhrenheit = (c * (9/5)) + 32
   return Farhrenheit
}

console.log(celsiusToFahrenheit(10))

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

function bmiCal (weight, height){
    return weight/(height * height)
}

let BMI = bmiCal(66,1.78)
if(BMI < 18.5) console.log('Under weight');
else if(BMI < 24.9)
  console.log('Noral weight')
  else if(BMI < 29.9){
  console.log('Over weight')
  }else {
        console.log('OBESE!')
  }


//   Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

/*Winter – December, January and February.
Spring – March, April and May.
Summer – June, July and August.
Autumn – September, October and November. */

function checkSeason (month){
let season; 

switch (month.toLowerCase()){
    case 'september':
    case 'october':
    case 'november':
    season = 'Autumn'
    break;
   case 'june':
   case 'july':
   case 'August':
  season ='Summer'
  break;
  case 'march':
  case 'apirl':
  case 'may':
season ='Spring'
break;
case 'december':
case 'january':
case 'february':
season ='Winter'
break;
}
 return season
}

console.log('Season:',checkSeason('February')) 

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

function findMax(a,b,c){
    let max =0
    for(const elem of arguments)
    if(elem > max) 
    max = elem
    return max
}
console.log(findMax(2,4,6))
console.log(findMax(0, 10, 5))
console.log(findMax(0, -10, -2))


// ******Exercise Level-2**************

//1. Skipped

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

let solveQuadratic = function(a,b,c){
 let disc = Math.pow(b, 2) -4*a*c

 let posX = (-b+Math.pow(disc, 0.5))/(2*a);
 let negX =(-b-Math.pow(disc, 0.5))/(2*a);
 return [[posX, negX]]
}

console.log(solveQuadratic())
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0}

// 3.Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

let arr = function printArray(arr){
    return arr
}

console.log(arr(Array(10).fill(4)))

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

let showDateTime = () =>{
    let d = new Date()

    let date = d.getDate();
    let month = d.getMonth();
    let year = d.getFullYear();
    let hour = d.getHours();
    let min = d.getMinutes ();

    date = date <10 ? '0' + date.toString() : date;
    month = month <10 ? '0' + month.toString() : month;
    hour = hour < 10 ? '0' + hour.toString() : hour;
    min = min <10 ? '0' + min.toString() : min

    let dateTime = `${date}/${month}/${year} ${hour}:${min}`

    return dateTime
}

console.log(showDateTime()) 

// 5. Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x,y){
  return [y,x]
 
}
   let x =3
    let y=2

console.log(swapValues(x,y))

// 6 Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray (arr){
    let reversed = new Array;
    for(let i = arr.length -1; i >= 0; i--){
        reversed.push(arr[i])
        
    }
    return reversed
}
console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']


// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray (arr){
    return arr.toUpperCase()
}

console.log(capitalizeArray('india'))

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item){
    let arr = new Array;
    arr.push(item)
    return arr
}
console.log(addItem('HTML'))
console.log(addItem('JavaScript'))

// 9.Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(arr, index){
    arr.splice(index,1)
    return arr
}


console.log(removeItem([0,1,2,3,4,5]))
console.log(removeItem([1,2,3,4,5])) 
console.log(removeItem([2,3,4,5]))
console.log(removeItem([3,4,5]))
console.log(removeItem([4,5]))
console.log(removeItem([5]))

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

function sumOfNumbers(num){
    if(num == 0) return 0;
    else  return num + sumOfNumbers(num -1)
}

console.log(sumOfNumbers(10))

// 11.Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(num){
    if(num <= 0) return 0;
    num = num % 3 == 0 ? num -1 :num;
    return num + sumOfOdds(num -3)
}
console.log(sumOfOdds(100))

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.


function sumOfEven(num){
    if(num <= 0) return 0;` `
    num = num % 2 == 0 ? num -1 :num;
    return num + sumOfEven(num -2)
}
console.log(sumOfEven(100))


// 13 .Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

let even =0
let odd =0

 function evensAndOdds(num){
    for(let i =0; i <=100;  i++){
        if(i % 2 ===0){
         even += i
        }else {
            odd += i
        }
    }
    console.log(`The sum of all even numbers are ${even}`)
    console.log(`The sum of all odd number are ${odd}`)
}

evensAndOdds(100)

// 14.Write a function which takes any number of arguments and return the sum of the arguments

function sumOfArgument(...args){
    let  sum =0
    for(const x of args){
    sum  += x

    }
    return sum
}

console.log('SumOfArgs =',sumOfArgument(1,2,3,4,5))

// 15 Writ a function which generates a randomUserIp.

function randomUserIp(){
  let  a = parseInt(Math.random() * 255)
  let b = parseInt(Math.random() * 255)
  let c = parseInt(Math.random() * 255)
  let d = parseInt(Math.random() * 255)

  return `${a}.${b}.${c}.${d}`
}

console.log('Ip Adrr:',randomUserIp())


//16. Write a function which generates a randomMacAddress

function randomMacAddress(){
    let randomaddr =[]
    let randomChar ='0123456789ABCDEF'

    for(let i =0; i<=6; i++){
        let mID1= Math.ceil(Math.random() *15)
        let mID2 = Math.ceil(Math.random() *15)

        randomaddr.push(randomChar[mID1] + randomChar[mID2])
    }
  return randomaddr.join(':')
}

console.log('MacAdrr:',randomMacAddress())


// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
  let literal = '0123456789ABCDEF';
  
  let hex = [];
  let len = Math.floor(Math.random() * 11);
  for(let i=0; i < len; i++) {
    let index= Math.ceil(Math.random() * literal.length) -1;
    hex.push(literal[index]);
  }
  
  return '#' + hex.join('');

}

console.log('HexId:',randomHexaNumberGenerator())


// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

function randomUserIdGenerator() {
  let literal = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
  let id = [];
  for(let x=0; x<7; x++) {
    let index = Math.ceil(Math.random() * literal.length)-1;
     id.push(literal[index])
   }
   return id.join('');
}


console.log('UserId:',randomUserIdGenerator())



// ********************************Exercise Level-3***********************************************

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

// function userIdGeneratedByUser(){
   
//    let len = parseInt(prompt('Enter Length of ID: '))
//    let char = parseInt(prompt('Enter No of IDs: '))
//    let character = '0123456789abcdefg'

// let  userId = []
   
// for(let x =1; x<=char; x ++){
//     let rands =[]
//     for(let i =1; i <=len; i++){
//         rands.push(character[Math.floor(Math.random() * character.length) -1])
//     }
//     userId.push(rands.join(''))
// }
// return userId
    
// }

// console.log(userIdGeneratedByUser())


// 2. Write a function name rgbColorGenerator and it generates rgb colors.


function rgbColorGenerator(){
    let red = parseInt(Math.random() * 255) 
    let green = parseInt(Math.random() * 255)
    let blue = parseInt(Math.random() * 255)

    return `rgb(${red},${green},${blue})`
}
console.log(rgbColorGenerator())

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.

function arrayOfHexaColors(){
    let hexNum  = '01232456789abcef';
    let loopCount = parseInt(Math.random() * 10)
let  hexArr = []

for(let x =1 ; x <= loopCount; x ++){
    let hexChar = []
    for(let i = 1; i < 6; i++ ){
        hexChar.push(hexNum[parseInt(Math.random() * hexNum.length) -1])
    }
    hexArr.push('#' + hexChar.join(''))
}
return hexArr;

}
console.log(arrayOfHexaColors())

// 4.Write a function arrayOfRgbColors which return any number of RGB colors in an array.


function arrayOfRgbColors(){
    let rgbArr =[]
    let r = parseInt(Math.random() * 255)
    let g = parseInt(Math.random() * 255)
    let b = parseInt(Math.random() * 255)

    rgbArr.push(r,b,g)

    return rgbArr

}

console.log("Array Of RGB:",arrayOfRgbColors())

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array

function shuffleArray(arr){
    for(let i= arr.length-1; i  >0; i--){
        let j = Math.floor(Math.random() * (i + 1))

     let temp = arr[i];
     arr[i] = arr[j]
     arr[j] =temp
    
    }
   return arr
}
 
console.log(shuffleArray([1,2,3,4,5,6,7,8,9,0]))

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number

function factorial(num){
    if(num <=1) {
        return 1;
    }else{
        return num * factorial(num -1)
    }
}

console.log(factorial(4))

// 10.Call your function isEmpty, it takes a parameter and it checks if it is empty or not

let isEmpty = (arg) => !Boolean(arg.length);

console.log(isEmpty(Array()))


// 11. Call your function sum, it takes any number of arguments and it returns the sum.

function sum (...args){
 let total =0
 for(const elem of args){
    total += elem

 }
 return total
}

console.log(sum(2,3,4,5,11,10,5))

// 12.Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.

// let sumOfArrayItems = (arr) => {
//   let sum = 0;     
//   for(const i of arr) 
//     sum += i      
//   return sum;
// }

// console.log(sumOfArrayItems())

// 13.Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

let average = (arr) => {
  return sumOfArrayItems(arr) / arr.length;
}

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.

let modifyArray = arr => {
  if(arr.length < 5) return 'Item Not Found!';
  arr[4] = arr[4].toUpperCase();
  return arr;
}


// 15. Write a function called isPrime, which checks if a number is prime number.


let isPrime = num => {
   if(num <= 0 || num == 1) return false; 
   if(num == 2 || num == 3) return true;    
   
   for(let i=1; i<=Math.sqrt(num); i++) {
     if(num % i == 0) return false;      
   }
   return true;     
}

// 16.Write a functions which checks if all items are unique in the array.

function areAllUnique(arr) {
  for(let x = 1; x < arr.length; x++) {
    for(let i = 0; i< x; i++) {
      if(arr[x] == arr[i])
        return false;
    }
  } return true;
}

// 17.Write a function which checks if all the items of the array are the same data type.



let areSameType = arr => {
  let type = typeof arr[0];
  for(const i of arr) {
    if(type != i)
      return false;      
  }
  return true;
}



// 18.JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.





function isValidVariable(varName) {
  let regex = /[_|\$|a-z|A-Z|0-9]+/;
  return regex.test(varName);
}

// 19  Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.



let getUniqueRands = () => {
  let arr = [];
  for(let i = 0; i<7; i++) {
    let random = Math.ceil(Math.random() * 9);
    
    let isUnique = true;
    for(const x of arr) {
      if(random == x) {
        isUnique = false;
        break;
      }
    }
    if(isUnique) arr.push(random);
  }
  return arr; 
}

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array


function reverseCountries (arr) {
  let copy = arr.slice(0, arr.length);
  
  let index = 0;
  for(let i=arr.length-1; i>=0; i--) { 
    arr[index] = copy[i];
    index++;
  }
  return arr;
} 


