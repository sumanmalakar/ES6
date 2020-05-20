// Iterator Example

// function nameIterator(names){
//   let nextIndex = 0;

//   return{
//     next: function(){
//       return nextIndex < names.length ?
//       {value: names[nextIndex++], done: false } :
//       { done: true }
//     }
//   }
// }

// // Chreate an array of names
// const namesArr = ['Jack','jill', 'John']
// // Init iterators and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next())
// console.log(names.next().value)
// console.log(names.next().value)
// console.log(names.next())


// Generator Example
// function* sayNames(){
//   yield 'jack';
//   yield 'jill';
//   yield 'john';
// }

// const name = sayNames();

// console.log(name.next())
// console.log(name.next().value)
// console.log(name.next().value)
// console.log(name.next().value)


// ID Creator

// function* createIds(){
//   let index = 1;
  
//   while(true){
//     yield index++;
//   }
// }

// const gen = createIds();

// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
// console.log(gen.next().value)
