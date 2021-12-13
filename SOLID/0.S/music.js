export class Music {
    constructor(level, oldLevel) {
        this._level = level;
        this._oldLevel = oldLevel;
    }
    get level() {
        return this._level;
    }
    set level(value) {
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
