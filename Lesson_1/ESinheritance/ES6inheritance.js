'use strict';
class Pet {
    constructor(name){
        this.name = name;
    }
    eat(){ //We can "defined" the method directly within the class. DOUBT: defined as if we were calling it?
        console.log(`${this.name} is eating...`);
    }
}

class Dog extends Pet {
    constructor(name, breed) {
        super(name);//In derived classes, super() calls the mother's constructor method and gets access to the mother's properties and methods. It must be called before you
        // can use 'this'.
        //DOUBT: How many arguments should we put as arguments in super()? Only those to which we want to get access?
        this.breed = breed;
    }
    play(){
        console.log(`${this.name} is playing...`);
    }
}

let max = new Dog("Max", "Golden Retriever");
max.eat();
max.play();
console.log(max);