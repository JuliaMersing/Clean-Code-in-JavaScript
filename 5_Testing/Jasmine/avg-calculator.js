function calculateAvg(numbers) {
    if(numbers === null){
        throw new Error("Invalid Input");
    }
    
    let sum = 0;
    numbers.forEach(num => {
        sum += num;
    });
    return sum / numbers.length;
}

module.exports = {
    calculateAvg // DOUBT: ¿Por qué no escribir calculateAvg : calculateAvg como en commonJs?
}