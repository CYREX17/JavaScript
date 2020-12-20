function isLetter (char){
    if (char.toString().toUpperCase() != char.toString().toLowerCase()){
        return true;
    }
    else {
    return false;
    }
}

function isNumber (char){
    if (isFinite(char) && char != " "){
        return true;
    }
    else {
    return false;
    }
}


let str = "1. U6 247 Y  03JAN LHRLIN HS1  1850         2135  O 05JAN       E SU";
str = (str.replace(/\s+/g, ' ').trim()).toUpperCase(); //убираем лишние пробелы, делаем буквы большими
console.log(str);

let airline,
    flightNum;

let start, end;


for (let k = 0; k < 10; k++){
    if (str[k] != " " && str[k+1] != " "){
        if (str[k].toString().toUpperCase() != str[k].toString().toLowerCase() && str[k+1].toString().toUpperCase() != str[k+1].toString().toLowerCase()){
            airline = str[k] + str[k+1]; 

            if (str[k+2] != " "){
                start = k+2;
                end = k+2;
            }
            else {
                start = k+3;
                end = k+3;
            }
            
            for (end; end < k+8; end++) {
                if (str[end] == " "){
                    flightNum = str.slice(start, end);
                    break;
                }
            }  
            break; 
        } 
        if (str[k].toString().toUpperCase() != str[k].toString().toLowerCase() && isFinite(str[k+1])){
            airline = str[k] + str[k+1];  
            if (str[k+2] != " "){
                start = k+2;
                end = k+2;
            }
            else {
                start = k+3;
                end = k+3;
            }
            
            for (end; end < k+8; end++) {
                if (str[end] == " "){
                    flightNum = str.slice(start, end);
                    break;
                }
            } 
            break;  
        }
        if (isFinite(str[k]) && str[k+1].toString().toUpperCase() != str[k+1].toString().toLowerCase()){
            airline = str[k] + str[k+1]; 
            if (str[k+2] != " "){
                start = k+2;
                end = k+2;
            }
            else {
                start = k+3;
                end = k+3;
            }
            
            for (end; end < k+8; end++) {
                if (str[end] == " "){
                    flightNum = str.slice(start, end);
                    break;
                }
            } 
            break;   
        }
        
    }
}


console.log(airline);
console.log(flightNum);




let char = 1;
char.toString();
let upChar = char.toString().toUpperCase();
let lowChar = char.toString().toLowerCase();


////!!!!
if (char.toString().toUpperCase() == char.toString().toLowerCase()){
    console.log("Это не буква");

}
else {
    console.log("Это буква");
}




if (upChar == lowChar){
    console.log("Это не буква");
}



char = char.toUpperCase();
console.log(char);
char = char.toLowerCase();
console.log(char);


function isLetter(char) {
    return char != char.toUpperCase();
  }

let boolCase = isLetter(char);

console.log(boolCase);


let boolBlank = isNaN(" ");
let bool1 = isNaN("1");
let boolA = isNaN("A");
let boolCheck = char.match(/[a-z]/i);

console.log(boolCheck);

console.log(boolBlank);
console.log(bool1);
console.log(boolA);


// function isLetter(str1) {
//     return str1.match(/[a-z]/i);
//   }

//   for ( let i = 0; i<20; i++) {
//       if(isLetter(str)){
//           console.log(str[i]);
//       }
//   }


// let date = {};
// for (let i=4; i< str.length-15; i++) {
//  if (str[i] == " "){
//      i++;
// } else if(Number.isInteger(+str[i]) && Number.isInteger(+str[i+1])){
//     console.log(str[i] + str[i+1]); 
//  }
// }

let str = "1. U6 247 Y  03mAr OLBLIN HS1  1850         2135  O 05JAN       E SU";
str = (str.replace(/\s+/g, ' ').trim()).toUpperCase(); //убираем лишние пробелы, делаем буквы большимиconsole.log(str);

function isLetter (char){
    if (char.toString().toUpperCase() != char.toString().toLowerCase()){
        return true;
    }
    else {
    return false;
    }
}

function isNumber (char){
    if (isFinite(char) && char != " "){
        return true;
    }
    else {
    return false;
    }
}

let dateDate;
let dateMonth;
let Origin;
let destination;

for (let i = 0; i < str.length - 15; i++) {
    if (isNumber(str[i]) && isNumber(str[i+1]) && isLetter(str[i + 2]) && isLetter(str[i + 3]) && isLetter(str[i + 4])) {        
        if (str[i + 2] + str[i + 3] + str[i + 4] == "JAN" ||
        str[i + 2] + str[i + 3] + str[i + 4] == "FEB" || 
        str[i + 2] + str[i + 3] + str[i + 4] == "MAR" ||
        str[i + 2] + str[i + 3] + str[i + 4] == "APR" || 
        str[i + 2] + str[i + 3] + str[i + 4] == "MAY" ||
        str[i + 2] + str[i + 3] + str[i + 4] == "JUN" || 
        str[i + 2] + str[i + 3] + str[i + 4] == "JUL" ||
        str[i + 2] + str[i + 3] + str[i + 4] == "AUG" || 
        str[i + 2] + str[i + 3] + str[i + 4] == "SEP" ||
        str[i + 2] + str[i + 3] + str[i + 4] == "OCT" || 
        str[i + 2] + str[i + 3] + str[i + 4] == "NOV" ||
        str[i + 2] + str[i + 3] + str[i + 4] == "DEC" ) {
            dateDate = str[i] + str[i + 1];
            dateMonth = str[i + 2] + str[i + 3] + str[i + 4]; 
                let j = i;
                for (j+5;j < i+9; j++){
                    if (isLetter(str[j + 5]) && isLetter(str[j + 6]) && isLetter(str[j + 7]) && 
                    isLetter(str[j + 8]) && isLetter(str[j + 9]) && isLetter(str[j + 10])){
                        Origin = str[j + 5] + str[j + 6] + str[j + 7];
                        destination = str[j + 8] + str[j + 9] + str[j + 10];
                    }
                }
        }
    }
}



// for (let i = 4; i < str.length - 15; i++) {
//     if (isFinite(str[i]) && isFinite(str[i + 1]) && !isFinite(str[i + 2]) && str[i] != " ") {        
//         if (str[i + 2] + str[i + 3] + str[i + 4] == "JAN") {
//             dateDate = str[i] + str[i + 1];
//             dateMonth = str[i + 2] + str[i + 3] + str[i + 4];

           
//         }
//     }
// }

console.log(dateDate);
console.log(dateMonth);
console.log(Origin);
console.log(destination);