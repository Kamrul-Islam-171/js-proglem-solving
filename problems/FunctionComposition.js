// 3.Task: Function Composition



// -Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.



function square(num) {
  return num * num;
}

function double(num) {
  return num * 2;
}

function addFive(num) {
  return num + 5;
}


function processNumber(num) {
  const squared = square(num);
  const doubled = double(squared);
  const result = addFive(doubled);
  return result;
}


const input = 3;
const finalResult = processNumber(input);
console.log(finalResult); 
