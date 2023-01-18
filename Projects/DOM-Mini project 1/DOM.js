// Agenda 

// *Need to create Date and Time //Done
// *Need to create a color generator for Date background & the Year background 
// *Need to create colorbackground generator for challenges //Done



// Centering the Div

let centerDiv = document.getElementById('demo').style.textAlign = 'center'



// Random colorGenerator in hexa 

const getColors = () => {
    let nums = '0123456789abcdef';
    let hexArr = []
    for(let i =0; i < 6; i++){
      let index = Math.floor(Math.random() * 15)
      hexArr.push(nums[index]);
    }
     return '#' + hexArr.join('')
}





// h1 Tag 

let h1 = document.querySelector('h1');

h1.style.fontFamily = 'Quicksand'
h1.style.fontSize = '1.5rem'



// Year in Text

let yearText = document.querySelector('strong')

yearText.style.fontSize = '4.5rem'


// YearText color Changer

setInterval(() => {
    yearText.style.backgroundColor = getColors()
},1000)

// Month Date & Time 
function showTime()  {
  let date = new Date()
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  let monthIndex = date.getMonth();
  let  d = date.getDate()
  let hour = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let year = date.getFullYear()
  let merdian = 'AM'

  if(hour == 0){
    hour = 12;
  }
  if(hour > 12){
    hour = hour -12;
    merdian ='PM'
  }
 date = date < 10 ? "0" + date.toString() : date;
 hour = hour < 10 ? "0" + hour.toString() : hour;
 min = min < 10 ? "0" + min.toString() : min;
 sec = sec < 10 ? "0" + sec : sec;

let dateTime =  `${months[monthIndex]} ${d} ${year}  ${hour}:${min}:${sec} ${merdian}`
 


let p = document.querySelector('p')

p.textContent = dateTime

setTimeout(showTime, 1000)


}

showTime();

let pTag = document.querySelector('p');

pTag.style.fontSize = '0.9rem';
pTag.style.fontWeight = '600'
pTag.style.margin = 'auto'
pTag.style.padding = '6px'
pTag.style.width = '11%'

// Date & Time Color Changer

setInterval(() => {
 pTag.style.backgroundColor = getColors()

},1000)


// h2 Tag 

let h2 = document.querySelector('h2')

h2.style.fontSize = '1.2rem'
h2.style.textDecoration = 'underline'
h2.style.fontWeight = '100'




// li Tag 

let listItem = document.querySelectorAll('li')

for(let item of listItem){
    item.style.listStyle = 'none'
    item.style.margin ='10px'
    item.style.padding = '6px'
    item.style.paddingTop = '1rem'
    item.style.height = '2.5rem'
    item.style.textAlign ='left'
    item.style.fontSize = '15px'
}


// Adding background for (li) using endsWith()

for(const item of listItem){
   if(item.textContent.endsWith('Done')){
       item.style.backgroundColor = '#99ff99'
   }else if(item.textContent.endsWith('Ongoing')){
       item.style.backgroundColor = '#ffff80'
   }else 
       item.style.backgroundColor = '#ff704d'

    item.style.marginRight ='30rem'
    item.style.marginLeft ='30rem'
    item.style.fontFamily ='Open Sans'
    item.style.fontWeight ='100'
}



