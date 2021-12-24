//It will print the error in the console window
export class ConsoleLogHandler {
  handle(errorTitle, errorBody) {
    console.error(errorTitle);
    console.log(errorBody);
  }
}
