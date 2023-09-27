class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(
      `Hello my name is ${this.name} and I am ${this.age} years old.`
    );
  }
}

class Employee extends Person {
  constructor(name, age, company, salary) {
    super(name, age);
    this.company = company;
    this.salary = salary;
  }
}

const alice = new Person("Alice", 15);
console.log("alice: ", alice);
alice.sayHello();

const bob = new Person("Bob", 17);

const charly = new Employee("Charly", 34, "Orsys", 3400);
charly.sayHello();
