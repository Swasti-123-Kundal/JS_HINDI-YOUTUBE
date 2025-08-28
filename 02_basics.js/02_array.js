const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros); // toh out put mai array ke andar ek aur array aah jayega which we dont want hum toh chahte the ki elements ka array bnn jay
// aupper wale mai array ko h ek element bna lia hai
// console.log(marvel_heros[3][1]);// ye vhi aupper wale array ke array mai se nikalne ka tarika

// const allHeros = marvel_heros.concat(dc_heros)// toh ye sbshi elements ko mila dega aur phir ek array banayega 
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]// another method concate krna krne ka easy method
// ... use to separate here to ... ne pahle h isse separate krr dia phir isse hmne ddabbe mai dal dia aur jod dia 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)//Returns a new array with all sub-array 
// elements concatenated into it recursively up to the specified depth.
// flat() ke andar depth likhte hai which means kit ne subarray toh ginne thodi bethenge simply write infinity
// ye bhi concate krta hai sbko
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))// method to check wheter it is array or not
console.log(Array.from("Hitesh"))// toh ye array bna dega from String "Hitesh"
console.log(Array.from({name: "hitesh"})) // interesting //o/p mai []ayega empty array
// kyuki btana pdega ki name(key) ya "hitesh" (value ) dono mai se kisse array bnana chahiye

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));// .from bhi use krr skte ho