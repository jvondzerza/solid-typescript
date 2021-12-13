export class Engine {
    private _status: boolean = false;
    private readonly _FUEL_MILEAGE: number = 10;

    get status(): boolean {
        return this._status;
    }

    turnOn() {
        this._status = true;
    }

    turnOff() {
        this._status = false;
    }

    get FUEL_MILEAGE(): number {
        return this._FUEL_MILEAGE;
    }
}