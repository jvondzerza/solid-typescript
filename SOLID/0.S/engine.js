export class Engine {
    constructor(FUEL_MILEAGE) {
        this._status = false;
        this._FUEL_MILEAGE = FUEL_MILEAGE;
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
