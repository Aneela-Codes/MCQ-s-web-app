

let currentTime = new Date(new Date().setTime(0));
let time = currentTime.getTime()
let seconds = Math.floor((time % (100*60))/1000)
let minutes = Math.floor((time % (1000*60*60))/(1000*60))
let timer = 0;
console.log("Time = " +time)

let endInterval = setInterval( function(){
    if(seconds <59){
        seconds++;
    }
    else{
        minutes++;
        seconds = 0;
    }
    // console.log(seconds, minutes)
    let formattedSecs = seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formattedMin = minutes < 10 ? `0${minutes}` : `${minutes}`;
    document.querySelector('.time').innerHTML = `${formattedMin} : ${formattedSecs}`
}, 1000)
