// Store user Information
var user = {
    name: "John Doe",
    age: 30,
    balance: 1000
};
// Function to deposit money
function deposit(amount) {
    return user.balance + amount;
}
// Function to withdraw money
var withdraw = function (amount) {
    if (amount > user.balance) {
        console.log("Insufficient funds");
        return user.balance;
    }
    else {
        console.log("Withdrawal successful");
        return user.balance - amount;
    }
};
// User deposits 500
user.balance = deposit(500);
console.log("new balance after deposit is: " + user.balance); // Output: 1500
// User withdraws 200
user.balance = withdraw(200);
console.log("new balance after withdraw is: " + user.balance); // Output: 1300
// User tries to withdraw 2000
user.balance = withdraw(2000);
console.log("new balance after withdraw is: " + user.balance); // Output: Insufficient funds, 1300
