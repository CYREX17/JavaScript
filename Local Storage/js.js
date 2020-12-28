// localStorage.setItem("number", 1);

// console.log(window.localStorage.getItem("number"));

// localStorage.removeItem("number");

// localStorage.clear();

window.addEventListener("DOMContentLoaded", function() {
    let checkbox = document.getElementById("rememberMe"),
        change = document.getElementById("change"),
        form = document.getElementsByTagName("form")[0];

    if(localStorage.getItem("isChecked" === "true")) { ///! отдается в виде строки
        checkbox.checked = true;
    };

    

    checkbox.addEventListener("click", function() {
        localStorage.setItem("isChecked", true);
    });

    change.addEventListener("click", function() {
        localStorage.setItem("bg", "changed");
        confirm.style.backgroundColor = "red";
    });

    if(localStorage.getItem("bg" === "changed")) {  
        confirm.style.backgroundColor = "red";
    };

    let persone = {
        name: "Alex",
        age: 23,
        tech: ["mobile", "laptop"]
    };

    let serializedPersone = JSON.stringify(persone);
    localStorage.setItem("Alex", serializedPersone);

    console.log(JSON.parse(localStorage.getItem("Alex")));

});