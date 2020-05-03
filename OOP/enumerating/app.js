// Iteate or enumareting properties

let circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1,
    },
    draw: function () {
        console.log("draw");
    },
};

console.log(circle);

for (let key in circle) {
    console.log(key);
}

console.log("**************");

for (let key in circle) {
    console.log(key, circle[key]);
}

console.log("**************");
for (let key in circle) {
    if (typeof circle[key] !== "function") {
        console.log(key, circle[key]);
    }
}

// Can get the keys in an array with Object.keys

const keyArray = Object.keys(circle);
console.log(keyArray);

if ("radius" in circle) {
    console.log("Yes circle has a radius");
}
