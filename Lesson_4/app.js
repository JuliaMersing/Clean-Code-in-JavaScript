import {HttpClient} from './http-client';

let http = new HttpClient();

http.get("https://httpstat.us/401").then(data => {
    console.log(data);
})

//DOUBT: Aparece un undifined en la consola, que no sabemos de donde sale 