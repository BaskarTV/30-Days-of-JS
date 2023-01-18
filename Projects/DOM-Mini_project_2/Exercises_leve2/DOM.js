// Agenda

// fetch API for countries data
// Need to display Number of countries in heading




// importing countries

import {countries} from   './coutries.js'

let countiresName = []

for(let i =0; i < countries.length; i ++){
    countiresName.push(countries[i].name)
}


// heading section title & subheadings

let titleDiv = document.getElementById('demo')

let title 

for(let i =0; i < 4; i++){
   title = document.createElement('h1')
   title.textContent = i
   titleDiv.appendChild(title)
}

// getElement by querselctor for and style specific tags

let heading = document.querySelectorAll('h1')


// centering text and margin & padding

// title
heading[0].textContent ='WORLD COUNTRIES LIST'
heading[0].style.letterSpacing ='10px'
heading[0].style.textAlign ='center'
heading[0].style.fontFamily ='Arial'
heading[0].style.fontSize = '2.5rem'


// total numbers city 

 let total = countries.length



heading[1].textContent = `Total Number of countries: ${total}`
heading[1].style.textAlign ='center'
heading[1].style.fontSize = '15px'
heading[1].style.fontWeight ='700'
heading[1].style.fontFamily ='Arial'


// subheading

heading[2].textContent = '30DaysOfJavaScript DOM: Day-2'
heading[2].style.textAlign ='center'
heading[2].style.fontSize = '12px'
heading[2].style.fontWeight = '400'

// author

heading[3].textContent ='Author: BaskarThangavelu'
heading[3].style.textAlign ='center'
heading[3].style.fontSize ='12px'
heading[3].style.fontWeight ='400'



// div container for the countires

let container = document.querySelector('div')




// table & data of countries names




let table = document.createElement('table')

table.style.padding = '2px'
table.style.textAlign ='bottom'
table.style.width ='70%'
table.style.marginLeft ='20%'
table.style.marginRight = '35%'
table.style.fontSize ='0.9rem'
table.style.fontWeight='550'
table.style.letterSpacing ='2px'

let countryCount = 0

while(countryCount < countiresName.length){
    let tRow = document.createElement('tr')
    for(let i = 0; i < 6; i++){
        if(countryCount == countiresName.length)break;
        let data = document.createElement('td')
        data.textContent = countiresName[countryCount]

        data.style.paddingTop = '30px'
        data.style.paddingBottom = '30px'
        data.style.margin = '2px'
        data.style.fontFamily='Arial'
        data.style.fontWeight ='500'
        

        tRow.appendChild(data)
        countryCount++
    }
    table.appendChild(tRow)
}

container.appendChild(table)

