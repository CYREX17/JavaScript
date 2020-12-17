var budget = prompt("Ваш бюджет на месяц?", "100");
var timeData  = prompt("Введите дату в формате YYYY-MM-DD", "YYYY-MM-DD");


var appData = {
    Budget: budget,
    Time: timeData,
    Expenses: {},
    optionalExpenses: {},
    income:[],
    savings:false
};

var prod1 = prompt ("Введите обязательную статью  расходов в этом месяце", "Статья 1");
var price1 = prompt("Во сколько обойдется?", "Цена");

var prod2 = prompt ("Введите обязательную статью  расходов в этом месяце", "Статья 2");
var price2 = prompt("Во сколько обойдется?", "Цена");

appData.Expenses.prod1 = price1;
appData.Expenses.prod2 = price2;

alert(appData.Budget/30);