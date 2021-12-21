export class PostsManager {
  constructor(http) {
    this.http = http;
  }

  getPosts() {
    return this.http.get("http://jsonplaceholder.typicode.com/posts");
  }

  getComments() {
    return this.http.get("http://jsonplaceholder.typicode.com/posts");
  }
}
