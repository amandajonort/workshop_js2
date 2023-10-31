// 1. ARRAYS
// TASK 1
const newYearsResolutions = [
  "Save more money",
  "Exercise more",
  "Buy a new car",
];
// TASK 2
const nextNewYearsResolution = newYearsResolutions[0];
// TASK 3
console.log(newYearsResolutions[2]);
console.log("\n"); // radbrytning
// 2. MORE ARRAYS
const months = [
  "Jon",
  "Feb",
  "Mar",
  "Apr",
  "Jun",
  "May",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
];
// fix the typo
months[0] = "Jan";
// task 1 - print the array
console.log(months);
// task 2 - switch the order of index 4 and 5
[months[4], months[5]] = [months[5], months[4]];
console.log(months);
// task 3 - showing the length/number of items
console.log(months.length);
//task 4 - push-function
months.push("Dec");
console.log(months);
// task 5 - pop-function
deletedMonth = months.pop();
console.log(months);
// task 6 - splice-function
months.splice(6, 1); // ta bort juli
console.log(months);

// 3. ITERATION
const dogs = ["Labrador", "Beagle", "Poodle", "Pug", "Chihuahua"];
const printDogName = (dogName) => {
  console.log("The " + dogName + " barks.");
};
// task 1 - use the function in a foreach-function
console.log("\n"); // radbrytning
dogs.forEach((dog) => printDogName(dog));
// task 2 - make a function with toUpperCase
console.log("\n"); // radbrytning
const printDogNameUppercase = (dogName) => {
  console.log(dogName.toUpperCase());
};
dogs.forEach((dog) => printDogNameUppercase(dog));
// task 3 - anonymous(nameless)-function
console.log("\n"); // radbrytning
dogs.forEach((dog) => {
  console.log("The " + dog + " needs to go for a walk!");
});

// 4. MAPS
const doggieWalks = dogs.forEach((dogName) => {
  return "The " + dogName + " needs to go for a walk!";
});
// task 1
console.log("\n"); // radbrytning
console.log(doggieWalks); // returns undefined
// task 2
console.log("\n"); // radbrytning
const doggieWalks2 = dogs.map((dogName) => {
  return "The " + dogName + " needs to go for a walk!";
});
console.log(doggieWalks2);
// task 3
console.log("\n"); // radbrytning
const shoutyDogNames = dogs.map((dogName) => {
  return dogName.toUpperCase();
});
console.log(shoutyDogNames);

// 5. OBJECTS
// task 1
console.log("\n"); // radbrytning
const person = {
  studentAt: "Chas",
  studentName: "Amanda Jonört",
  age: 28,
};
console.log(person);
// task 2 - adding an array to the object afterwards
person.favoriteFoods = ["Pasta", "Pizza"];
console.log(person.favoriteFoods);
// task 3 - print using dot-notation
console.log(person.studentName, person.age);
// task 4 - add properties in 2 different ways
person.eyeColor = ["green", "brown"];
person["eyeColor"] = ["green", "brown"];
console.log(person.eyeColor);
// task 5 - nested objects, reach a specific value
const dogs2 = {
  labrador: {
    adult: {
      name: "Marley",
    },
    puppy: {
      name: "Buster",
    },
  },
};
console.log(dogs2.labrador.puppy.name); // prints Buster
console.log(dogs2["labrador"]["puppy"]["name"]); // prints buster

// 6. ARRAY-OBJECTS
const products = [
  { name: "Camera", brand: "Canon", model: "EOS 70D" },
  { name: "Camera", brand: "Nikon", model: "D3400" },
  { name: "Camera", brand: "GoPro", model: "Hero 4" },
  { name: "Drone", brand: "DJI", model: "Phantom" },
  { name: "Drone", brand: "GoPro", model: "Karma" },
];
// task 1 - iteration through all the items
printNameandBrand = products.forEach((product) => {
  console.log(`Category: ${product.name}, Brand: ${product.brand}`);
});
console.log(printNameandBrand);
// task 2 - iterate the models using map
const models = products.map((product) => product.model);
console.log("Models: " + models);
