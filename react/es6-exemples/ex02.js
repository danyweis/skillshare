function test() {
  for (var i = 1; i <= 5; i++) {
    console.log("In the loop, i is: " + i);
  }

  console.log("outside of the loop, i is: " + i);
}

test();

// IF INSTEAD OF VAR WE USE LET THEN THE LOG OUTSIDE OF THE LOOP TROTHS A ERROR

const name = "Dany";
console.log(name);
name = name.toUppercase();
console.log(name); // Const can not be modified
