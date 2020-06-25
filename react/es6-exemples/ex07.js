let nums = [13, 35, 57, 34];

let otherNums = [100, 372, ...nums];

console.log(nums);
console.log(otherNums);

// CREATING A CLONE OFF AN ARRAY
let nums2 = nums;
nums2.push(999);
console.log(nums2);
console.log(nums);

// CREATING COPY OFF AN ARRAY
let nums3 = [...nums];
nums3.push(111);
console.log(nums3);
console.log(nums);

// SAME WORKS WITH OBJECTS
let player1 = { name: "Dan", email: "dan@dan.com" };
let player2 = { country: "Ireland", ...player1, born: "Luxemburg" };

console.log(player1);
console.log(player2);

// CLONING
let player3 = player1;
// COPYING
let player4 = { ...player1 };

console.log(player3 === player1); // true

console.log(player4 === player1); // false
