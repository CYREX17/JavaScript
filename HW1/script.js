let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц?", "");
    time  = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income:[],
    savings:true
};

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt ("Введите обязательную статью  расходов в этом месяце", "");
        let b = prompt("Во сколько обойдется?", "");
    
        if ((typeof(a)) === "string" && (typeof(a)) != null && (typeof(b)) != null
                && a != "" && b != "" && a.length < 50) {
                console.log ("done");
                appData.expenses[a] = b;
        } else {
    alert("Введите данные в корректном формате");
    i--;
        }
    }
}

chooseExpenses();


function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let c = prompt ("Введите необязательную статью расходов в этом месяце", "");
    
        if ((typeof(c)) === "string" && (typeof(c)) != null && c != "" && c.length < 50) {
                console.log ("done");
                appData.optionalExpenses[i+1] = c;
        } else {
    alert("Введите данные в корректном формате");
    i--;
        }
    }
}

chooseOptExpenses();


console.log(appData);


function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); //return string! round it 
    alert("Ежедневный бюджет: " + appData.moneyPerDay);
}

detectDayBudget();


function detectLevel() {
    if(appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay >= 100 && appData.moneyPerDay < 2000){
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay >= 2000){
        console.log("Высокий уровень достатка");
    } else {
        console.log("Произошла ошибка");
    } 
}

function checkSavings() {
    if (appData.savings) {
        let save = + prompt("Какова сумма накоплений?");
        let percent = +prompt("Под какой процент?");
        appData.monthIncome = (save/100/12*percent).toFixed(1);
        alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
}

checkSavings();