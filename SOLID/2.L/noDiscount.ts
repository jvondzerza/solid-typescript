import {Discount} from "./discount";

export class NoDiscount implements Discount {

    apply(price : number) : number {
        return price;
    }

    showCalculation(price : number) : string {
        return "No discount";
    }

}