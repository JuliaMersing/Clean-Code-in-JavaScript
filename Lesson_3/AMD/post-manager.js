define("post-manager", ["http-client"], function PostManager(httpClient){//DOUBT: ¿si hubiera dos dependencias, necesitaría 2 argumentos?
    //DOUBT (NATALIA): Este argumento httpClient, ¿qué contiene exactamente? ¿Es un callback de la implementación del módulo http-client? ¿Es el módulo http-Client entero?
    const url = "https://jsonplaceholder.typicode.com/posts";
    return {//Return a module, in this case with only one function that will fetch the posts, with a get request
        printPosts : function(){
            httpClient.get(url).then(posts => console.log("Post ", posts)); //DOUBT (JULIA): ¿Por qué tenemos que poner el .get() si se supone que el http-client ya hace un fetch de url?
        }
    }
})