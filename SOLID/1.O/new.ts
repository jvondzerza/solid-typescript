import {Animal} from "./animal";
import {Zoo} from "./zoo";
let target = <HTMLElement>document.querySelector('#target')

let zoo = new Zoo;
let cat = new Animal("Cat", "Meow");
let dog = new Animal("Dog", "Woof");
let parrot = new Animal("Parrot", "Polly want deez nuts!");
let honeyBadger = new Animal("Honey badger", "Piss off!")
zoo.addAnimal(cat);
zoo.addAnimal(dog);
zoo.addAnimal(parrot);
zoo.addAnimal(honeyBadger);

zoo.animals.forEach((animal) => {
    target.innerHTML += (animal.type + ": " + animal.sound + "<br>");
});