'use strict'
function ModuleLoader(){
    const modules = {};
    
    function getInstance(name){//It searches for the modules and implements them
        if(modules[name]){ 
            return modules[name];
        }
        else {
            throw new Error(`Undefined module ${name}`); //¿Throw?
        }
    }

    function define(name, dependencies, instances){//This function can define modules and returns an API as an object
        if(modules[name]){
            throw new Error(`Module ${name} already defined`)
        }
        else{//Right now the dependencies array only has the name of the dependencies, so we have to take the implementations of the dependencies.
            const depsInstances = dependencies.map((dep) => {//It keeps the array of implementations
               return getInstance(dep);//We do that with the gestInstance() method from the ModuleLoader
            });
            modules[name] = instances.apply(instance, depsInstances);//A MILLION OF DOUBTS HERE
        }
    }

    return {//The public API from this function:
        getInstance : getInstance,
        define : define,
    };
}
const loader = ModuleLoader();
loader.define("HttpClient", [], function HttpClient(){
    function get(url){
        return fetch(url).then(response => response.json());
    }
    return { //VERY IMPORTANT! Each module must return a public API!!
        get : get
    }
});
loader.define("PostManager", ["HttpClient"], function PostManager(HttpClient) {
    function getPosts(){
        HttpClient.get("https://jsonplaceholder.typicode.com/posts").then(posts => {
            console.log("Posts ", posts);
        });
    }
    return {
        getPosts : getPosts
    };
});

let postManager = loader.getInstance("PostManager");
postManager.getPosts();
