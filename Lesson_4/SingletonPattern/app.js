class HttpClient {
    get(url){
        return fetch(url).then(response => response.json());
    }
}

class PostService {
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

class PostServiceFactory{
    prepareInstance(){}
}