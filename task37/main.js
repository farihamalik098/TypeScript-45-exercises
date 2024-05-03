//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(size, printMessage) {
    if (size === void 0) { size = "large"; }
    if (printMessage === void 0) { printMessage = "I love TypeScript"; }
    console.log(" creating a ".concat(size, " shirt with the ").concat(printMessage, " prints on shirt"));
}
// calling a function by default value
make_shirt();
//calling a function mediam size default message
make_shirt("medium");
//calling a fuunction with small size and different message.
make_shirt("small", "i love javascript");
