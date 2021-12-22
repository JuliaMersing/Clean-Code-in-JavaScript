let numbers = [
    2, 9, 8, 7, 6
];

function numbersSum(numbers) {
 return numbers.reduce((accumulator, current)=> {
     if(isEven(current)) {
         return accumulator + current / 2;
     }
     else {
         return accumulator + current;
     }
 }, 0);
}

function isEven(num) {
    return (num % 2 == 0);
}

console.log(numbersSum(numbers));