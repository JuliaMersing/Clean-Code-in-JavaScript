class HttpClient {
    get(url){
        return fetch(url).then(response => response.json());
    }
}
//This is the class supposedly instatiated everywhere: 
class PostsService {
    configure(config){
        this.configureHttpClient(config);
        this.configureEndpoints(config);
    }

    configureHttpClient(config){
        if(!config.httpClient){
            throw new Error("HttpClient not configured");
        }
        this.httpClient = config.httpClient;
    }
    configureEndpoints(config){
        if(!config.endpoints || config.endpoints.posts || config.endpoints.comments){
            throw new Error ("EndPoints poorly configured");
        }
        this.postEndpoints = config.endpoints.posts;
        this.commentsEndpoints = config.endpoints.comments;
    }
    getPosts(){
        return this.httpClient.get(this.postEndpoints);
    }
    getComments(){
        return this.httpClient.get(this.commentsEndpoints);
    }
}

//This is the factory that contains the unique initialization of PostServices in order to not use "new" keyword every time we need an instance of it. 
class PostsServiceFactory {
    prepareInstance(){
        let config = {
            httpClient : new HttpClient(),
            endpoints : {
                posts : "https://jsonplaceholder.typicode.com/posts",
                comments : "https://jsonplaceholder.typicode.com/comments"
            }
        }
    //These 2 following lines are the unique initialization of the PostsService class. DOUBT: ¿ESTO ES EL SINGLETON?
    this.postsService = new PostsService();
    this.postsService.configure(config);
    }
    //This method obtains an instance of PostService class.: 
    getInstance() {
        if(!this.postsService) {
            this.prepareInstance();
        }
        return this.postsService;
    }

}
//These 2 lines are the initialization following the singleton pattern:
let postsServiceFactory = new PostsServiceFactory();
let postsService = postsServiceFactory.getInstance();
//These 2 lines are two ways to access to different methods of the previously initialized PostsService class, 
postsService.getPosts();
postsService.getComments();