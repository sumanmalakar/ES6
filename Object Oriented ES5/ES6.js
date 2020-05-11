class Person{
  constructor(firstName, lastName , dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthdate = new Date(dob)
  }
  greeting(){
    return `Hello there ${this.firstName} ${this.lastName}`
  }
  calculateAge(){
    const diff = Date.now() - this.birthdate.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  getsMarried(newLastName){
    this.lastName = newLastName
  }

  static addNumbers(x, y){
    return x + y;
  }
}

const mary = new Person('mary', 'williams', '11-13-1980');

mary.getsMarried('Thomos')

console.log(mary)

console.log(Person.addNumbers(1,2))