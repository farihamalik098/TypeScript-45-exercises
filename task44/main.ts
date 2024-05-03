//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
// rest parameter is liya use kartay hai



function makeSandwich(...item: string[]){
    console.log("/n Making a Sandwich with the following items: /n");
    item.forEach(singleitem => console.log(singleitem)); 
    console.log("/nnow Enjoy Sandwich")
}
//call diifferent number of argumentsthe function three 
makeSandwich("chicken","cheese","mayo","egg")
makeSandwich("bread","butter","mayo",)
makeSandwich("chicken","cheese","mayo","egg","tomato",)


