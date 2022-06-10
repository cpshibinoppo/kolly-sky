function menushow(){
    var show = document.getElementById('menumaindiv');
    show.style.visibility = 'visible';
    show.style.opacity = '1';
}
function closemenu(){
    var show = document.getElementById('menumaindiv');
    show.style.visibility = 'hidden';
    show.style.opacity = '0';
}
/* Tabs start */
var show1btn = document.getElementById('btn1');
var show2btn = document.getElementById('btn2');
var show3btn = document.getElementById('btn3');
function show1(){
    var cav = document.getElementById('btn1');
    cav.classList.add("mystyle");
    var element = document.getElementById('btn2');
    element.classList.remove("mystyle");
    var remove = document.getElementById('btn3');
    remove.classList.remove("mystyle");
}
function show2(){
    var cav = document.getElementById('btn1');
    cav.classList.remove("btn1style");
    var cav = document.getElementById('btn1');
    cav.classList.remove("mystyle");
    var cas = document.getElementById('btn1');
    cas.classList.add("car1");
    var element = document.getElementById('btn2');
    element.classList.add("mystyle");
    var remove = document.getElementById('btn3');
    remove.classList.remove("mystyle");
}
function show3() {
    var cav = document.getElementById('btn1');
    cav.classList.remove("btn1style");
    var cav = document.getElementById('btn1');
    cav.classList.remove("mystyle");
    var cas = document.getElementById('btn1');
    cas.classList.add("car1");
    var remove = document.getElementById('btn2');
    remove.classList.remove("mystyle");
    var element = document.getElementById("btn3");
    element.classList.add("mystyle");
  }
/* Tabs end */