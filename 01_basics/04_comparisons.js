/*console.log(2>1)
console.log(2>=1)
console.log(2==1)
console.log(2!=1) toh simply true false mai jawab milega */
// agr same datatype na ho then what
console.log("2">1)
console.log("02">1)// toh js ne issse number mai convert krr dia becoz gives right result 
// dhyaan rkhna same datatype ka comparison rkhna 
console.log(null > 0)
console.log(null ==0)
console.log(null >= 0)// == this is called equity check and it works different from comparisons(>,<)
//comparisons convert null to a number treating it as 0 that's why null>= 0 is true and null > 0 is false 

// agr null ki jagah undefined hota toh auska output teeno mai h false atta 
// === strict check value ke sath datatype ko bhi check krta hai 
console.log("2"=== 2)