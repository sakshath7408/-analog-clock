let hourhand = document.querySelector('.hrs');
let minutehand = document.querySelector('.mins');
let secondhand = document.querySelector('.secs');
 
function rotate(){
 
    const currentDate = new Date();
 
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();   
 
    const secondsfraction = seconds/60;   
    const minutesfraction = (secondsfraction+minutes)/60;
    const hoursfraction = (minutesfraction+hours)/12;
 
    const secondsRotate = secondsfraction*360 
    const minutesRotation = minutesfraction*360
    const hoursRotation = hoursfraction*360
 
    secondhand.style.transform = `rotate(${secondsRotate}deg)`
    minutehand.style.transform = `rotate(${minutesRotation}deg)`
    hourhand.style.transform = `rotate(${hoursRotation}deg)`
 
 
}
 
setInterval(rotate, 1000)
 
 

