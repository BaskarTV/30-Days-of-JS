// Creating an Element 

// syntax

document.createElement('tagname')

let title = document.createElement('h1')
title.className = 'title'
title.style.fontSize = '24px'
title.textContent = 'Creating HTML element DOM Day 2'

console.log(title)

// Creating elements

// To create multiple elements we should use loop. Using loop we can create as many HTML elements as we want. After we create the element we can assign value to the different properties of the HTML object.

let heading 

for(let i =0; i < 3; i ++){
    heading = document.createElement('h1')
    heading.className = 'title'
    heading.style.fontSize ='24px'
    heading.textContent = i

// Appending child to parent element  using html document.body

document.body.appendChild(heading)

    console.log(heading)
}


// Remove child elements method

// 1.removeChild('parentname')

// 2. innerHTML =''


