// Immediately Invoked Function Expressions (IIFE)
// Global scope ke pollution se problem hoti hai toh ausko Htane ke lia IIFE ka use kia 
// () in this Function definition () in this Execution 
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})(); // ynha Semicolon lgana hai 

( (name) => { // Simple IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

