'use strict';

class Address {
    constructor (nameStreet, number, city) {
        this.nameStreet = nameStreet;
        this. number = number;
        this. city = city;
    }
} 

class User extends Address {
    constructor(name){
        this.name = name;
    }
    walk(){ 
        console.log(`${this.name} is active...`);
    }
}


class Details extends User {
    constructor(name, address) {
        super(name);
        this.breed = address;
    }
    play(){
        console.log(`${this.name} is playing...`);
    }
}

let max = new User("Max", "Golden Retriever");
max.walk();
max.play();
console.log(max);