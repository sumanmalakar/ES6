// const sayHello = function(){
//   console.log('Hello')
// }


// const sayHello =  () => {
//   console.log('Hello')
// }

// const sayHello = () => console.log('Hello')

// const sayHello = () => 'hello'

// return object
// const sayHello = () =>({ msg: 'Hello'})

// const sayHello = (name, age) =>  console.log(`Hello ${name} and age ${age}`)

// sayHello('Suman', 34)

const users = ['Nathan','john','william'];

// const nameLenghts = users.map(function(name){
//   return name.length;
// })

// Shorter
// const nameLenghts = users.map( (name) => {
//   return name.length;
// })

// Shortest 
const nameLenghts = users.map(name => name.length)

console.log(nameLenghts)