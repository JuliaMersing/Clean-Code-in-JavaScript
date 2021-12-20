class Shape {
  constructor(name) {
    this.name = name;
  }
}

class Circle extends Shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Line extends Shape {
  constructor(name, pointA, pointb) {
    super(name);
    this.pointA = pointA;
    this.pointB = pointB;
  }
}

function ShapeStats(shapes) {
  console.log("Shape stats: ");
  for (let shape of shapes) {
    if (shape.calculateArea) {
      console.log(`${shape.name} has area of ${shape.calculateArea()}cm^2`);
    }
  }
}

let shape = [
  new Cirlce("Circle A", 2),
  new Cirlce("Circle B", 4),
  new Cirlce("Circle C", 5),
];
ShapeStats(shapes);
