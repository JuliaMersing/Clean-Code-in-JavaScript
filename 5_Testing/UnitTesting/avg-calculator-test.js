const { calculateAvg } = require('./avg-calculator');

let testNumbers = [3, 4, 5];
let avg = calculateAvg(testNumbers);

if(avg === 4) {
    console.log("Test 1 passed!");
}
else {
    console.log("Test 1 failed1");
}

try{
   avg = calculateAvg(null);
}
catch(err) {
    if(err === "Error: Invalid Input") {
        console.log("Test 2 passed!");
    }
    else {
        console.log("Test 2 failed!");
    }
}