import { HttpClient } from "./http-client";
import { PostManager } from "./postManager";

let postManager = new PostManager(new HttpClient());//DOUBT: If PostManager class depends on HttpClient, we pass this last one as argument.
postManager.printPost();
