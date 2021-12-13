"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShoppingBasket = void 0;
class ShoppingBasket {
    constructor() {
        //this array only accepts Product objects, nothing else
        this._products = [];
    }
    get products() {
        return this._products;
    }
    addProduct(product) {
        this._products.push(product);
    }
}
exports.ShoppingBasket = ShoppingBasket;
