export class Animal {
    private readonly _type: string;
    private readonly _sound: string;

    constructor(type: string, sound: string) {
        this._type = type;
        this._sound = sound;
    }

    get type(): string {
        return this._type;
    }

    get sound(): string {
        return this._sound;
    }
}