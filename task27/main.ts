//Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
//• If the alien is green, print a message that the player earned 5 points.

//• If the alien is yellow, print a message that the player earned 10 points.

//• If the alien is red, print a message that the player earned 15 points.

//• Write three versions of this program, making sure each message is printed for the appropriate color alien.
//first version
  let alienColour = "green";
  if(alienColour === "green"){
    console.log("the player earned 5 points.")
  }

 
   else if(alienColour === "yellow"){
    console.log("the player earned 10 points.")
   }

   
   else if (alienColour === "red"){
    console.log("the player earned 15 points.");
   }

   //second version
   let alienColour2 = "yellow"
   if(alienColour2 === "green"){
    console.log("the player earned 5 points.")
  }
  else if(alienColour2 === "yellow"){
    console.log("the player earned 10 points.")
   }
   else if (alienColour2 === "red"){
    console.log("the player earned 15 points.");
   }

    //third version
   let alienColour3 = "red";
   if(alienColour3 === "green"){
    console.log("the player earned 5 points.")
  }
  else if(alienColour3 === "yellow"){
    console.log("the player earned 10 points.")
   }
   else if (alienColour3 === "red"){
    console.log("the player earned 15 points.");
   }
