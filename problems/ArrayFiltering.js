// 1.Task: Array Filtering and Mapping



// -Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result

const people = [
  { name: 'Alice', age: 25, gender: 'female' },
  { name: 'Bob', age: 30, gender: 'male' },
  { name: 'Carol', age: 22, gender: 'female' },
  { name: 'David', age: 28, gender: 'male' },
  { name: 'Eve', age: 35, gender: 'female' }
];

const filterMale = (peopleArray) => {
    return peopleArray.filter(item => item.gender !== 'female').map(item=> item.name)
}

const maleNames = filterMale(people);
console.log(maleNames)