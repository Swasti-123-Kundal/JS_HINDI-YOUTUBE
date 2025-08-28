// const tinderUser = new Object()// ye non sinleton object hai
//agr mai isko console.log(tinderUser aise likhti tb bhi ye khali h ana tha {}yahi output ana tha
const tinderUser = {} //ye singleton object hai 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
 
const regularUser = { // u can go for nesting in it 
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 }// if u console.log(obj3) do like this to same array
//  wali problem aah jayegi aur ye connected ayega 
//const obj3 = Object.assign({}, obj1, obj2, obj4) //Copy the values of all of the enumerable own properties from 
// one or more source objects to a target object. Returns the target object.
// {} -- target, baaki source

const obj3 = {...obj1, ...obj2}//max. time yahi use krenge
// console.log(obj3);


const users = [ // database se aye hai object toh [] aise ayenge
    {
        id: 1,
        email: "h@gmail.com"// Array ka object
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // Array
// console.log(Object.values(tinderUser));// Array
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));// check wheter isloggedIn is present or not


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
//const {courseInstructor} = course// destructuring ki jaa ri hai
const {courseInstructor: instructor} = course//another way of writing course.courseInstructor

// console.log(courseInstructor);
console.log(instructor);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }//json se AP1 call

[// AP1 can be like this  //json format se aur random user me
    {},
    {},
    {}
]

