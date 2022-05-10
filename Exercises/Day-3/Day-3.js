//  💻 Day 3: Exercises

// Exercises: Level 1


// Question-1 Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

let firstName = 'Baskar';
let lastName ='Thangavelu';
let country ='India';
let city ='Chennai';
let  age =30;
let isMarried ='false';
let year =1992;

console.log(typeof(firstName))
console.log(typeof(lastName))
console.log(typeof(country))
console.log(typeof(city))
console.log(typeof(age))
console.log(typeof(isMarried))
console.log(typeof(year))


// Question-2 Check if type of '10' is equal to 10

console.log(typeof('10'))
console.log(typeof(10))

// Question-3 Check if parseInt('9.8') is equal to 10

console.log(parseInt('9.8'))

// Question-4 Boolean value is either true or false.
    
    // Write three JavaScript statement which provide truthy value.
// Write three JavaScript statement which provide falsy value.

console.log(4 >3)
console.log(5 > 4)
console.log(2 >1)
console.log(3 >4)
console.log(4 >5)
console.log(1 >2)

// Question-5 Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

/* i. 4 > 3  //true
   ii. 4 >= 3 //true
  iii. 4 < 3 //false
  iv. 4 <= 3 //flase
  v. 4 == 4  // true
 vi. 4 === 4 //true
vii. 4 != 4 //false
viii. 4 !== 4 //false
ix. 4 != '4' // true //false
x. 4 == '4'  //true
xi. 4 === '4' //true //false
xii. Find the length of python and jargon and make a falsy comparison statement.*/


console.log(1,4 > 3)
console.log(2,4 >= 3)
console.log(3,4 < 3)
console.log(4,4 <= 3)
console.log(5,4 == 4)
console.log(6,4 === 4)
console.log(7,4 != 4)
console.log(8,4 !== 4)
console.log(9,4 != '4')
console.log(10,4 == '4')
console.log(11,4 === '4')

let py = 'python'
let ja ='jargon'

console.log(py.length)
console.log(ja.length)
console.log(py === ja)

// Question-6  Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()


/*
i. 4 > 3 && 10 < 12 //true
ii. 4 > 3 && 10 > 12 //false
iii. 4 > 3 || 10 < 12 //true
iv. 4 > 3 || 10 > 12 //true
v. !(4 > 3) //false
vi. !(4 < 3) //true
vii. !(false) //true
viii. !(4 > 3 && 10 < 12) //false
ix. !(4 > 3 && 10 > 12)//false//true
x. !(4 === '4')// true
xi. There is no 'on' in both dragon and python 
*/

console.log(1,4 > 3 && 10 < 12)
console.log(2,4 > 3 && 10 > 12)
console.log(3,4 > 3 || 10 < 12)
console.log(4,4 > 3 || 10 > 12)
console.log(5,!(4 > 3))
console.log(6,!(4 < 3))
console.log(7,!(false))
console.log(8,!(4 > 3 && 10 < 12))
console.log(9,!(4 > 3 && 10 > 12))
console.log(10,!(4 === '4'))
// There is no 'on' in both dragon and python
console.log('python'.match(/on/))
console.log('jagon'.match(/on/))


// Question-7 Use the Date object to do the following activities

const date = new Date();

// i.What is the year today?
   console.log(date.getFullYear())

//  ii.What is the month today as a number?
     console.log(date.getMonth()+1)

// iii. What is the date today?
      console.log(date.getDate())  

//  iv. What is the day today as a numbe
     console.log(date.getDay())

// v. What is the hours now?
      console.log(date.getHours())

 // vi. What is the minutes now?
     console.log(date.getMinutes())      
    
 //vii.  Find out the numbers of seconds elapsed from January 1, 1970 to now.
    console.log(date.getTime())
            
// ***************Exercises: Level 2*******************************

// Question-1 Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// let base = prompt('Enter  base');
// let  height = prompt('Enter height')
// let area  = 0.5 * base * height 

console.log('Promt of hegit and base')

// Question-2 Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle 

// let a = parseInt(prompt('Enter side a'))
// let b = parseInt(prompt('Enter side b'));
// let c =parseInt( prompt('Enter side c'));

// let area = a + b + c

// console.log("The perimeter of the triangle " + area)

console.log("Perimeter of triangle method ")


// Question-3 Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

// const length = parseInt(prompt("Enter the length:"))
// const width = parseInt(prompt("Enter the width"))

// const areaoOfRect = length * width
// const rectPerimeter = 2 * length + width

// console.log('The Area of Rectangel is '+ areaoOfRect)
// console.log('The perimeter of Rectangle is '+ rectPerimeter)

console.log('Area of Rectangle');

//Question-4   Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.


// const pi =3.14;

// const radius = parseInt(prompt('Enter the radius of circle:'))

// const circleArea  = pi * radius * radius
// const circumFrence = 2 * pi * radius

// console.log("The area of Circle is "+ circleArea)
// console.log('The Circumfrence of circle is '+ circumFrence)

console.log('The area of Circumfrence')

// Question-9 Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

// const userHour = parseInt(prompt('Enter your hours:'))
// const rateWeek = parseInt(prompt('Enter your rate:'))

// const weeklyEarn = userHour * rateWeek

// console.log('Your weekly earning is ',weeklyEarn)

console.log('Pay of the person')

// Question-10 If the length of your name is greater than 7 say, your name is long else say your name is short.

const myName = 'BaskarThangavelu'

myName.length > 7

?console.log('Your name is long')
:console.log('Your name is short')


