"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VariableDiscount = void 0;
class VariableDiscount {
    constructor(value) {
        this._value = value;
        if (value <= 0) {
            throw new Error('You cannot create a variable discount with a negative value');
        }
    }
    apply(price) {
        return (price - (price * this._value / 100));
    }
    showCalculation(price) {
        return price + " € -  " + this._value + "%";
    }
}
exports.VariableDiscount = VariableDiscount;
