let json = '{"id":2}';

try {
    let user = JSON.parse(json);
    console.log(user);
    if(!user.name){
        throw new Error("В этих данных нет имени");
    }
} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`);
} finally {
    console.log("выполнится всегда");
}




try {
    console.log("OK");
    console.log(a);
    console.log("Результат");

} catch (error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);

    console.log(`Мы получили ошибку: ${error.name}`);
}

console.log("дальнейшая работа");