const firstName = 'Willian';
const lastName = 'Johnson';
const age = 36;
const str = 'Hello ther my name is Suman!'
const tags = 'web design, web development , react'


let val;

val = firstName + lastName

// Concatenation

val = firstName + ' ' + lastName

// Append
val = 'Suman ';
val += 'Malakar' // += operator use for append

val = 'Hello, my name is ' + firstName + ' am I am ' + age;

// Escaping
val = 'That\'s awesome, I can\'t wait';

// Length
val = firstName.length;

// concat()

val = firstName.concat(' ', lastName);

// change case
val = firstName.toUpperCase()
val = firstName.toLowerCase()

val = firstName[0]
val = firstName[4]

// indexOf
val = firstName.indexOf('i')
val = firstName.lastIndexOf('n')

// charAt()
val = firstName.charAt('2')

//Get last char
val = firstName.charAt(firstName.length - 1)

// substring()
val = firstName.substring(0, 4)
val = firstName.substring(0, 5)

// slice()
val = firstName.slice(0,4)
val = firstName.slice(-3)

// split() it's make Arrays
val = str.split(' ');
val = tags.split(',')

// replace()
val = str.replace('Suman!', 'Jack');

// include()
val = str.includes('Hello')
val = str.includes('Hello!!!!')



console.log(val);