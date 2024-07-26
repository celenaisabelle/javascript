// Task 1
let dairy = [
    "cheese",
    "sour cream",
    "milk",
    "yogurt",
    "ice cream",
    "milkshake",
  ];
  
  function logDairy() {
    for (let prop of dairy) {
      console.log(prop);
    }
  }
  logDairy();
  // Task 2
  
  const animal = {
    canJump: true,
  };
  
  const bird = Object.create(animal);
  
  bird.canFly = true;
  
  bird.hasFeathers = true;
  function birdCan() {
      for (let prop of Object.keys(bird)) {
         console.log(prop, ":", bird[prop]);
      }
  }
  birdCan();
  
  // Task 3
  
  function animalCan() {
      for (let key in bird) {
          console.log(key, ":", bird[key]);
      }
  }
   animalCan();