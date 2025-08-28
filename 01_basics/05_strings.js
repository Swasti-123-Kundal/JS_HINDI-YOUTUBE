const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//easily hum isme methods lga skte hai

const gameName = new String('hitesh-hc-com') // another way to write string -- new use krke app object use krte hai strings ke

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length); 
// console.log(gameName.toUpperCase());// instead of use of prototype 
console.log(gameName.charAt(2));// kis index prr konsa character hai
console.log(gameName.indexOf('t'));
//key--value
const newString = gameName.substring(0, 4)// isme output is hite toh 4 include nhi hoga isme aur agrisme mai 0 ki jagah -8 put kar du tb bhi ye agge se start mtb 0 se start kregakreha aur hite h dega 
console.log(newString);

const anotherString = gameName.slice(-8, 4)// toh isne peeche se start kia kyuki -8 hai toh reverse se chlega toh ye ite de dega output
console.log(anotherString);

const newStringOne = "   hitesh    "//to remove extra space 
console.log(newStringOne);
console.log(newStringOne.trim());// trim starting space aur end space ko remove krr deta hai 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))// %20 mtb pahle isko dhundo then ausko replace kro

console.log(url.includes('sundar'))// output false aya kyuki iss url main ye present nhi hai 

console.log(gameName.split('-'));// based on '-' bhi ho skta hai "" bhi ho skta hai aur ye output array mai denge