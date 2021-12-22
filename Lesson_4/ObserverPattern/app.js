class Car {// This is the subject
  constructor() {
    this._currentSpeed = 0;//DOUBT: ¿Por qué nombrar esta variable con guión bajo?
    this.speedObservers = []; //Each property has his own observer, so has to have a different array
  }

  subscribeSpeedObserver(observer) {
    //An observer is anything that has the specific "notify" function inside.
    if (observer.notify) {
      this.speedObservers.push(observer);
    } else {
      throw new Error("Invalid observer. Notify implementation missing");
    }
  }

  unsuscribeSpeedObserver(observer) {
    let index = this.speedObservers.indexOf(observer);
    if (index > 0) {
      this.speedObservers.splice(index, 0);
    }
  }

  notifySpeedObserver(newVal, oldVal) {//Use it every time the speed changes. That is why we use the setter, that check the speed and execute this method whenever there is a change.
    for (let observer of this.speedObservers) {
      observer.notify(newVal, oldVal);
    }
  }
 //The getter and the setter are accessors. DOBUT: ¿Cómo funcionan exactmente?
  get currentSpeed() {
    return this._currentSpeed;
  }

  set currentSpeed(value) {//DOUBT: ¿Esto se está ejecutando todo el tiempo? Pq no veo su llamada...
    let oldVal = this._currentSpeed;
    this._currentSpeed = value;
    if (this._currentSpeed != oldVal) {
      this.notifySpeedObserver(this._currentSpeed, oldVal);
    }
  }
}

class CurrentSpeedConsoleObserver {//It is an observer. Notice that it has a notify function
  notify(newVal, oldVal) {
    console.log(`Current Speed changed from ${oldVal} to ${newVal}`);
  }
}

class DOMCarSpeedObserver {//It is an observer. Notice that it has a notify function
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

//Modifying the speed. Example 1:
/*car.currentSpeed += 10;//DOUBT: ¿Por que´no escribirlo así: car._currentSpeed = 10 ?
car.currentSpeed += 10;
car.currentSpeed += 10;
car.currentSpeed += 10;
car.currentSpeed += 10;*/

//Modifying the speed. Example 2:
let interval = setInterval(() => {
    car.currentSpeed += 10;
  }, 2000);

setTimeout(() => {
  clearInterval(interval)
}, 10000);
