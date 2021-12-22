'use strict';
//Use property descriptors to create read only fields
const person = {
    name : "Ada",
    lastName : "Lovelace"
};

Object.defineProperty(person, 'age', {
    value : 30,
    writable : false,
    enumerable : true,
    configurable : false
});

console.log(person);
person.age = 44; //It can not change the value of a non writable field!! It does not work!
console.log(person);  // This console.log will print the same that the 15th line one.