let numbers = [
    6, 8, 3, 14, 1, 9, 10
];

function getEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 == 0);
}

console.log(getEvenNumbers(numbers));