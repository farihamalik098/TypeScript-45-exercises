//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size: string = "large", printMessage: string = "I love TypeScript"){
    console.log(` creating a ${size} shirt with the ${printMessage} prints on shirt`)
}
// calling a function by default value
make_shirt();
 //calling a function mediam size default message
 make_shirt("medium");

 //calling a fuunction with small size and different message.
 make_shirt("small","i love javascript");