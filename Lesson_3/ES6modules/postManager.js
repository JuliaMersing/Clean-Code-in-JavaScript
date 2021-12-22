//Import the const variable from config.js using destructuring. It is ready to be used in the get() method in the line 11.
import { POSTS_ENDPOINT } from "./config";

//This module has the httpClient dependency.We take the httpClient instance and put it inside the postManager instance.DOUBT: ¿cuál es la instance?¿Dónde se está haciendo esto?
export class PostManager {
    constructor(httpClient){
        this.httpClient = httpClient;
    }

    printPost(){
        this.httpClient.get(POSTS_ENDPOINT).then(posts => console.log("Post ", posts));//DOUBT: este "this", hace referencia al httpClient, verdad?
    }
}