// Destructuring Assignment

let a, b;
[a, b] = [100, 200];

// Rest pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];


// console.log(c);
// console.log(rest)

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 })


// console.log(rest);

// Array Destructuring

// const people = ['john', 'beth', 'mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3)

// Parse array returned from function
// function getPeople(){
//   return ['john', 'beth', 'mike'];
// }
// let person1, person2, person3;
// [person1, person2, person3] = getPeople();


//  console.log(person1, person2, person3)


// Object Destructuring

const person = {
  name: 'john doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello : function(){
    console.log('Hello')
  }
}

// old ES5

// const name = person.name,
//       age  = person.age,
//       city = person.city;

//  New ES6 Destucting
const { name, age, city, sayHello} = person;

console.log(name, age, city);

sayHello();