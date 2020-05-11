// Person Constructor
function Person(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function(){
  return ` Hello there ${this.firstName} ${this.lastName}`
}

const person1 = new Person('john' ,'Doe')

console.log(person1.greeting())

// Customer Constructor
function Customer(firstName, lastName, phone, membership){
 Person.call(this, firstName, lastName);
 
 this.phone = phone;
 this.membership = membership
}

// Inherit the Person prototype method
Customer.prototype = Object.create(Person.prototype)

// Make customer.prototype return customer()
Customer.prototype.constructor = Customer;

// Create Customer
 const customer1 = new Customer('tom', 'smith', '66789009', 'Standard')

 console.log(customer1);

 // Customer greeting
 Customer.prototype.greeting = function(){
   return ` Hello there ${this.firstName} ${this.lastName} Welcome to our company`

 }
 
 console.log(customer1.greeting())