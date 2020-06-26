let p1 = {
  name: "Dan",
  email: "my@email.com",
  city: "Cork",
};

// Javascript before
/*
let name = p1.name
let email = p1.email
let city = p1.city
*/

//ES6

let { name, email, city } = p1;
console.log(name);
console.log(email);
console.log(city);

//  can call only 2
// let {name, email} = p1;

// can call other property which returns undefined
// let { name, email, country } = p1;
// Dan my@email.com undefined

let nums = [10, 20, 30, 40, 50];
let [n1, n2, ...restNums] = nums;

console.log("n1 is", n1);
console.log("n2 is", n2);
console.log("restNums is", restNums);
