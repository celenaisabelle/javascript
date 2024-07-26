// Task 1: Code a Person class
class Person {
    constructor(name = "Tom", age = 20, energy = 100) {
        this.name = name;
        this.age = age;
        this.energy = energy;
    }
    sleep() {
        this.energy += 10;
    }
    doSomethingFun() {
        if (this.energy > 0) {
            this.energy -= 10;
        }
        else if (this.energy == 0) {
            this.sleep();
        }
    }
}

// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) { 
        //The order matters when declaring constructors. 
        //See intern and manager.
        super(name, age, energy)
        this.xp = xp;
        this.hourlyWage = hourlyWage;
    }
    goToWork() {
        this.xp += 10;
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    var newIntern = new Worker("Bob", 21, 110, 0, 10);
    newIntern.goToWork();
    return newIntern;
}
console.log(intern());

// Task 4: Code a manager object, methods
function manager() {
    var newManager = new Worker("Alice", 30, 120, 100, 30);
    newManager.doSomethingFun();
    return newManager;
}
console.log(manager());