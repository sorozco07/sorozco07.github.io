// *******************************
// START HERE IF YOU WANT A MORE CHALLENGING STARTING POINT FOR THIS ASSIGNMENT
// *******************************
//
// Module 4 Assignment Instructions.
//
// The idea of this assignment is to take an existing array of names
// and then output either Hello 'Name' or Good Bye 'Name' to the console.
// The program should say "Hello" to any name except names that start with a "J"
// or "j", otherwise, the program should say "Good Bye". So, the final output
// on the console should look like this:
/*
Hello Yaakov
Good Bye John
Good Bye Jen
Good Bye Jason
Hello Paul
Hello Frank
Hello Larry
Hello Paula
Hello Laura
Good Bye Jim
*/


(function(window) {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", 
               "Paula", "Laura", "Jim"];

for (i = 0; i < names.length; i++) {

  // STEP 11:
  // Retrieve the first letter of the current name in the loop and convert to lowercase
  var firstLetter = names[i].charAt(0).toLowerCase();

  // STEP 12:
  // Compare the 'firstLetter' retrieved in STEP 11 to lower case 'j'

  if (firstLetter == 'j') {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
  }
  
})(window);
