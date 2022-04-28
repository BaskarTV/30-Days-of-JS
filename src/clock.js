
// Time generator

function showTime (){
    var date = new Date()
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var merdian = "AM"
    

    if(hour ==0){
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


// Quotes generated below using axios get method

axios.get('https://api.quotable.io/random?tags=technology,famous-quotes')
.then(response => {
   let data = response.data
   let content = data.content
   quoteData.innerText =content
   
})
.catch(error => console.log(error))