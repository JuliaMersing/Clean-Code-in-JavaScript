//1.5 All about this

'use strict';
function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    console.log(this); //When using "new" to initialize a new object, "this" in the constructor function points to the newly constructed object. The result is the same that console.log(p).
}

let p = new Person("Ada", "Lovelace", 30);// DOUBT: ¿por qué cuando se inicializa (¿o instancia?) un objeto se usa la keyword "let" y no "const"?
console.log(p); 
let a = new Person("Julia", "Lovelace", 30);
console.log(a); 
