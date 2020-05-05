function Circle(radius) {
    this.radius = radius;
    this.defaultLocation = { x: 0, y: 0 };
    this.computeOptimumLocation = function () {
        // ......
    };
    this.draw = function () {
        this.computeOptimumLocation();
        console.log("draw");
    };
}

const circle = new Circle(10);
// TO CALL THIS WOULD GIVE AN ERROR
// circle.computeOptimumLocation()
// circle.draw()

// BETTER WAY WOULD BE TO PUT computeOptimumLocation()IN A VARIABLE LIKE:

function Circle1(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0 };

    let computeOptimumLocation = function () {
        // ... due some staff
    };

    this.draw = function () {
        computeOptimumLocation();
        // defaultLocation

        // IF WE CALL THE VALUES OUT OF THE VARIABLES HERE IN THE CLOSURE FUNCTION
        // FROM THE PARENT FUNCTION WE DONT NEED THE THIS.KEYWORD
        // BUT IF WE CALL THE RADIUS WE HAVE TO USE THIS.KEYWORD

        this.radius;

        console.log("draw");
    };
}

const circle1 = new Circle1();
circle1.draw(); // wont give an error
