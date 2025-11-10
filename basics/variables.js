const account_id = 14445;
let acountmail = "abc@gmail.com";
var accountpass = "12345";
accountcity = "jaipur";

// account_id = 23; // not allowed because const
accountpass = 123;
acountmail = "hc@hc.com";
accountcity = "agra";
/*
prefer not to use var because of issue in block scope and functional scope

*/

console.table([account_id, accountpass, acountmail, accountcity]);
