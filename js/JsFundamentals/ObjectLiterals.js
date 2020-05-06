const person = {
  firstName: 'Steve',
  lastName: 'Smith',
  age: 30,
  email: 'steve@email.com',
  hobbies:['music', 'sports'],
  address:{
    city:'Miami',
    state:'fl'
  },
  getBirthYear: function(){
    return 2020 - this.age;
  }
}

let val;

val = person;
// Get specific value
val = person.firstName;
val = person['firstName'];
val = person.hobbies
val = person.hobbies[1]
val = person.address;
val = person.address.state;
val = person.address['city']
val = person.getBirthYear();

console.log(val)

const people = [
  {name: 'john', age:30},
  { name: 'mike', age: 23 },
  { name: 'Nancy', age: 93 }


]

for(let i = 0; i < people.length; i++){
  console.log(people[i].name)
}