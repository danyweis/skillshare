p1 = {
  name: "Dan",
  email: "my@email.com",
  city: "Cork",
};

// OLD WAY
function sayHello(name, city) {
  console.log(`hey ${name} how is the weather in ${city}`);
}

sayHello(p1.name, p1.city);

// ES6 WAY
function sayHi({ name, city }) {
  console.log(`hey ${name} how is the weather in ${city}`);
}

sayHi(p1);
