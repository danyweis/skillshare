let names = ["Luca", "Jeda", "Yoshi", "Supattra"];

// WITH NORMAL FUNCTION
let firstL = names.map(function (name) {
  return name.charAt(0);
});
console.log(names);
console.log(firstL);

// WITH ARROW FUNCTION
firstL = names.map((name) => name.charAt(0));
console.log(firstL);

let index = names.findIndex(function (value, index) {
  return value === "Yoshi";
});
console.log("Yoshi is sitting at index ", index);

index = names.findIndex((value) => value === "Jeda");
console.log("Jeda is sitting at index ", index);
