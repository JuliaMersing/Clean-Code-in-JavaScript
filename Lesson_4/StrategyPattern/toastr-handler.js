//It will print a user-friendly message 
import * as toastr from "toastr";

export class ToastrHandler {
  handle(title, body) {//Doubt: Sería lo mismo escribir aquí (errorTitle, errorBody)??
    toastr.error(`${title} - ${body}`);
  }
}
