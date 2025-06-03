// 6.Task: Array Reduction



// -Create an array of numbers. Write a function that uses the reduce method to calculate the sum of all even numbers in the array.

function sumEvenNumbers(numbers) {
    return numbers.reduce((sum, num) => {
        return num % 2 === 0 ? sum + num : sum;
    }, 0);
}


const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenSum = sumEvenNumbers(numberArray);

console.log("Sum of even numbers:", evenSum);
