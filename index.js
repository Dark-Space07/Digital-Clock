function timeWatch() {
    let myTime = new Date();
    let hours = (myTime.getHours()<10)? "0" + myTime.getHours(): myTime.getHours();
    let min = (myTime.getMinutes()<10)? "0" + myTime.getMinutes(): myTime.getMinutes(),
    sec = (myTime.getSeconds()<10)? "0" + myTime.getSeconds() : myTime.getSeconds();
    let m = (hours >= 12)? "PM" : "AM";

    if(hours == 0){
        hours = 12;
    } else if(hours > 12){
        hours = hours - 12;
    }
    else{
        hours;
    }

    let timing = `${hours} : ${min} : ${sec}   ${m}`;
    document.getElementsByClassName("hour")[0].innerHTML = timing;

    let month = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let y = month[myTime.getMonth()];
    let w = week[myTime.getDay()];
    document.getElementsByClassName("date")[0].innerHTML = y +", "+ w +" --- "+myTime.getFullYear();
}
timeWatch();

setInterval(timeWatch,1000);

