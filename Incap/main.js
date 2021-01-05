//1

// let number = 1;

// (function () {
//     let number = 2;
//     console.log(number);

//     return console.log(number +3);
// }());

// console.log(number);

// //2
// let user = (function() {
//     let privat = function() {
//         console.log("I'm private");
//     };
//     return {
//         sayHello : function() {
//             console.log("Hello");
//         }
//     };
// }());

// console.log(user);
// console.log(user.sayHello());

// //3
// let user1 = (function() {
//     let privat = function() {
//         console.log("I'm private");
//     };

//     let  sayHello = function() {
//         console.log("Hello");
//     };

//     return {
//         sayHello : sayHello
//     };
// }());

// console.log(user1);
// console.log(user1.sayHello());

function myModule () {
    this.hello = function() {
        return "Hello";
    };

    this.goodbye = function() {
        return "goodbye";
    };
}

module.exports = myModule;