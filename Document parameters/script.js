let box = document.querySelector(".box");
let btn = document.querySelector("button");

let width = box.scrollWidth;
let height = box.scrollHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);
console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);

btn.addEventListener("click", function() {
    box.scrollTop = 0;
});

scrollBy(0,200);
scrollTo(0,200);

