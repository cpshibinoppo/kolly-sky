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
var carddisplay1 = document.getElementById('carddisplay1');
var carddisplay2 = document.getElementById('carddisplay2');
var carddisplay3 = document.getElementById('carddisplay3');
function show1(){
    btn1.classList.add("mystyle");
    btn2.classList.remove("mystyle");
    btn3.classList.remove("mystyle");
    carddisplay1.style.display = 'flex';
    carddisplay2.classList.remove("add");
    carddisplay3.classList.remove("add");

}
function show2(){
    btn1.classList.remove("btn1style");
    btn1.classList.remove("mystyle");
    btn1.classList.add("car1");
    btn2.classList.add("mystyle");
    btn3.classList.remove("mystyle");
    carddisplay1.style.display = 'none';
    carddisplay2.classList.add("add");
    carddisplay3.classList.remove("add");
}
function show3() {
    btn1.classList.remove("btn1style");
    btn1.classList.remove("mystyle");
    btn1.classList.add("car1");
    btn2.classList.remove("mystyle");
    btn3.classList.add("mystyle");
    carddisplay1.style.display = 'none';
    carddisplay2.classList.remove("add");
    carddisplay3.classList.add("add");
  }
/* Tabs end */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
});
function lovecolor1(){
    var one = document.getElementById('1');
    if(one.style.color === 'black'){
        one.style.color = 'red';
    }else if(one.style.color = 'red'){
        one.style.color = 'black';
    }
}
function lovecolor2(){
    var one = document.getElementById('2');
    if(one.style.color === 'black'){
        one.style.color = 'red';
    }else if(one.style.color = 'red'){
        one.style.color = 'black';
    }
}
function lovecolor3(){
    var one = document.getElementById('3');
    if(one.style.color === 'black'){
        one.style.color = 'red';
    }else if(one.style.color = 'red'){
        one.style.color = 'black';
    }
}
function lovecolor4(){
    var one = document.getElementById('4');
    if(one.style.color === 'black'){
        one.style.color = 'red';
    }else if(one.style.color = 'red'){
        one.style.color = 'black';
    }
}

// function show1(){
//     btn1.cav.classList.add("mystyle");
//     var element = document.getElementById('btn2');
//     element.classList.remove("mystyle");
//     var remove = document.getElementById('btn3');
//     remove.classList.remove("mystyle");
// }
// function show2(){
//     btn1.cav.classList.remove("btn1style");
//     var cav = document.getElementById('btn1');
//     cav.classList.remove("mystyle");
//     var cas = document.getElementById('btn1');
//     cas.classList.add("car1");
//     var element = document.getElementById('btn2');
//     element.classList.add("mystyle");
//     var remove = document.getElementById('btn3');
//     remove.classList.remove("mystyle");
// }
// function show3() {
//     var cav = document.getElementById('btn1');
//     cav.classList.remove("btn1style");
//     var cav = document.getElementById('btn1');
//     cav.classList.remove("mystyle");
//     var cas = document.getElementById('btn1');
//     cas.classList.add("car1");
//     var remove = document.getElementById('btn2');
//     remove.classList.remove("mystyle");
//     var element = document.getElementById("btn3");
//     element.classList.add("mystyle");
//   }