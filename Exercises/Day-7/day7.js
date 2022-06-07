//  *********************************************Exercises: Level 1********************************************************

// Declare a function fullName and it print out your full name.

function fullName(){
  console.log('BaskarThangavelu')  
}

fullName()

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.


function fullName2(firstName,lastName){
    fullName= `${firstName} ${lastName}`

    return fullName
}

console.log('ReturnFun: ',fullName2('Baskar','Thangavelu'))


// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.


function addNumbers(numOne,numTwo){
    let sum = numOne + numTwo

    return sum
    
}

console.log(addNumbers(10,20))