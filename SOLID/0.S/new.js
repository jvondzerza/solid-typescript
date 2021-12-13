import { Fuel } from "./fuel";
import { Tank } from "./tank";
import { Engine } from "./engine";
import { Music } from "./music";
import { Car } from "./car";
const musicToggleElement = document.querySelector('#music-toggle');
const musicSliderElement = document.querySelector('#music-slider');
const engineToggleElement = document.querySelector('#engine-toggle');
const addFuelForm = document.querySelector('#add-fuel-form');
const addFuelInput = document.querySelector('#add-fuel-input');
const fuelLevelElement = document.querySelector('#fuel-level');
const fuelTypeElement = document.querySelector('#fuel-type');
const milesElement = document.querySelector('#miles-value');
const audioElement = document.querySelector('#car-music');
let fuel = new Fuel("Petrol", 0);
let tank = new Tank(fuel, 100);
let engine = new Engine(10);
let music = new Music(0, 50);
let car = new Car(engine, tank, music, 0);
if (fuel.type === "Electric") {
    fuelTypeElement.innerText = 'kWh';
}
musicToggleElement.addEventListener('click', () => {
    if (car.music.level === 0) {
        car.music.turnOn();
        musicSliderElement.value = car.music.level.toString();
        musicToggleElement.innerText = 'Turn music off';
        return;
    }
    musicToggleElement.innerText = 'Turn music on';
    car.music.turnOff();
});
//I use input instead of change, because then the value changes when I move the mouse, not only on release
musicSliderElement.addEventListener('input', (event) => {
    let target = (event.target);
    car.music.level = target.value;
    audioElement.volume = car.music.level / 100;
    //@todo when you are repeating the same text over and over again maybe we should have made some constants for it? Can you do improve on this?
    musicToggleElement.innerText = car.music.level ? 'Turn music off' : 'Turn music on';
});
engineToggleElement.addEventListener('click', () => {
    if (car.engine.status) {
        car.engine.turnOff();
        engineToggleElement.innerText = 'Turn engine on';
        return;
    }
    engineToggleElement.innerText = 'Turn engine off';
    car.engine.turnOn();
});
addFuelForm.addEventListener('submit', (event) => {
    event.preventDefault();
    car.tank.addFuel(Number(addFuelInput.value));
    fuelLevelElement.innerText = car.tank.fuel.quantity.toString();
});
setInterval(() => {
    car.drive();
    //while it looks like both lines below are the same there is a subtle difference (you could put breakpoints here to see the difference):
    // this <cast> will only tell TypeScript that the value is a string, but the actual variable in JS is not changed in any way: it is in reality still a number
    milesElement.innerText = (car.miles);
    // This .toString() will actually convert the value in JavaScript from an integer to a string
    fuelLevelElement.innerText = car.tank.fuel.quantity.toString();
    if (car.music.level === 0) {
        audioElement.pause();
    }
    else {
        audioElement.play();
    }
}, 1000);
