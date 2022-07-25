import {Product} from "../types/Product";
import ProductCount from "./ProductCount";
import {Basket} from "../utils/Basket";
import {productLeftOverStock} from "../utils/ProductUtils";

function setSoldOut(item: Product, addButton: HTMLButtonElement) {
    if (productLeftOverStock(item.name) < 1) {
        addButton.textContent = "ausverkauft";
        addButton.classList.add("sold-out")
    }
}

export default (item: Product): HTMLElement => {
    const configBox = document.createElement("div");
    configBox.className = "add-box";
    let counter = ProductCount(item.name);
    configBox.appendChild(counter);
    const addButton = document.createElement("button");
    addButton.textContent= "add";
    addButton.className= "button";
    addButton.setAttribute('sku', item.name);
    setSoldOut(item, addButton);
    addButton.addEventListener("click", () => {
        const elems = configBox.getElementsByClassName("count");
        const count = elems[0].getAttribute("data-count");
        Basket.add(item.name, Number(count));
        const baksetEvent = new Event("add-to-basket");
        counter.dispatchEvent(baksetEvent);
        setSoldOut(item, addButton);

    });

    configBox.appendChild(addButton);

    return configBox;

}
