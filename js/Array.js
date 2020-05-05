// Create some arrays
const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(23,4,44,67,322)
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'Hello', true, undefined, null, {a:1,b:2}, new Date()];

let val;

// Get array length
val = numbers.length;
// Check if is Array
val = Array.isArray(numbers);
val = Array.isArray('suman');
// Get single value
val = numbers[3];
val = numbers[0];
// Insert into array
numbers[2] = 100;
// Find index of value
val = numbers.indexOf(67);

// Mutating Arrays
// Add on to end
numbers.push(34)
// Add on to front
numbers.unshift(120)
// Take off from end
numbers.pop()
// Take off from front
numbers.shift();
// Splice values
numbers.splice(1,1) // where we to start and where we to end
numbers.splice(1, 3) // where we to start and where we to end
// Reverse the Array
numbers.reverse();

// Concatenate Array
val = numbers.concat(fruit)

// Sorting arrays

val = fruit.sort();
// val = numbers.sort();

// Use the compare function
val = numbers.sort(function(x, y){
  return x-y;
})

// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
})

// Find
function over50(num){
return num > 50;
}

val = numbers.find(over50)

console.log(numbers);
console.log(val);