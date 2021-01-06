let check = 1;
let check2 = 2;

console.log(`1 ${check}`);

function func () {
    console.log(`2 ${check}`);
    return 2;
}

console.log(`3 ${check}`);

check = func()+1;

console.log(`4 ${check}`);

func();

let square = document.getElementsByClassName("sq")[0];
let sum=2;
let sum2;
square.addEventListener("click", function funk2 () {
    sum = ++check;
    sum2 = sum;
    console.log(sum);
    console.log(sum2);
});




console.log(`sum ${sum}`);

console.log(`6 ${check}`);