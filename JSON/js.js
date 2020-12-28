// let options = {
//     width: 1366,
//     height: 768,
//     background: "red",
//     font: {
//         size: "16px",
//         color: "fff"
//     }
// };

// console.log(JSON.parse(JSON.stringify(options)));

let inputRub = document.getElementById("rub");
let inputUsd = document.getElementById("usd");

inputRub.addEventListener("input", () => {
    let request = new XMLHttpRequest();

    //request.open(method, url, async, login, pass);
    request.open("GET", "current.json");
    request.setRequestHeader("Content-type", "application/json; charset=utf-8");
    request.send();

    //status - код ответа сервера (404)
    //statusText - текстовое описание ответа от сервера (ОК, not found)
    //responseText / response - текст ответа сервера
    //readyState - текущее состояние запроса

    request.addEventListener("readystatechange", function() {  //проще "load", но тут больше настроек
        if (request.readyState == 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        }  else {
            inputUsd.value = "Что-то пошло не так";
        }
    });
});