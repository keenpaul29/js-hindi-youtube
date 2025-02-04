const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur" //aise bhi variables declare ho skta hai

let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log("The value of the account:\n" + accountId + "\n" + accountEmail + "\n" + accountPassword);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/* Yahan pr accountState bina define kiye use kra gya hai (value not assigned)  */
console.log(typeof(accountState))

