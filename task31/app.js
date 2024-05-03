//No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
//• If the list is empty, print the message We need to find some users!
//• Remove all of the usernames from your array, and make sure the correct message is printed.
var userNames = ["fareeha", "zeeshan", "sidra", "Admin", "azan"];
userNames = [];
if (userNames.length === 0) {
    console.log("your Array in empty We need to find some users");
}
else {
    userNames.forEach(function (oneUser) {
        if (oneUser === "Admin") {
            console.log("hello ".concat(oneUser, ",would you like to see a status report?\n          "));
        }
        else {
            console.log("hello ".concat(oneUser, ", thank you for logging in again.\n    \n        "));
        }
    });
}
