let num = 50;

if (num < 49) {
console.log("Неверно");
} else if (num > 100) {
console.log("Много");
} else {
    console.log("В самый раз");
};

(num == 50) ? console.log("true") : console.log("false");

let num1 = 51;

switch (num1) {
    case num1 < 49:
        console.log("Неверно");
        break;
    case num1 >100:
        console.log("Много");
        break;
    case 50:
        console.log("В самый раз");
        break;
    default:
        console.log("Что-то пошло не так");
        break;

}

//let num = 50;

// while (num < 55) {
//     console.log(num++);

// }

do {
    console.log(num++); 
}
while (num < 55);

for (let i = 1; i < 8; i++) {
    if (i == 5) {
        //break;
        continue;
    }
    console.log(i);

}

