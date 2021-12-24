let readings = {
    coreTemp : 74,
    additionalTemp : 80,
    readingA : 178,
    readingB : 120,
    readingC : -190,
}

function adjustReadings(readings){//This function is conditionally pure: if you do not pass a copy of the original "readings" object as argument, the function is not pure. It needs that copy!
    readings.readingA -= 20;
    readings.readingB += readings.coreTemp/2;
    return readings; //This "return readings" is necessary.
}
function testReadingA(readingA){
    return readingA >= 170;
}
console.log("Readings before ", readings);
//adjustReadings(readings); This function has side effects, it changes the shared state!
//The solution: Use the Spread Operator to avoid side effects: it provides a copy of original data without changing the shared state. And it is clearer if you keep it in a variable.
let newReadings = adjustReadings({...readings}); // THE SAME: adjustReadings(Object.assign({}, readings));
console.log(testReadingA(readings.readingA));
console.log("Readings after ", readings);
console.log("New readings ", newReadings);