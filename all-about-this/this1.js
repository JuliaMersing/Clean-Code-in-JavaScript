'use strict';
const a = 92; //Variables declared with "const" are part of the global object
const obj = {
    a = 1,
    b = 2,
    c = 3
}

function test() {
    console.log(this.a);
}

test(); //"This" is bound to the global object. It refers to the variable "a" in the global scope
obj.test(); //It refers to the variable "a" in the concret object "obj"
