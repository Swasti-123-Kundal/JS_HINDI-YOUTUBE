// array

const myArr = [0, 1, 2, 3, 4, 5] // u can also write "hitesh",truue etc same type ke h element ho ye jaruri nhi chaiye 
//JavaScript arrays are resizable and can contain a mix of different data types. 
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);
//JavaScript array-copy operations create shallow copies
//A shallow copy of an object is a copy whose properties share
//  the same references (point to the same underlying values) 
// as those of the source object from which the copy was made
// . As a result, when you change either the source or the copy, you may also cause the other object to change too
//A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values)
//  as those of the source object from which the copy was made. As a result, when you change either the source or the copy, 
// you can be assured you're not causing the other object to change too. 

// Array methods  

// myArr.push(6)// normally array mai add hota jayega 
// myArr.push(7)
// myArr.pop()// jo bhi last value hogi array ke andar  ausko remove krr denge 

// myArr.unshift(9) // ye 9 array ke start mai add hua hai ek loss hota hai ki sare array ki value shift krni pdi muje
// myArr.shift()// iske andar starting mai jo dala hoga ausko remove krr dega // ye starting mai array ke jo bhi hoga ausko remove krr dega 

// console.log(myArr.includes(9));// toh isme check krega ki 9 hai ya nhi then auske hisaab se true ya false dega
// console.log(myArr.indexOf(3));//-1 tbb ayega jbb vo value ka index hai h nhi 

// const newArr = myArr.join()//Adds all the element of an Array into a string separated by the specifiedseparator
// like jo aupper myArr dekh ra tha ausko aisa bna dega --- 0,1,2,3,4,5

// console.log(myArr);// 
// console.log( newArr); type-- String


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)//Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.
// 1 include to 2 --- 3rd include nhi hoga isme 
console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)// isme 3 bhi include hoga aur myArr mai se 1 2 3 array ki value gayab ho jayengi aur jo bachega vo vo C mai ayega neeche 
console.log("C ", myArr);
console.log(myn2);
