const accountId = 144553
let accountEmail = "maria@google.com"
var accountPassword = "12345"
accountCity = "Margao"

let accountState;


// accountId = 2 //not allowed because accountId is a constant variable

accountEmail = "testchange@top.in"
accountPassword = "54321"
accountCity = "Panaji"

console.log(accountId);
console.log(accountEmail);
console.log(accountPassword);
console.log(accountCity);



/*
Prefer not to use var 
because of issue in block scope and functional scope.

*/

console.log([accountId, accountEmail, accountPassword, accountCity, accountState]);