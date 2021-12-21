export class PostsManager {
  constructor(http) {//DOUBT:Normalmente, en el constructor se especifican las dependencias, ¿no?
    this.http = http;//DOUBT: Le estamos diciendo q la dependencia es un http pero de contenido desconocido por el momento, ¿no?
  }

  getPosts() {
    return this.http.get("http://jsonplaceholder.typicode.com/posts");
  }

  getComments() {
    return this.http.get("http://jsonplaceholder.typicode.com/posts");
  }
}
