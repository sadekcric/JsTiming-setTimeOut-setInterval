const timeout = document.getElementById("timeout");
const interval = document.getElementById("interval");
let print;
let inter;

function openTimeOut() {
  print = setTimeout(function () {
    timeout.innerHTML = `3 seconds Over!`;
  }, 3000);
}

function stopTimeOut() {
  clearTimeout(print);
}


function openInterval(){
  inter= setInterval(function(){
    interval.innerHTML=new Date().toLocaleTimeString()
  },1000)
}

function stopInterval(){
  clearInterval(inter)
}