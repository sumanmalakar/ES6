// For Loop

// for(let i = 0; i <= 10; i++){
//   console.log('Number' +i)
// }

// for (let i = 0; i <= 10; i++) {
//   if(i === 2){
//     console.log('2 is my favorite Number')
//     continue
//   }

//   if(i === 5){
//     console.log('Stop the loop')
//     break;
//   }

//   console.log('Number' + i)
// }


// WHILE LOOP

// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO WHILE

// let i = 100;
// do {
//   console.log('Number ' + i);
//   i++;
// }while(i < 10);


// LOOP TROUGH ARRAY
const cars = ['ford', 'bmw', 'honda', 'toyota'];

// for(let i = 0; i < cars.length; i++){
//   console.log(cars[i]);
// }

// FOREACH
// cars.forEach(function(car, index, array){
//    console.log(`${index}: ${car}`)
//    console.log(array)
// })

// Map 
// const users = [
//   { id: 1, name: 'john' },
//   { id: 2, name: 'sara' },
//   { id: 3, name: 'karan' },
//   { id: 4, name: 'same' }


// ]

// const ids = users.map(function(user){
//   return user.id;
// })

// console.log(ids)

// FOR IN LOOP
const user = {
firstName: 'John',
lastName:'Doe',
age:40
}

for( let x in user){
  console.log(`${x}: ${user[x]}`)
}