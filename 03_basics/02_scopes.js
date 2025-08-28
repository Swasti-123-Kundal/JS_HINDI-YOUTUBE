//var c = 300 // {} yhi hote hai scope  
let a = 300// global scope aur hme let use krna chaiye instead of var
if (true) {//iske andar jo bhi likha hai is block scope
    let a = 10
    const b = 20// jo bhi global scope mai hai vo app function ke andar acess kee skte ho lakin
    //lakin jo bhi scope nya bna hai ausse koi bhi chiz bahar leak nhi honi chaiye
    //let c = 30 
    // console.log("INNER: ", a);
    
}
// console.log(a);
// console.log(b);
// console.log(c);

//Nested Scope
function one(){
    const username = "hitesh"

    function two(){  //chote bache bdo se ice cream shen skte hai aur maang skte hai lakin
        //  bade nhi mang skte mtb one bda hai auske andar jitne bhi variable hai two maang skta hai 
        // two ke lia toh one h global hai 
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); // ye scope ke bahar ki chize abb hum acess nhi krr skte

     two()
}

// one()
if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);
// ++++++++++++++++++ interesting ++++++++++++++++++
console.log(addone(5))

function addone(num){
    return num + 1
}

addTwo(5)
const addTwo = function(num){
    return num + 2
}
