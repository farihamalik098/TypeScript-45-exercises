//18:Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.

//• Print your array in its original order.

//• Print your array in alphabetical order without modifying the actual list.

//• Show that your array is still in its original order by printing it.

//• Print your array in reverse alphabetical order without changing the order of the original list.

//• Show that your array is still in its original order by printing it again.

//• Reverse the order of your list. Print the array to show that its order has changed.

//• Reverse the order of your list again. Print the list to show it’s back to its original order.

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
    
//making a array of countries and print its orginals order.
let countriesToVisit : string[] = ["China","Amercia","Berlin","Paris"];
console.log("orginal order:",countriesToVisit);


// print the array in alphabetical order without modify the actual arrat list.
console.log("Alphabetical order:",[...countriesToVisit].sort());


//show that the array is still in its orginal order
console.log("still in orginal order:, countriesToVisit");

// print the array in reverse order without modify the actual array list
console.log("Reverse order:",[...countriesToVisit].reverse());

//show that the array is still in its orginal order
console.log("still in orginal order:, countriesToVisit");

 //we have changed the orginal Array order now
console.log("orginal Array Rversed:",countriesToVisit.reverse());

//print the array to show that its back to its orginal order
console.log("Back to orginal order:", countriesToVisit.reverse());

//print the array to show that its order has been changed in Alphabetical order
console.log("sorted in alphabetical order:",countriesToVisit.sort());

//we have changed the orginal Array order now
console.log("orginal Array Rversed Again:",countriesToVisit.reverse());






