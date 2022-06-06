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

console.log(checkSeason('February')) 

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

