//import * as Bottle from "bottlejs";
//import { HttpClient } from "./http-client";
var postManager = require("./posts-manager");
//require { PostsManager } from "./posts-manager";
/*
const bottle = new Bottle();//DOUBT: ¿Cuándo sí y no se puede poner "new"?
bottle.service("HttpClient", HttpClient);//DOUBT: Eesto es un registro de constructor. Entonces, ¿qué están haciendo exactamente estas líneas?
bottle.service("PostsManager", PostsManager, "HttpClient"); //There is just one dependency

<<<<<<< HEAD:Lesson_4/DependencyInversion/Video/app.js
let PostsManager = bottle.container.PostManager;
postsManager.getPosts().then((posts) => console.log("Posts: ", posts));//We get an instance of Post Manager without provide an instance of HttpClient at all, because the container knew how to instantiate PostManager without having us provided the necessary dependences.
=======
let PostsManager = bottle.container.PostManager; //This get the instance back */
let postManager = new PostsManager();
postsManager.getPosts().then((posts) => console.log("Posts: ", posts)); //We get an instnce of PostManager without provide an instance of HttpClient at all, because the container knew how to instantiate PostManager without having us provided the necessary dependences.
>>>>>>> d07c5d80458f31ca616bf07dc28bd320b70b2d9e:Lesson_4/DependencyInversion/app.js
postsManager
  .getComments()
  .then((comments) => console.log("Comments: ", comments));
