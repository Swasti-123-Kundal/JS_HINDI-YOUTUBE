 // There are two types of datatypes -- Primitive and non Primitive(Referene by )// kis tarah  data ko memory mai rkha jata hai aur acess kia jata hai vo hai ye types 
 // 1.  Primitive  (Call by value)---original data nhi dia jata inko copy krke dia jata hai alg jo bhi app changes krte ho inke copy mai chenges hote hai 
//  7 types : String, Number, Boolean, null(empty not zero), undefined (varaible declared hai memory space declared hai lakin kya ausme value ayegi ye pta nhi hai), Symbol, BigInt(scientific value jo abi tkk cover nhi hui hai)

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n// datatype BigInt


 
// Reference (Non primitive)--- memory mai refernce direct allocate kia jaa skta hai 

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];// object
let myObj = {
    name: "hitesh",
    age: 22, // jitne bhi non primitive  inka return type object h atta hai
}// curly braces ke andar jitna bhi hai vo object hai let myobj likhana is ur choice
// funtion ko bhi app js mai variable ki tarah treat krr skte ho so funcn definition is this function(){}
// jis tarah se app baaki varaibles ko store krr paa re re auss tarike se isse bhi // const myFunction = function()
const myFunction = function(){
    console.log("Hello world");
}
// how to know datatype
console.log(typeof anotherId)
console.log(typeof myFunction); //  iska datatype hota hai  object function 

// https://262.ecma-international.org/5.1/#sec-11.4.3
// Jitne bhi non primitive type hai aunka object h atta hai datatype
//JavaScript is a dynamically typed language, meaning that the type of a variable is determined at runtime based 
// on the value assigned to it. Unlike statically typed languages, where variable types are explicitly declared 
// and cannot change, JavaScript allows variables to hold values of different types during execution.


//************************************************************************************** */
// Stack memory (Primitive)--- Copy , Heap memory(Non-Primitive)----Original 
let myYoutubename = "hiteshchoudhary"

let anothername = myYoutubename
anothername = "Chaiaurcode "

console.log(myYoutubename)
console.log(anothername) // toh jbb dusri bar hmne declare kia tha anothername toh vo copy tha original wale ki toh ye pass by value

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne 
userTwo.email = "hitesh@google.com"
console.log(userOne.email )
console.log( userTwo.email)