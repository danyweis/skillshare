// WE CAN USE EXTENDS TO MAKE A CLASS HERITADE FROM OTHER
class Person {
  constructor() {
    this.name = undefined;
    this.city = undefined;
  }
}

class Employee extends Person {
  constructor() {
    super(); // AS SOON AS WE CALL A CONSTRUCTOR WE HAVE TO USE THE SUPER();
    this.salary = 45000;
    this.department = undefined;
  }
}

let emp1 = new Employee();
console.log(emp1);
