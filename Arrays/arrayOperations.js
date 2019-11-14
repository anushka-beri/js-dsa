const vampireDiaries = ["Elena", "Klaus", "Catherine", "Damon", "Elijah"]

const added = vampireDiaries.push("Rebekah")

// console.log(added);
console.log("after adding", vampireDiaries);

const deleted = vampireDiaries.pop();

// console.log(deleted);
console.log("after deleting", vampireDiaries);

const addFirst = vampireDiaries.unshift("Haley");

// console.log(addFirst);
console.log("after unshift (adding at first)", vampireDiaries);

const specificAdd = vampireDiaries.splice(3, 0 , "Hope");

// console.log(specificDelete);
console.log("Adding at a specific position", vampireDiaries);