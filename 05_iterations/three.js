// for of -- Array specific loop

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) { //for of loop const num of object --- ynha object mtb kis chiz prr loop lgg ra hai
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps-- array jaise h hote hain

const map = new Map()// map appne app mai ek object hai 
map.set('IN', "India")//(Key,Value ) // Key shud be unique
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // objects are not iteratable 
//     console.log(key, ':-', value);
    
// } 