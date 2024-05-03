//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var firstname = "fariha malik";
console.log(firstname.toLowerCase());
console.log(firstname.toUpperCase());
console.log(firstname.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
