// Agenda

// 1.Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
// 2.Color Generator function for backgrounds

// *Even numbers background is green
// *Odd numbers background is yellow
// *Prime numbers background is red


// title & subheadings
         
let titleDiv = document.getElementById('demo')


let title 

for(let i =0; i < 3; i++){
    title = document.createElement ('h1')
    title.textContent = i
    titleDiv.appendChild(title)
}

let heading = document.querySelectorAll('h1')

// center text and margin & padding

// title
heading[0].style.textAlign = 'center'
heading[0].textContent ='Number Generator'

// subheading
heading[1].style.textAlign ='center'
heading[1].textContent ='30DaysofJavaScript:DOM Day 2'
heading[1].style.textDecoration ='underline'
heading[1].style.fontSize ='15px'

// author
heading[2].style.textAlign='center'
heading[2].textContent ='Author: Baskar Thangavelu'
heading[2].style.textDecoration ='underline'
heading[2].style.fontSize ='13px'



// div container 

let container = document.querySelector('div')

//PrimeNumber function 

let isPrime = (num) => {
 if(num == 1 || num == 0) return false;
 if(num == 2 || num == 3) return true;

 for(let i =0; i <= Math.sqrt(num); i++){
    if(num % i == 0) return false
 }
  return true
}



// Number generator using loop & table for storing

let table = document.createElement('table')

let nums =0;

while(nums <=101){
    let row = document.createElement('tr')
   for(let i = 1; i <= 6; i++){
     let data = document.createElement('td') 
     data.textContent = nums

     data.style.margin = '1px'
     data.style.padding= '5px'

    if(isPrime(nums)){
        data.style.backgroundColor = '#f76262'
    }else if(nums % 2 !== 0){
        data.style.backgroundColor = '#fee904'
    }else data.style.backgroundColor = '#42b845' 


    row.appendChild(data)  
     nums++

   }
     table.appendChild(row)
   }



table.style.width ='40%'
table.style.marginRight = '25%'
table.style.marginLeft = '30%'
table.style.height ='20rem'
table.style.fontSize = '2.5rem'
table.style.color ='black'
table.style.fontWeight ='550'
table.style.textAlign = 'center'
table.style.fontFamily ='NanumGothic'
container.appendChild(table)


// adding background color

