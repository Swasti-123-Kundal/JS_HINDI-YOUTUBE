// singleton--- appni traf se ek h object hai 
//jbb bhi hum literals se declare krte hai toh singleton nhi bnta hai 
// constructor se singleton bnta hai 
// Object.create---in constructor


// object literals
const mySym = Symbol("key1")
const JsUser = {
    name: "Hitesh", 
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",// symbol ko as a key use krna hai toh hum direct nhi likh skte ki mySym: "mykey1"
    // aur jbb console mai Js.User.mySym dala toh mykey1 ayega but actually mai iska datatype symbol ki tarah use nhi ho ra hai vo string ayega
    // toh agr humne isse symbol ki trah treat krna hai then [mySym] = "mykey1"
    // toh ab console mai bhi [mySym] ayega toh o/p mykey1 ayega with symbol datatype
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])// kyuki hum JsUser.fullname nhi likh skte abb it will throw error
// console.log(JsUser[mySym])//mdn js datatypes

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // toh isse Js.User mai koi change create nhi ho skta 
JsUser.email = "hitesh@microsoft.com"// toh console mai abb ye value propagete nhi hogi toh seedha h chatgpt wali tkk ayegi
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);// back ticks mai ikhna hai
    // ye hum this ke bina ${}likh skte the 
    // jbb bhi humko same object ko refernce krna then we can write this 
    // this lga krr . lgayenge toh auss object ke andar jitni bhi prop. hai vo sbb ynha aah jayengi
}

console.log(JsUser.greeting());// agr yahan JsUser.greeting h hota sirf 
// then function anonymous ayega value mtb funcn execute nhi hua hai
//sirf funcn ka refernce aya hai
console.log(JsUser.greetingTwo());