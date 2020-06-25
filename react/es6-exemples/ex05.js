// NORMAL FUNCTION
function hello() {
  return "Hello World";
}

let s1 = hello();
console.log(s1);

// ANONUMUS FUNCTION
let greet = function () {
  return "Helllllo World";
};

let s2 = greet();
console.log(s2);

// ARROW FUNCTION
setInterval(() => console.log("Hey World"), 1000);
