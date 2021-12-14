import {Cooker} from "./cooker";
import {Oven} from "./oven";

class Restaurant {
    private _name : string;
    private _cooker : Cooker;

    constructor(name: string, cooker: Cooker) {
        this._name = name;
        this._cooker = cooker;
    }

    public Cook(item : string) {
        this._cooker.turnOn();
        this._cooker.cook(item);
        this._cooker.turnOff();
    }
}

let bakery = new Restaurant("Bakery", new Oven);
bakery.Cook("cookies");

//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
