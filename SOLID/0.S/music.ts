export class Music {
    private _level : number;
    private _oldLevel : number;


    constructor(level: number, oldLevel: number) {
        this._level = level;
        this._oldLevel = oldLevel;
    }

    get level(): number {
        return this._level;
    }

    set level(value: number) {
        this._level = value;
        this._oldLevel = value;
    }

    turnOn() {
        this._level = this._oldLevel;
    }

    turnOff() {
        this._level = 0;
    }
}