// Normal function
/*
function divide(n1, n2) {
  if (typeof n1 !== "number") {
    throw "first argument is not a number";
  }
  if (typeof n2 !== "number") {
    throw "second argument is not a number";
  }
  if (n2 === 0) {
    throw "can not divide by zero";
  }

  return n1 / n2;
}

console.log("start of script");
let a = 12,
  b = 5;
let c = divide(a, b);
console.log("result of division is", c);
console.log("end of script");
*/

/*
// async function
function divide(n1, n2, callback) {
  if (typeof callback !== "function") {
    throw "callback function must be supplied and must be a function";
  }
  setTimeout(() => {
    if (typeof n1 !== "number") {
      callback("first argument is not a number");
      return;
    }
    if (typeof n2 !== "number") {
      callback("second argument is not a number");
      return;
    }
    if (n2 === 0) {
      callback("can not divide by zero");
      return;
    }

    callback(null, n1 / n2);
  }, 0);
}

console.log("start of script");
let a = 12,
  b = 5;
//------------this is a callback handler
divide(a, b, (err, result) => {
  if (err) {
    console.log("there was an error", err);
  } else {
    console.log("The result division", result);
  }
});
console.log("end of script");
*/

// async in ES6
function divide(n1, n2) {
  return new Promise((resolve, reject) => {
    if (typeof n1 !== "number") {
      reject("first argument is not a number");
    }
    if (typeof n2 !== "number") {
      reject("second argument is not a number");
    }
    if (n2 === 0) {
      reject("can not divide by zero");
    }
    resolve(n1 / n2);
  });
}

console.log("start of script");
let a = 12,
  b = 5;
// this is without await
divide(a, b) // run this
  .then((result) => console.log("Result of division", result)) // then if everything ok run this
  .catch((err) => console.log("there was an error", err)); // If there was an error run this

// this is with await witch needs to be in an async function we can put it in a setTimeout for the moment
setTimeout(async () => {
  try {
    let result = await divide(a, b);
    console.log("Result of division", result);
  } catch (err) {
    console.log("there was an error", err);
  }
}, 0);

console.log("end of script");
