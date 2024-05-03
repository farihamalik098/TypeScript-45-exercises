// 32. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
// List of current users
var currentUsers = ['fareeha', 'zeeshan', 'sidra', 'obaid', 'Azan'];
// List of new users
var newUsers = ['maria', 'Alex', 'sidra', 'azan', 'obaid'];
// Function to check if a username is available
function isUsernameAvailable(username) {
    // Convert both username arrays to lowercase for case-insensitive comparison
    var currentUsersLowercase = currentUsers.map(function (user) { return user.toLowerCase(); });
    var usernameLowercase = username.toLowerCase();
    return !currentUsersLowercase.includes(usernameLowercase);
}
// Loop through new_users list and check availability of each username
newUsers.forEach(function (newUser) {
    if (isUsernameAvailable(newUser)) {
        console.log("The username '".concat(newUser, "' is available."));
    }
    else {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please choose another one."));
    }
});
