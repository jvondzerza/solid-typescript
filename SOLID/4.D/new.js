"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var oven_1 = require("./oven");
var Restaurant = /** @class */ (function () {
    function Restaurant(name, cooker) {
        this._name = name;
        this._cooker = cooker;
    }
    Restaurant.prototype.Cook = function (item) {
        this._cooker.turnOn();
        this._cooker.cook(item);
        this._cooker.turnOff();
    };
    return Restaurant;
}());
var bakery = new Restaurant("Bakery", new oven_1.Oven);
bakery.Cook("cookies");
//Now if we want to add a new restaurant with an ELECTRIC cooker, we are gonna be in a hot mess ...
/*
let bakery = new Restaurant("Bakery", new Oven());
bakery.Cook("cookies");

let crepery = new Restaurant("Crepery", new Stove());
crepery.Cook("crepes");
 */
