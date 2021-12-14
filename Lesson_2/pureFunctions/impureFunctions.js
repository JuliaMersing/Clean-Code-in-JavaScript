'use strict'
//Impure functions (methods of the class). This code will work but methos are impure:
let user = {
    id : 7654,
    firstName : "Ada",
    lastName : "Lovelace"
};

class ProfileManager {
    constructor(user){
        this.user = user;
        this.profileUrl = "";
        this.userName = "";
        this.domain = "http://mysocialnetwork.com";
    }
    createUserName(){ //This function is IMPURE because the every different output (because of the random) and because it affects a shared state ("username" variable).
        let random = Math.floor(Math.random()* 100000);
        this.username = `${this.user.firstName}.${this.user.lastName}.${random}`;
    }
    //DOUBT: Is what I understand correct for the second function?
    createProfileUrl(){//This is also IMPURE because asumes that "userName" variable (a shared state) is already filled by the previous method.  
        this.profileUrl = `${this.domain}${this.userName}`;
    }
}

let manager = new ProfileManager(user);
manager.createUserName();
manager.createProfileUrl();
