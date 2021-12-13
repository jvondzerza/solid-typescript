export class Engine {
    constructor() {
        this._status = false;
        this._FUEL_MILEAGE = 10;
    }
    get status() {
        return this._status;
    }
    turnOn() {
        this._status = true;
    }
    turnOff() {
        this._status = false;
    }
    get FUEL_MILEAGE() {
        return this._FUEL_MILEAGE;
    }
}
