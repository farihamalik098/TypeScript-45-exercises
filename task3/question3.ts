//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let firstname ="fariha malik";
console.log(firstname.toLowerCase());
console.log(firstname.toUpperCase());
console.log(firstname.replace(/\b\w/g, (char) => char.toUpperCase()));
