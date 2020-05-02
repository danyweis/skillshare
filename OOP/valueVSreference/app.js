console.clear();

let x = 10;
let y = x;

x = 20;

console.log(x); // => 20
console.log(y); // => 10

// X & Y are two indipendent values

let a = { value: 10 };
let b = a;

a.value = 20;

console.log(a); // => {value: 20}
console.log(b); // => {value: 20}

// OTHER EXEMPLE

let number = 10;

function increase(numberToIncrease) {
    numberToIncrease++;
    console.log(numberToIncrease); //11
}

increase(number);
console.log(number); //10

let obj = { value: 10 };

function increaseObj(theObj) {
    theObj.value++;
    console.log(theObj); //11
}

increaseObj(obj);
console.log(obj); //11
