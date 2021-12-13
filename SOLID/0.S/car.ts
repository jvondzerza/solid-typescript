import {Engine} from "./engine";
import {Music} from "./music";
import {Tank} from "./tank";

export class Car {
    private readonly _engine: Engine;
    private readonly _tank: Tank;
    private readonly _music: Music;
    private _miles : number;


    constructor(engine: Engine, tank: Tank, music: Music, miles: number) {
        this._engine = engine;
        this._tank = tank;
        this._music = music;
        this._miles = miles;
    }

    get miles(): number {
        return this._miles;
    }

    get engine(): Engine {
        return this._engine;
    }

    get tank(): Tank {
        return this._tank;
    }

    get music(): Music {
        return this._music;
    }

    drive() {
        if(this._engine.status === false || this._tank.fuel.quantity <= 0) {
            //what I am doing here is a good principle called "failing early"
            // If you have some conditions you need to check, that will exclude most of the code in your function check that first
            // This prevents your "happy path" of code to be deeply indented.
            return;
        }

        this._tank.fuel.quantity -= 1;
        this._miles += this._engine.FUEL_MILEAGE;
    }
}