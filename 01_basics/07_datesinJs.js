// Dates

let myDate = new Date()// agr mane console mai direct date likh dia sirf toh o/p kuch aisa ayega jo smja nhi jayega console.log(myDate.toString());// readable
console.log(myDate.toString());
 console.log(myDate.toDateString());// aur bhi bhaut sare method hai myDate. ke badh bhaut sare methods show honge try it out 
 console.log(myDate.toLocaleString());// isme date ke sath sath time bhi milta hai
// console.log(typeof myDate);// object

// let myCreatedDate = new Date(2023, 0, 23) specific date h declare krni hai// month 0 se shuru hote hai javascript main 
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)// pahle teen toh date bna degi baaki time hours ye sbb mai convert hoga
// let myCreatedDate = new Date("2023-01-14")//DD-MM-YYY krte hai toh month 1 se start hota hai aur o/p isi format mai milega 
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()// specially exact time stamp dekhna hai usually when u design quizzes etc in js
// console.log(myTimeStamp);// a long digit in ms from jan 1970 se abi tkk 

// console.log(myCreatedDate.getTime());// here myCrestedDate ek object hai toh jbb mai iske agg e. lga dungi toh aur methods dekhenge iske lia
// aur myCreatedDate ko app ms mai convert krr skte hai by applying .getTime

// console.log(Math.floor(Date.now()/1000));// date.now exact abi ki date degait will be in ms then muje chaiye isse sec mai convert krna hai the b/ by 100
// lain problem ye atti hai ki decimal value bhi ahh jati hai jo nhi chaiye hoti hai toh we use floor for that
// we can use Math.round or floor
// Some another methods following 

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay()); // monday -- 1 

// `${newDate.getDay()} and the time `

//newDate.toLocaleString('default', {
   // weekday: "long",
    
 // ye aupper wale ki tarah h hai kyuki ye obje ct hai toh hum isse aur bhi customized krr skte hai
console.log(newDate.tolocaleString('default', {
    weekday: "long",
    
}))
