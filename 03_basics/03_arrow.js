const user = {
    username: "hitesh",
    price: 999, 

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // this current context ki baat krta hai jo bhi current value hai auski baat krta hai 
    },
   
}
console.log(this); //toh ye scope se bahar hai mtb ye Global Scope mai hai node environment 
// abhi koi Global ke andar context h nhi hai // window object in browsers.{} (empty object) in Node.js.
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this); // refer to global toh current context isme hai empty kyuki hum node 
// environment ki baat krr rhe hai 

// function chai(){
//                           // jbb function ke andar run karbaya toh bhaut sari valur run karta hai
//     console.log(this);// this ke andar bhaut khucsh hai 
// }

// function chai(){
//     let username = "hitesh"
//     console.log(this.username); // ye undefined ayega kyuki ye tbb h kam krr ra hai 
// jbb Object ke andar likha ho
// }

// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {    // ARROW FUNCTION -- Function keyword hta denge 
    let username = "hitesh"
    console.log(this); //ynha bhi agr this.username likhenge toh undefined hai 
}

// chai()

// (parameters) => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))

// const addTwo = (num1, num2) =>  num1 + num2 // IMPLICIT RETURN--Parenthese hta do funcn se ,same line mai,return bhi hta dete hai
// num1 + num2 ko {} mai wrap kia toh return likhna hai 
// agr num1 + num2 ko () mai likha toh return nhi likhna pdega 
// const addTwo = (num1, num2) => ( num1 + num2 )

const addTwo = (num1, num2) => ({username: "hitesh"}) // JBB rk object return krna ho then u have to do this ({})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()