console.clear();

const circle = {
  radius: 1,
  location: {
    x: 1,
    y: 1,
  },
  draw: function () {
    console.log("draw");
  },
};

circle.draw();

// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

// then we can call the function to create an object circle

const newCircle = createCircle(2); // this circle has a radius of 2

// Constructor Function
function Circle1(radius) {
  (this.radius = radius),
    (this.draw = function () {
      console.log("draw");
    });
}
// no need for return

const another = new Circle1(3);

// when we declare a constructor function then JavaScript in the background does this:

const Circle2 = new Function(
  "radius",
  `
this.radius = radius,
this.draw = function(){
    console.log('draw');
}
`
);

const circleTest = new Circle1(4);
const circleTest1 = new Circle2(4);

console.log(circleTest);
console.log(circleTest1);
