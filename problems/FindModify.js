// 5.Task: Find and Modify



// -Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.


function updateAgeByName(people, nameToFind, newAge) {
    let found = false;

    for (let person of people) {
        if (person.name === nameToFind) {
            person.age = newAge;
            found = true;
            break; 
        }
    }

    if (!found) {
        console.log(`Person named ${nameToFind} not found.`);
    }

    console.log("Updated array:", people);
}


let peopleArray = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

updateAgeByName(peopleArray, "Bob", 32);
