import * as Bottle from "bottlejs";
import { HttpClient } from "./http-client";
import { PostsManager } from "./posts-manager";

const bottle = new Bottle();
bottle.service("HttpClient", HttpClient);
bottle.service("PostsManager", PostsManager, "HttpClient"); //There is just one dependency

let PostsManager = bottle.container.PostManager;
postsManager.getPosts().then((posts) => console.log("Posts: ", posts));
postsManager
  .getComments()
  .then((comments) => console.log("Comments: ", comments));
