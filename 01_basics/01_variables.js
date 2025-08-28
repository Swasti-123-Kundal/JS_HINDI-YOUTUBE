const accountId = 12345
let accountEmail = "swastikakundal@gmail.com" // prefer not to use var becoz of issue in block and functional scope
var accountPassword = "12345"
accountCity = "Jaipur"
let accountstate ;
// keywords are const,let,var ye sbb mile toh memory mai assign kro
// aur agr console.log mile toh direct screen prr autar do ye node js ko pta hota hai
// const mtb appne auss memory mai jo bhi dal dia abb vo lock ho gya hai u cant change 
//accountId = 2
accountEmail = "Kundal@gmail.com"
accountPassword = "2122121"
accountCity= "Kathua"
console.log(accountId) // this can be hectic to write console.log everytime so humne likha console.table
console.table([accountId,accountEmail,accountPassword,accountCity,accountstate]);