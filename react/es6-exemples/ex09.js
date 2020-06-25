class Person {
  constructor() {
    this.name = "";
    this.city = "Cork";
  }
}

let p1 = new Person();
console.log(typeof p1);
console.log(p1);

// HERE DUBLIN IS THE DEFAULT VALUE
class Person2 {
  constructor(name, city = "Dublin") {
    this.name = name;
    this.city = city;
  }
}

let p2 = new Person2("Dan", "Luxembourg");
console.log(p2);

let p3 = new Person2("Supattra");
console.log(p3);

// WE CAN ADD A METHOD
class Person3 {
  constructor(name, city = "Dublin") {
    this.name = name;
    this.city = city;
  }

  printInfo() {
    console.log("Name =", this.name);
    console.log("City =", this.city);
  }
}

let p4 = new Person3("Luc", "Luxembourg");
p4.printInfo();

let p5 = new Person3("Mito");
p5.printInfo();
