// Maps = key-value pairs - can use any type as a key or value

const map1 = new Map();

// Set keys
const key1 = 'some string',
      key2 = {},
      key3 = function() {};

// set map values by key

map1.set(key1, 'value of key1')
map1.set(key2, 'value of key2')
map1.set(key3, 'value of key3')

// get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3))

// count values
console.log(map1.size)

// Iterating maps

// // Loop  using for..of to get keys and values
// for (let [key,value] of map1){
//   console.log(`${key} =${value}`)
// }

// // Iterate keys only
// for (let key of map1.keys()) {
//   console.log(key)
// }

// // Iterate keys only
// for (let value of map1.values()) {
//   console.log(value)
// }


// // Loop with forEach
// map1.forEach(function(value, key){
//   console.log(`${key} =${value}`)
// })

// CONVERST TO ARRAYS

// Create an array of the key value pairs
// const keyValArr = Array.from(map1)
// console.log(keyValArr)

// // Create an array of the key value
// const valArr = Array.from(map1.values())
// console.log(valArr)

// Create an array of the key
const keyArr = Array.from(map1.keys())
console.log(keyArr)