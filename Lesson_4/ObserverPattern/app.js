class Car { //Subject
  constructor() {
    this._currentSpeed = 0;
    this.speedObserver = []; //Each property has his own observer, so had to have differents array
  }

  subscribeSpeedObserver(observer) {
    //An observer is anything that has specific function inside a notify
    if (observer.notify) {
      this.speedObserver.push(observer);
    } else {
      throw new Error("Invalid observer. Notify implementation missing");
    }
  }

  unsuscribeSpeedObserver(observer) {
    let index = this.speedObserver.indexOf(observer);
    if (index > 0) {
      this.speedObserver.splice(index, 0);
    }
  }

  notifySpeedObserver(newVal, oldVal) {
    for (let observer of this.speedObserver) {
      observer.notify(newVal, oldVal);
    }
  }

  get currentSpeed() {
    return this._currentSpeed;
  }

  set currentSpeed(value) {
    let oldVal = this._currentSpeed;
    this._currentSpeed = value;
    if (this._currentSpeed != oldVal) {
      this.notifySpeedObserver(this._currentSpeed, oldVal);
    }
  }
}

class CurrentSpeedConsoleObserver {
  notify(newVal, oldVal) {
    console.log(`Current Speed changed from ${oldVal} to ${newVal}`);
  }
}

class DOMCarSpeedObserver {
  constructor(selector) {
    this.textField = document.querySelector(selector);
  }
  notify(newVal, oldVal) {
    this.textField.textContent = newVal;
  }
}

let car = new Car();
let consoleObserver = new CurrentSpeedConsoleObserver();
let domObserver = new DOMCarSpeedObserver("#speedometer");
car.subscribeSpeedObserver(consoleObserver);
car.currentSpeed += 10;
car.currentSpeed += 10;
car.currentSpeed += 10;
car.currentSpeed += 10;
car.currentSpeed += 10;
