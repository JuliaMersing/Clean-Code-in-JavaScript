class Person {
  constructor(firtName, lastName, age) {
    this.firtName = firtName;
    this.lastName = lastName;
    this.age = age;
    if (!this.autorize) {
      // Every object that is an instance of the person class or one of it subclasses should implement an autorised method
      throw new Error(
        "Person sublcass has no implemantation for the autorize method"
      );
    }
  }
  get type() {
    return this._type;
  }

  set type(value) {
    this._type = value;
  }
}

class Student extends Person {
  constructor(academicId, firstName, lastName, age) {
    super(firstName, lastName, age);
    this.academicId = academicId;
  }
  autorize(id) {
    return this.academicId == id; //This way every class is responsible for implementing the authorize method in its own unique way
  }
}

class Employee extends Person {
  constructor(employeeId, firstName, lastName, age) {
    super(firstName, lastName, age);
    this.employeeId = employeeId;
  }
  autorize(id) {
    return this.employeeId == id;
  }
}

let emp = new Employee(123456, "Maria", "García", 45);
