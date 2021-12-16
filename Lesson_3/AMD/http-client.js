define("http-client", [], function HttpClient(){
    return { //Return a module, in this case with only one function that does a get request from APIs
        get : function(url){
            return fetch(url).then(response => response.json());
        }
    }
});