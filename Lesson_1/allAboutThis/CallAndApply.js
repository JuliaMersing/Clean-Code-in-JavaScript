//1.5 All about this

'use strict';
const a = 92; //Variables declared with "const" are part of the global object
const obj = {
    a: 1,
    b: 2,
    c: 3
}

function test() {
    console.log(this.a);
}

//2 options for binding "this" to the object inside the function, for the call of it.

test.call(obj); 
test.apply(obj);

//Mismo resultado con
obj.test();

