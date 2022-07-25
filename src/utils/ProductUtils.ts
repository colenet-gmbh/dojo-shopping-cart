import items from "../items.json"
import {Product} from "../types/Product";
import {Basket} from "./Basket";

export function getProduct(name: string): Product|null {
    const match: Product[] = items.filter((item: Product) => {
        return item.name === name;
    });
    if (match && match[0])
        return match[0];
    return null;
}


export function productLeftOverStock(name: string, isInCheckout: boolean = false): number {
    const product = getProduct(name);
    if(product !== null){
        const inBasketCount = isInCheckout? 0: Basket.getItemCountForProduct(name);
        return product.stock - inBasketCount;
    }
    return 0;
}


