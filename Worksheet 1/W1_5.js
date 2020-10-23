var date = new Date();
document.write(date.getFullYear()+" -Year <br>");
document.write(date.getMonth()+" - Month <br>");
document.write(date.getDay()+" - Day <br>");
document.write(date.getHours()+" - Current Hour <br>");
document.write(date.getMinutes()+" - Current Minute <br>");
document.write(date.getSeconds()+" - Current Second");
setTimeout(()=>{location.href = window.location.href;},1000);