//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
//• Add one new guest to the beginning of your array.
 //• Add one new guest to the middle of your array.• Use append() to add one new guest to the end of your list.   •Print a new set of invitation messages, one for each perso n in your list./


let guestArray: string[] = ["emman","azan","obaid","zeeshan","ayan"];
let canNotAttend: string = "ayan";
let newGuest: string = "arbaaz";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
//guestArray.map((item) => (
//console.log(`Dear ${item},I found a bigger dinner table`)
//));

//• Add one new guest to the beginning of your array.
let guestBegin:string = "faro";
guestArray.unshift(guestBegin);
console.log(guestArray);

//• Add one new guest to the middle of your array
let middleGuest: string = "farhan";
let middleIndex = guestArray.length/2
guestArray.splice(middleIndex,0,middleGuest);
console.log(guestArray);

//Use append() to add one new guest to the end of your list.
guestArray.push("fari")
console.log(guestArray)
//•Print a new set of invitation messages, one for each perso n in your list.

guestArray.map((item) => (
    console.log(`Dear ${item},you are codinally invited to a dinner`)
    ));













