export class Tank {
    constructor(fuel, MAXIMUM_FUEL_CAPACITY) {
        this._fuel = fuel;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }
    addFuel(fuel) {
        this._fuel.quantity = Math.min(fuel + this._fuel.quantity, this.MAXIMUM_FUEL_CAPACITY);
    }
    get fuel() {
        return this._fuel;
    }
}
