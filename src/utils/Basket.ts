import {BasketContent} from "../types/BasketContent";
import {LocalStorage} from "./LocalStorage";
import {getProduct} from "./ProductUtils";
import {getPrice} from "./PriceUtils";

export const Basket = {
    key: "basket_12345",
    contents: <BasketContent[]>[],
    init() {
        const contents = LocalStorage.retrieve(this.key);
        if (contents) {
            this.contents = JSON.parse(contents);
        }
        this.setBasketCount();
    },

    getItems(): BasketContent[] {
        this.init();
        return this.contents;
    },

    add(item: string, quantity: number = 1): void {
        if (this.find(item)) {
            // is already there => increase
            this.increase(item, quantity);
        } else {
            this.contents.push({
                name: item,
                quantity: quantity
            });
            this.sync();
        }
    },
    increase(name: string, quantity: number = 1): void {
        this.contents.map((item: BasketContent) => {
            if (item.name === name)
                item.quantity = item.quantity + quantity;
            return item;
        });
        this.sync();
    },
    remove(name: string): void{
        this.contents = this.contents.filter((item: BasketContent)=>{
            return item.name !== name;
        });
        this.sync()
    },
    decrease(name: string, quantity: number = 1): void {
        this.contents.map((item: BasketContent) => {
            if (item.name === name){
                if(item.quantity === 1){
                    this.remove(name)
                } else {
                    item.quantity = item.quantity - quantity;
                }

            }
            return item;
        });
        this.sync();
    },
    sync() {
        LocalStorage.save(this.key, this.contents);
        this.setBasketCount();
        this.setTotalText();
    },
    find(name: string): BasketContent | null {
        let match = this.contents.filter((item: BasketContent) => {
            return item.name === name;
        });
        if (match && match[0])
            return match[0];
        return null
    },
    totalCount(): number {
        let total = 0;
        for (const product of this.contents) {
            total = total + product.quantity;
        }
        return total
    },
    totalPrice(): number {
        let total = 0;
        for (const c of this.contents) {
            const price = getPrice(getProduct(c.name));
            total = total + (Number(price) * c.quantity);
        }
        return Math.round(total *100) /100;
    },
    setBasketCount(): void {
        const element = document.getElementById("basket");
        element?.setAttribute("data-count", String(this.totalCount()));
    },
    setTotalText() {
        const elem= document.getElementById("total")
        if(elem !== undefined &&  elem !== null){
            elem.dispatchEvent(new Event("basket-updated"));
        }
    },
    getItemCountForProduct(name: string): number {
        const item = this.find(name);
        return item ? item.quantity : 0;
    }
};