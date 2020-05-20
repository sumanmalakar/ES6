function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} ${this.type}: ${this.cost}`)
    }
    return member;
  }
}

const SimpleMembership = function(name){
  this.name = name;
  this.cost = '$5';
}

const StandardMembership = function (name) {
  this.name = name;
  this.cost = '$10';
}
const SuperMembership = function (name) {
  this.name = name;
  this.cost = '$15';
}

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('john doe', 'simple'))
members.push(factory.createMember('john doe2', 'super'))
members.push(factory.createMember('john doe3', 'standard'))



// console.log(members)

members.forEach(function(member){
  member.define()
})