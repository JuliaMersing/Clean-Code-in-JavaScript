import {HttpClient} from './http-client';

let http = new HttpClient();

http.get("https://httpstat.us/401").then(data => {
    console.log(data);
})

<<<<<<< HEAD
//DOUBT: Aparece un undifined en la consola, que no sabemos de donde sale 
=======
//DOUBT: Si cambiamos el numero de error, no cambia el mensaje que vería el usuario
//DOUBT: Aparece un undifined en la consola, que no sabemos de donde sale...
>>>>>>> 5860f30b53b6d73cda14df2816a6bf301983d6bd
