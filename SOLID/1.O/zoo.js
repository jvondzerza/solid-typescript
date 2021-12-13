"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Zoo = void 0;
class Zoo {
    constructor() {
        this._animals = new Array();
    }
    addAnimal(animal) {
        this._animals.push(animal);
    }
    get animals() {
        return this._animals;
    }
}
exports.Zoo = Zoo;
