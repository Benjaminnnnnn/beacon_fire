// ES5 syntax
const Vehicle = function (engine, speed) {
  this.engine = engine;
  this.speed = speed;
};

Vehicle.prototype.info = function () {
  console.log(`Vehicle engine: ${this.engine}, speed: ${this.speed}`);
};

const Car = function (engine, speed, wheels, brake) {
  Vehicle.call(this, engine, speed);
  this.wheels = wheels;
  this.brake = brake;
};

// extends from the Vehicle class
Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Vehicle;

// add more methods
Car.prototype.honk = function () {
  console.log("honk!");
};

Car.isTesla = function (car) {
  return car.brake;
};

vehicle = new Vehicle("e", 20);
vehicle.info();

car = new Car("e", 10, 4, true);
car.info();
car.honk();
console.log(Car.isTesla(car));
