function hello(name1, name2, name3) {
  console.log("Hello", name1, name2, name3);
}
hello("JJ", "Dan", "Yoshi");

// NAME 3 WILL BE UNDEFINED
function hello2(name1, name2, name3) {
  console.log("Hello", name1, name2, name3);
}
hello2("JJ", "Dan");

// THIS WILL RETURN AN ARRAY
// REST OPERATOR
function hello3(...names) {
  console.log("Hello", names);
}
hello3("JJ", "Dan");

function hello4(name, ...names) {
  console.log("Hello", names, "from", name);
}
hello4("JJ", "Dan", "Luca", "Jeda", "Yoshi");
