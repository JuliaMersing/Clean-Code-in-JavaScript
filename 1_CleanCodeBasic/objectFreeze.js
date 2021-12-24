'use strict'
const config = {
    name : "Ada",
    lastName : "Lovelace",
    age : 30,
}

Object.freeze(config);
console.log(config);
config.age = 33; //It does not work!! It has just been frozen!
console.log(config);