import { ConsoleLogHandler } from "./console-log-handler";
import { ErrorHandler, ErrorHandler } from "./error-handler";
import { ToastrHandler } from "./toastr-handler";

function configureErrorHandler() {
  let errorHandler = new ErrorHandler(new ToastrHandler());
  return errorHandler;
}

let errorHandler = configureErrorHandler();
try {
  throw new Error("Dummy Error");
} 
catch (err) {
  errorHandler.handle("Unknown Error", "OOps, seems like something went wrong", err);
}
