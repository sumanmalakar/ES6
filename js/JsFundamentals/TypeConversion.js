let val;

// Number to String
val = String(578);
val = String(4+4)
// Boolean to String
val = String(true)
// Date to String
val = String(new Date())
// Array to String
val = String([1,2,3,4,5]);

// toString()
val = (55).toString();
val = (true).toString();

// String to Number
val = Number('5');
val = Number('5'+ '5')
val = Number(true)
val = Number(false)
val = Number(null)
val = Number('hello'); // NAN - Not A Number
val = Number([1,2,3,4]) 
val = Number('5.00');


val = parseInt('100.30')
val = parseFloat('100.3000')

// Output
console.log(val);
console.log(typeof val);
console.log(val.toFixed(3));
/*
console.log(val.length); 
 (length) method only works on the string not in number or boolean
*/

const val1 = String(5);
const val2 = String(6)
const sum = Number(val1 + val2);

console.log(sum);
console.log(typeof sum)