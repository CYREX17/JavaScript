// let obj = new Object();  //old syntax

let options = {
width: 1024,
height: 1024,
name: "test"
};

console.log(options.name);
options.bool = false;
options.colors = {
    border: "black",
    bg: "red" 
};

delete options.bool;

console.log(options);

for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

console.log(Object.keys(options).length);

// let arr = [1,2,"three",4,5];
// arr.pop();
// arr.push(5);
// arr.shift();
// arr.unshift("1");
// console.log(arr);

// // for (let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);    
// // }

// arr.forEach(function(item, i, mass) {
// console.log(i + ": " + item + " (массив: " + mass + ")");
// });


// let mass = [1,3,4,6,7];

// for (let key of mass) {
//     console.log(key);
// }



// let ans = prompt ("1", "2"),
//     arr = [];

// arr = ans.split(",");
// console.log(arr);

// let arr = ["aaa", "sdsd", "sdsdss", "ss"],
//     i = arr.join(", ");
//     console.log(i);

let arr = ["aaa", "sdsd", "sdsdss", "ss"],
    i = arr.sort();
    console.log(i);

    let arrr = [1, 33, 28, 3],
    j = arrr.sort(compareNum);
function compareNum(a,b){
    return a-b;
}

    console.log(j);

let soldier = {
    health: 400,
    armor: 100
};

let john = {
    health:100
};

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);

