// setTimeout(sayHello,3000);
// let timerId = setTimeout(sayHello,3000);
// clearTimeout(timerId);

// function sayHello(){
// console.log("Hello world!");
// }

// let timerId = setInterval(sayHello,2000);
//clearTimeout(timerId);

// let timerId = setTimeout(function func () {
//     console.log("Hello");
//     setTimeout(func,2000);
// });

let btn  = document.querySelector(".btn");
let elem = document.querySelector(".box");

function myAnimation () {
    let pos = 0;

    let id = setInterval(frame, 10);

    function frame () {
        if (pos == 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left = pos + "px";
        }
    }
}

btn.addEventListener("click", myAnimation);

// Делегирование
let btnBlock = document.querySelector(".btn-block"),
    btns = document.getElementsByTagName("button");

    btnBlock.addEventListener("click", function(event) {
       // if(event.target && event.target.classList.contains("first")) {
        if(event.target && event.target.matches("button.first")) {
            console.log("Hello");
        }
    });