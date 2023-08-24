const car = {
  isOn: false,
  speed: 0,
  
  turnOn: function() {
    if (this.isOn) {
      console.log("This car is already turned on.");
    } else {
      this.isOn = true;
      console.log("Car is now on. Speed: " + this.speed + ".");
    }
  },
  
  turnOff: function() {
    if (!this.isOn) {
      console.log("This car is already turned off.");
    } else {
      this.isOn = false;
      this.speed = 0;
      console.log("Car is now off. Speed: " + this.speed + ".");
    }
  },
  
  accelerate: function() {
    if (!this.isOn) {
      console.log("Cannot accelerate a turned off car.");
    } else {
      this.speed += 10;
      console.log("Car is on. Speed: " + this.speed + ".");
    }
  },
  
  decelerate: function() {
    if (!this.isOn) {
      console.log("Cannot decelerate a turned off car.");
    } else {
      if (this.speed >= 10) {
        this.speed -= 10;
      } else {
        this.speed = 0;
      }
      console.log("Car is on. Speed: " + this.speed + ".");
    }
  }
};

car.turnOff();
car.turnOn();
car.turnOn();
car.accelerate();
car.accelerate();
car.decelerate();
car.turnOff();
car.accelerate();
car.decelerate();