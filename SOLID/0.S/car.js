import { Engine } from "./engine";
import { Music } from "./music";
import { Tank } from "./tank";
export class Car {
    constructor() {
        this._engine = new Engine();
        this._tank = new Tank(100);
        this._music = new Music(0, 50);
        this._miles = 0;
    }
    get miles() {
        return this._miles;
    }
    get engine() {
        return this._engine;
    }
    get tank() {
        return this._tank;
    }
    get music() {
        return this._music;
    }
    drive() {
        if (this._engine.status === false || this._tank.fuel.quantity <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }
        this._tank.fuel.quantity -= 1;
        this._miles += this._engine.FUEL_MILEAGE;
    }
}
