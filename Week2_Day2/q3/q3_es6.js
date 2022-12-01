// ES6 syntax
class Vehicle {
  constructor(engine, speed) {
    this.engine = engine;
    this.speed = speed;
  }

  info() {
    console.log(`Vehicle engine: ${this.engine}, speed: ${this.speed}`);
  }
}

class Car extends Vehicle {
  constructor(engine, speed, wheels, brake) {
    super(engine, speed);
    this.wheels = wheels;
    this.brake = brake;
  }

  honk() {
    console.log("honk!");
  }

  static isTesla(car) {
    return car.brake;
  }
}

vehicle = new Vehicle("e", 20);
vehicle.info();

car = new Car("e", 10, 4, true);
car.info();
car.honk();
console.log(Car.isTesla(car));
