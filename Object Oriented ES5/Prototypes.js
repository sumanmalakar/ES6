// Object.prototype
//Person.protype

function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.CalculateAge = function () {
  //   const diff = Date.now() - this.birthday.getTime()
  //   const ageDate = new Date(diff)
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate Age
Person.prototype.CalculateAge = function () {
  const diff = Date.now() - this.birthday.getTime()
  const ageDate = new Date(diff)
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function(){
  return ` ${this.firstName} ${this.lastName} `
}

// Gets Married
Person.prototype.getsMaried = function(newLastName){
  this.lastName = newLastName
}

const john = new Person('John', 'Doe','8-12-90')
const mary = new Person('Mary', 'Johnson', '9-12-90')

console.log(mary);

console.log(john.CalculateAge())
console.log(mary.getFullName())

mary.getsMaried('smith')

console.log(mary.getFullName())

console.log(mary.hasOwnProperty('firstName'))
console.log(mary.hasOwnProperty('getFullName'))
