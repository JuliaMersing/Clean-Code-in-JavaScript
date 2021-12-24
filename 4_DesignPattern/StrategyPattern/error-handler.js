export class ErrorHandler {
  constructor(handler) { 
    if (!handler || !handler.handle) {
      throw new Error("Provided handler is invalid");
    }
    this.handler = handler;
  }

  handle(errorTitle, errorBody, errorObject) {//This method is the common interface
    this.handler.handle(errorTitle, errorBody);
    //do something with errorObject
  }
}

