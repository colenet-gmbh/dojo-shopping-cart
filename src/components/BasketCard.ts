import {formattedPrice} from "../utils/PriceUtils";
import ButtonsBasketComponent from "./ButtonsBasketComponent";
import {BasketContent} from "../types/BasketContent";
import {getProduct} from "../utils/ProductUtils";

export default (item: BasketContent): HTMLElement => {
    const elem = document.createElement("div");
    elem.className = "basket-box";
    elem.setAttribute("data-basket-sku", item.name);

    const leftContainer = document.createElement("div");
    leftContainer.className = "left";

    //product
    const product = getProduct(item.name);

    const img = document.createElement("img");
    img.src = product?.img as string;
    leftContainer.appendChild(img);

    elem.appendChild(leftContainer);

    const rightContainer = document.createElement("div");
    rightContainer.className = "right";

    const topRightContainer = document.createElement("div");

    const titleContainer = document.createElement("div");
    titleContainer.className = "title";

    const title = document.createElement("h3");
    title.textContent= `${item.name}`;
    titleContainer.appendChild(title);

    const price = document.createElement("h3");
    price.className = "price";
    price.textContent= `${formattedPrice(product)}`;
    titleContainer.appendChild(price);

    topRightContainer.appendChild(titleContainer);

    const subText = document.createElement("div");
    subText.className = "price-sub-text";
    subText.textContent=  `pro ${product?.unit}`;
    topRightContainer.appendChild(subText);

    rightContainer.appendChild(topRightContainer);

    rightContainer.appendChild(ButtonsBasketComponent(item));

    elem.appendChild(rightContainer)

    return elem;

}


