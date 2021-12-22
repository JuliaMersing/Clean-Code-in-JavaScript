'use strict'
//Refactoring the impureFunctions.js code:
let user = {
    id : 7654,
    firstName : "Ada",
    lastName : "Lovelace"
};

class ProfileManager{
    constructor(user){//Minimize the shared state as much as possible
        this.user = user;
        //Remove from the shared state those properties that are modified by impure functions
    }
    createUserName(user){//Return the value of those properties from the function
        return `${user.firstName}.${user.lastName}.${user.id}`;
    }
    createProfileUrl(domain, userName){
        return `${domain}${userName}`;
    }
    //Remove any randomness from the impure functions (if possible)
}
let manager = new ProfileManager(user);
//Combine pure functions!
let profileUrl = manager.createProfileUrl("https://mysocialnetwork.com", createUserName(user));