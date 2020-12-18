// let num = 20;

// function showFirstMessage (text) {
//     alert(text);
//     num = 10;    
// }

// showFirstMessage("Hello World!");
// console.log(num);

function calc (a,b){               //function declaration
    return (a+b);
}

console.log(calc(3,4));
console.log(calc("text1","text2"));

let calc1 = function(c,d){         //function expression
    return (c*d);
};

let cacl2 = (e,f) => e+f;

let str = "text";

console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

str.toUpperCase();

let twelve = "12.2px";

//console.log(Math.round(twelve));

console.log(parseInt(twelve));
console.log(parseFloat(twelve));
