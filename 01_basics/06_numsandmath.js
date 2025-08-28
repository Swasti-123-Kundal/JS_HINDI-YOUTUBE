const score = 400
// console.log(score);
 
const balance = new Number(100) // kai bar hum explicitily bhi decide krr skte hai ki new agge add krke ki muje kya chaiye like yhan mane likha hai number chaoiye 
// console.log(balance);

// console.log(balance.toString().length);
//console.log(balance.toFixed(1));
// .toFixed(n) formats a number to keep exactly n digits after the decimal point, and returns it as a string.
/*const n = 45.678;

console.log(n.toFixed(0));  // "46"      → rounds to nearest whole number
console.log(n.toFixed(1));  // "45.7"    → 1 decimal
console.log(n.toFixed(2));  // "45.68"   → 2 decimals
console.log(n.toFixed(4));  // "45.6780" → pads with 0 */



const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));// number of significant digits must be in the range 1-21 inclusive
// if otherNumber = 23.8966 hota agr mane precision mai (3) kia hota then o/p will be 23.9
// if otherNumber = 123.8966 hota agr precision mai (3) o/p will be 124
// if otherNumber = 1123.8966 hota agr precision mai (3) h hota then o/p will be 1.12e+3 pahle teen precision value aah gyi then convert into exponential 
const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));// indian number system ke hisaab se comma lga krr dega o/p will be 10,00,000

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));// absolute value - wala + ho jayega bss
// console.log(Math.round(4.6));// 5 
// console.log(Math.ceil(4.2));// ceiling mtb top value zara sa bhi 4 se jada hua toh 5 h output ayega 
// console.log(Math.floor(4.9));//toh lowest value ayegi which is 4 here 
// console.log(Math.min(4, 3, 6, 8));// 
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());// math.random ki value hamesha ayegi 0-1 ke beechaur can be 0 and can be 1
console.log((Math.random()*10) + 1); // Usually decimal value h milti hai 
console.log(Math.floor(Math.random()*10) + 1);// let random value gives 0.5418..... and after multipliying with 10 nit will give 3.4566......  so we have to add 
//Add 1 in it becoz if random gives 0.04..... then *10 will give 0.0..... to avoid that ki ye 0 mai value de we have to add  1 in it
// floor using for getting sbse shoti value ye value abb 1 se toh aupper h dega 

const min = 10 
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)//max-min se range aah jayegi aur ye tbb ause krtee hai jbb max min ki baatein ho 