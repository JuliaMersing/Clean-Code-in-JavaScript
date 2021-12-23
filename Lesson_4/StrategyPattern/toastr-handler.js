//It will print a user-friendly message 
import * as toastr from "toastr";

export class ToastrHandler {
  handle(title, body) {
    toastr.error(`${title} - ${body}`);
  }
}
