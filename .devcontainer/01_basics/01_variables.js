const accountId = 14456;   //value can't be update or re-assigned
let accountEmail = "xyz123@gmail.com"; //value can be re-assigned 
var accountPassword = "123456789"; //value can be re-assigned 
accountCity = " Noida";
let accountState;  //variable declared but not initialized, it gets undefined value.

// accountId = 5;  //not allowed 
console.log(accountId);

accountEmail = "abc12@gmail.com";
accountPassword = "1234567";

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);

/**there are 2 ways to declare variables in JS
 * 1. let
 * 2. var
 * var - is not used much now, bcos it doesn't know block scope {}, there's issue in block scope and functional scope. -- prefer not to use var.
 * 
 * In JS, its not necessary to declare variable with data type, It is dynamically typed language.
 * In JS, if variable declared without initialized or assigned any value, JS assigns it undefined value.
 */



