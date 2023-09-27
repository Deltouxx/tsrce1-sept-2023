function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function () {
  console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`);
};

function Employee(name, age, company, salary) {
  Person.bind(this)(name, age);
  this.company = company;
  this.salary = salary;
}

Object.setPrototypeOf(Employee.prototype, Person.prototype);

const alice = new Person("Alice", 15);
console.log("alice: ", alice);
alice.sayHello();

const bob = {};
Object.setPrototypeOf(bob, Person.prototype);
Person.bind(bob)("Bob", 17);
console.log("bob: ", bob);
bob.sayHello();

const charly = new Employee("Charly", 34, "Orsys", 3400);
charly.sayHello();
