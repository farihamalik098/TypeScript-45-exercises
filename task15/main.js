//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
//• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
//• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
//• Print a second set of invitation messages, one for each person who is still in your list.
let guestArray = ["Dua", "sidra", "ayan", "shanyan", "imran", "ashraf"];
let canNotAttend = "shanyan";
console.log(canNotAttend + ' ' + "can not make it, for Dinner");
let newGuest = "shakeela";
guestArray[guestArray.indexOf(canNotAttend)] = newGuest;
console.log(guestArray);
guestArray.map((item) => console.log(`dear ${item} ,you are cordinallay invited to a dinner`));
export {};
