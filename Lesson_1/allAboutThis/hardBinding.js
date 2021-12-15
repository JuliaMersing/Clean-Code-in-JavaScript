// 1.5 All about this

'use strict';
const obj = {
    a: 1,
    b: 2,
    c: 3
}

function test(){
    console.log(this.a);
    console.log(this.b);
    console.log(this.c);
}

function callMeLater(cb){
    setTimeout(() => { //
        cb();
    }, 3000);

}
//callMeLater(test); It would not work, it would return three undefined values.
callMeLater(test.bind(obj)); // The callback (test) is passed with "this" bounded to a concrete object