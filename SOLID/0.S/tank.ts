import {Fuel} from "./fuel";

export class Tank {
    private _fuel: Fuel = new Fuel("Petrol", 0);
    private readonly MAXIMUM_FUEL_CAPACITY: number;

    constructor(MAXIMUM_FUEL_CAPACITY: number) {
        this.MAXIMUM_FUEL_CAPACITY = MAXIMUM_FUEL_CAPACITY;
    }

    addFuel(fuel : number) {
        this._fuel.quantity = Math.min(fuel + this._fuel.quantity, this.MAXIMUM_FUEL_CAPACITY);
    }

    get fuel(): Fuel {
        return this._fuel;
    }
}