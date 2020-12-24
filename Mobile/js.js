// touchstart
// touchmove
// touchend
// touchenter
// touchleave
// touchcancel

window.addEventListener("DOMContentLoaded", function() {
    let box = document.querySelector(".box");


    // box.addEventListener("touchstart", function(e) {
    // e.preventDefault();
    // console.log("redbox: touchstart");
    // console.log(e.target);

    // console.log(e.touches[0].target);
    // console.log(e.changedTouches);
    // console.log(e.targetTouches);

    // });

    box.addEventListener("touchmove", function(e) {
        e.preventDefault();
        console.log("redbox: touchmove " + e.touches[0].pageX);
        });

    // box.addEventListener("touchend", function(e) {
    //     e.preventDefault();
    //     console.log("redbox: touchend");
    //     });
    
        // new RegExp("pattern", "flags");

        // /pattern/flags

        // let ans = prompt("ВВедите Ваше имя");

        // let reg = /n/ig;

        // console.log(reg.test(ans));

        // // //console.log(ans.search(reg));
        // // console.log(ans.match(reg));

        //flags
        // i
        // g
        // m

        // \d - поиск всех цифр \D
        // \w - поиск всех букв \W
        // \s - происк пробелов \S

// let pass = prompt("введите пароль");
// console.log(pass.replace(/./g, "*"));

// alert("12-34-56".replace(/-/g, ":"));


// let ans = prompt("ВВедите число");

//         let reg = /\d/g;

//         //console.log(reg.test(ans));

//         console.log(ans.match(reg));


let str = "My name is / R2D2";

console.log(str.match(/\w\d\w\d/i));
console.log(str.match(/\//i));


});