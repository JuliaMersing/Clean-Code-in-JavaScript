import {HttpClient} from './http-client';

let http = new HttpClient();

http.get("https://httpstat.us/404").then(data => {
    console.log(data);
})

//DOUBT: Si cambiamos el numero de error, no cambia el mensaje que vería el usuario
//DOUBT: Aparece un undifined en la consola, que no sabemos de donde sale...