export class Fuel {
    constructor(type, quantity) {
        this._type = type;
        this._quantity = quantity;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get quantity() {
        return this._quantity;
    }
    set quantity(value) {
        this._quantity = value;
    }
}
