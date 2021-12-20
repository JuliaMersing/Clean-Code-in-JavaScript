import * as toastr from 'toastr';

export class ErrorHandler {
    static handle(response) {
        if(Response.status == 401) {
            toastr.error("You are not authorized to view this content");
        }
    else if (Response.status == 404) {
        toastr.warning("Content not found");
    }
    else if (Response.status == 500) {
        toastr.error("Internal server error");
    }
    else {
        toastr.info("Unknown error");
}
    }
}
