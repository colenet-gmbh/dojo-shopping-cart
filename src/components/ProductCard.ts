import SaleRibbon from "./SaleRibbon";
import {Product} from "../types/Product";
import {currencyFormatter, formattedPrice} from "../utils/PriceUtils";
import BasketComponent from "./AddToBasketComponent";

export default (item: Product): HTMLElement => {
    const elem = document.createElement("div");
    elem.className = "product-box"

    const title = document.createElement("h3");
    title.textContent= `${item.name}`;
    elem.appendChild(title);

    const img = document.createElement("img");
    img.src = item.img;
    elem.appendChild(img);

    const priceWrapper = document.createElement("div");
    priceWrapper.className = "price-wrapper";

    const price = document.createElement("div");
    price.className = "price";
    price.textContent= `${currencyFormatter.format(item.price)}`;

    if(item.discount !== undefined && item.discount !== 0){
        elem.appendChild(SaleRibbon());
        price.classList.add("price-discount");

        const newPrice = document.createElement("div");
        newPrice.className = "new-price";
        newPrice.textContent= `${formattedPrice(item)}`;
        priceWrapper.appendChild(newPrice);
    }

    priceWrapper.appendChild(price);

    const priceSubText = document.createElement("div");
    priceSubText.className = "price-sub-text";
    priceSubText.textContent= `pro ${item.unit}`;
    priceWrapper.appendChild(priceSubText);

    elem.appendChild(priceWrapper);

    elem.appendChild(BasketComponent(item));

    return elem;

}


