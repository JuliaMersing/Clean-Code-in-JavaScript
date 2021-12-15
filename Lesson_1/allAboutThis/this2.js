//1.5 All about this

'use strict';
const a = 92; //Variables declared with "let" are not part of the global object. 
const obj = {
    a: 1,
    b: 2,
    c: 3
}

function test() {
    console.log(this);
}
console.log(this.a);

test(); //It returns "undefined" because "a" is not part of the global object.
obj.test(); //It refers to the variable "a" in the concret object "obj". It returns 1