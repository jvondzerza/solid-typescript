import {Fuel} from "./fuel";

export class Tank {
    private readonly _fuel: Fuel;
    private readonly MAXIMUM_FUEL_CAPACITY: number;

    constructor(fuel: Fuel, MAXIMUM_FUEL_CAPACITY: number) {
        this._fuel = fuel;
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    addFuel(fuel : number) {
        this._fuel.quantity = Math.min(fuel + this._fuel.quantity, this.MAXIMUM_FUEL_CAPACITY);
    }

    get fuel(): Fuel {
        return this._fuel;
    }
}