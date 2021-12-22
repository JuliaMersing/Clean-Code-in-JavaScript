import { ConsoleLogHandler } from "./console-log-handler";
import { ErrorHandler, ErrorHandler } from "./error-handler";
import { ToastrHandler } from "./toastr-handler";

function configureErrorHandler() {
  let ErrorHandler = new ErrorHandler(new ToastrHandler());
  return ErrorHandler;
}

let ErrorHandler = configureErrorHandler();
try {
  throw new Error("Dummy Error");
} catch (err) {
  ErrorHandler.handle(
    "Unknown Error",
    "OOps, seems like something went wrong",
    err
  );
}
