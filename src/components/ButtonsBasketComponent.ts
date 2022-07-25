import ProductCount from "./ProductCount";
import {Basket} from "../utils/Basket";
import {BasketContent} from "../types/BasketContent";

export default (item: BasketContent): HTMLElement => {
    const addBox = document.createElement("div");
    addBox.className = "config-box";
    addBox.appendChild(ProductCount(item.name, item.quantity, true));
    const deleteButton = document.createElement("img");
    deleteButton.className= "delete";
    deleteButton.src= "/assets/trash-can-solid.svg";
    deleteButton.setAttribute('sku', item.name);
    deleteButton.addEventListener("click", () => {
        Basket.remove(item.name);
        document.querySelectorAll(`[data-basket-sku="${item.name}"]`)[0].remove();
    });
    addBox.appendChild(deleteButton);

    return addBox;

}
