let seconds=0;
let minutes=0;
let hours=0;
function stopwatch(){
    seconds++
    if(seconds==60){
        minutes++
    }


document.getElementById("display").innerHTML=hours+":"+minutes+":"+seconds;
}
window.setInterval(stopwatch,1000)
