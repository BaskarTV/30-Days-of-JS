
// Time generator

function showTime (){
    var date = new Date()
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var merdian = "AM"
    

    if(hour == 0){
        hour=12;
    }
    if(hour > 12){
        hour = hour -12;
        merdian = "PM"
    }

    hour = (hour < 10) ? "0" + hour :hour;
    min = (min < 10) ? "0" + min : min;
    sec = (sec < 10) ? "0" + sec :sec;


    var time = hour + ":"  +min +":" + sec + " " + merdian

    document.getElementById("clock").innerHTML = time;
    document.getElementById("clock").innerText = time;

    setTimeout (showTime, 1000);
}

showTime()

let quoteData = document.getElementById('quote')

// console.log(quoteData)

let day = document.getElementById('day');

// console.log(day)

// Getting day from switch case:

let toDay ="";

switch(new Date().getDay()){
    case 0:
    toDay ='Sunday';
    break;
    case 1:
    toDay ='Monday';
    break;
    case 2:
    toDay ='Tuesday';
    break;
    case 3:
    toDay ='Wednesday';
    break;
    case 4:
    toDay ='Thursday';
    break;
    case 5:
    toDay ='Friday';
    break;
    case 6:
    toDay ='Saturday';
    break;
}

day.innerHTML =toDay


// Quotes generated below using axios get method

axios.get('https://api.quotable.io/random?tags=technology,famous-quotes')
.then(response => {
   let data = response.data
   let content = data.content
   quoteData.innerText =content
   
})
.catch(error => console.log(error))



// Page-Preloader

const fadeout = () =>{
    const loadeWrapper = document.querySelector('.wrapper');
    loadeWrapper.classList.add('fade')
}

window.addEventListener('load', fadeout);