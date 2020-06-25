let name = "Dan";
let age = 34;

let s1 = `${name} is ${age} years old`;
console.log(s1);

// WORKING WITH ES6 TAGS

console.log("------------");
function myTag() {
  return "this is a sample output";
}

let s2 = myTag`${name} is ${age} years old.`;
console.log(s2);

console.log("------------");
function myTag1(strings) {
  console.log("strings: ", strings);
  return "this is a sample output";
}

let s3 = myTag1`${name} is ${age} years old.`;
console.log(s3);

console.log("------------");
function myTag2(strings, p1, p2) {
  console.log("strings: ", strings);
  console.log("p1 is:", p1, "p2 is:", p2);
  return "this is a sample output";
}

let s4 = myTag2`${name} is ${age} years old.`;
console.log(s4);

console.log("------------");
function myTag3(strings, p1, p2) {
  console.log(arguments);
  return "this is a sample output";
}

let s5 = myTag3`${name} is ${age} years old.`;
console.log(s5);

console.log("------------");
function myTag4(strings, ...values) {
  console.log("Values: ", values);
  return "this is a sample output";
}

let s6 = myTag4`${name} is ${age} years old.`;
console.log(s6);
