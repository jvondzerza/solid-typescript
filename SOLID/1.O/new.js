"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const animal_1 = require("./animal");
const zoo_1 = require("./zoo");
let target = document.querySelector('#target');
let zoo = new zoo_1.Zoo;
let cat = new animal_1.Animal("Cat", "Meow");
let dog = new animal_1.Animal("Dog", "Woof");
let parrot = new animal_1.Animal("Parrot", "Polly want deez nuts!");
let honeyBadger = new animal_1.Animal("Honey badger", "Piss off!");
zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(parrot);
zoo.addAnimal(honeyBadger);
zoo.animals.forEach((animal) => {
    target.innerHTML += (animal.type + ": " + animal.sound + "<br>");
});
