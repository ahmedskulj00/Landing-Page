const time = document.getElementById("time")
const greeting = document.getElementById("greeting")
const name = document.getElementById("name")
const feeling = document.getElementById("feeling")
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

  function getName(){
    if(localStorage.getItem('name') === null){
      name.textContent = '[Enter name]'
    }else{
      name.textContent = localStorage.getItem('name')
    }
  }

  function setName(e){
    if(e.type === 'keypress'){
       if (e.which == 13 || e.keyCode == 13){
        localStorage.setItem('name', e.target.innerText)
        name.blur()
       }
    }else{
      localStorage.setItem('name', e.target.innerText)
    }
  }

  function getFeeling(){
    if(localStorage.getItem('feeling') === null){
      feeling.textContent = '[Enter feeling]'
    }else{
      feeling.textContent = localStorage.getItem('feeling')
    }
  }
  
  function setFeeling(e){
    if (e.type === 'keypress'){
      if (e.which == 13 || e.keyCode == 13){
        localStorage.setItem('feeling', e.target.innerText)
        feeling.blur()
      }
    }else{
      localStorage.setItem('feeling', e.target.innerText)
    }
  }

name.addEventListener("keypress", setName)
name.addEventListener("blur", setName)
feeling.addEventListener("keypress", setFeeling)
feeling.addEventListener("blur", setFeeling)

  currentTime();
  updateGreeting();
  getName();
  getFeeling();