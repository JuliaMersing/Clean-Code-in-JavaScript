import * as Bottle from "bottlejs";
import { HttpClient } from "./http-client";
import { PostsManager } from "./posts-manager";

const bottle = new Bottle();
bottle.service("HttpClient", HttpClient);
bottle.service("PostsManager", PostsManager, "HttpClient"); //There is just one dependency

let PostsManager = bottle.container.PostManager; //This get the instance back
postsManager.getPosts().then((posts) => console.log("Posts: ", posts)); //We get an instnce of PostManager without provide an instance of HttpClient at all, because the container knew how to instantiate PostManager without having us provided the necessary dependences.
postsManager
  .getComments()
  .then((comments) => console.log("Comments: ", comments));
