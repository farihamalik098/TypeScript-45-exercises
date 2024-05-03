//Unchanged Magicians: Start with your work from Exercise 40 nahi 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
function make_great(magicians) {
    return magicians.map(function (name) { return "the great ".concat(name); });
}
var magician_names = ["harry poter", "hamza", "usman"];
var great_magicians = make_great(magician_names);
//making a copy of orginal array through.slices()function
var copy_magicians_names = magician_names.slice();
//modify the copy array to incukde :"the great with their nsmes"
var copy_great_magicians = make_great(copy_magicians_names);
//show both arrays orginal and copies
//orginal
console.log("orginal Array/n");
show_magicians(magician_names);
//copies
console.log("copies Array/n");
show_magicians(copy_great_magicians);
