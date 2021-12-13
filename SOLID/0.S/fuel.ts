export class Fuel {
    private _type: string;
    private _quantity: number;

    constructor(type: string, quantity: number) {
        this._type = type;
        this._quantity = quantity;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }
}