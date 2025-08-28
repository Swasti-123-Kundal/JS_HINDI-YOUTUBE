//Function ka scope mtb function ki defiion
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
} 

// sayMyName()   // sayMyName is funcn ka reference aur agr()
//  ye lga dia toh function ka execution hoga

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }
//addTwoNumbers(3, 4) // idr 4 ki jagah "a" bhi rkh skte hai toh 3a bnn jayega 

function addTwoNumbers(number1, number2){// jbb app function ki definition bnate hai jo bhi auske andar lete hai ause parameter bolte hai 

    // let result = number1 + number2
    // return result // aur agr resullt ke badh console lgaya toh vo print nhi hoga 
    return number1 + number2
}
// isko addTwoNumbers(3,5) krke bhi krr skte the
const result = addTwoNumbers(3, 5)// aur iske andar wale argument 

// console.log("Result: ", result);// toh jbb Result ki value atti hai vo undefined hoti hai
//

function loginUserMessage(username = "sam"){
    if(!username){ // if(username ==== undefined)
        console.log("PLease enter a username");
        return // taaki agr ye wala chla toh neeche wala execute nhi hoga
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())// toh vo atta hai undefined toh hum if else ka ststement check kregne


function calculateCartPrice(val1, val2, ...num1){//...rest operator function mai sbi value kaise pass hoti hai
    return num1// ... auske agge lgane ka mtn num1 ka array bnn gya hai
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));