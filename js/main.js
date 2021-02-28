const time = document.getElementById("time")
const greeting = document.getElementById("greeting")

function currentTime(){
    var dt = new Date();
    var hour = dt.getHours();
    var min = dt.getMinutes();
    var sec = dt.getSeconds();
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);
    var t = setTimeout(function(){ currentTime() }, 1000);
    time.innerHTML = hour + ":" + min + ":" + sec;
 
}
  function updateTime(i) {
    if (i < 10) {
      return "0" + i;
    }
    else {
      return i;
    }
  } 
  
  function updateGreeting(){
      var date = new Date();
      var hour = date.getHours();
      if (hour <= 12){
         greeting.innerHTML = "Good Morning"
      }
      else if (hour < 18 ){
          greeting.innerHTML = "Good Afternoon"
      }
      else{
          greeting.innerHTML = "Good Evening"
      }
  }

  
  currentTime();
  updateGreeting();