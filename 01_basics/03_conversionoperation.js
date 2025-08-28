let score = "33abc"// jb 33 without "" likha hota toh datatype number ana tha 

console.log(typeof score);
console.log(typeof (score));
// lakin muje pta hai mane 100% number prr h operation krna hai so we can do 

let valueInNumber = Number(score) // toh ab gaurantee hai ki score number mai convert ho gya hoga 
console.log(typeof valueInNumber) // toh dhyaan rkhna Js mai ki number bol ra prr jbb actual value pta krte hai toh NaN atti hai 
console.log( valueInNumber)
// agr score = null hota toh type mai object ayega  lakin jbb number se pass hoga toh number bnn jayega aur auss number kojbb print karenge toh 0 ayega 
// agr score = undefined  toh pahle type = undefined jbb number se passhoga then type = undefined  but jbb print krenge vo number then vo NaN ayega 
// agr score = true hota toh type = boolean atta aur number se pass ke badh type = number then jbb number ko print karbate toh 1 atta 
//agr score = "hitesh" hota toh ye toh ek string hai cant convert into number toh number se pass karvane ke badh type = number but when u print the number it is NaN 
let isloggedin = 1

let booleanisloggedin = Boolean(isloggedin)
console.log(typeof booleanisloggedin )
console.log( booleanisloggedin)
// 1 -- true , 0 --- false when u convert in boolean 
// ""  --- false
// "hitesh" --- true

// abb hum chize string mai convert krenge 
 let somenumber = 33
 let stringNumber = String(somenumber)
 console.log(typeof  stringNumber)
console.log( stringNumber );
//***********************************OPERATIONS***************************************/
 
