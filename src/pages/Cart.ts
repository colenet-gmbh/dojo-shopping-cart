import {Basket} from "../utils/Basket";
import BasketCard from "../components/BasketCard";
import {currencyFormatter} from "../utils/PriceUtils";

export default (): HTMLElement => {

    const elem: HTMLElement = document.createElement("div")!;
    elem.innerHTML = "<h1>Einkaufswagen</h1>"

    const products: HTMLElement = document.createElement("div");
    products.className = "cart-list";

    Basket.getItems().map(item => products.appendChild(BasketCard(item)));
    elem.append(products);

    const total: HTMLElement = document.createElement("h2");
    total.id = "total";
    total.textContent = `Total: ${currencyFormatter.format(Basket.totalPrice())}`;
    total.addEventListener("basket-updated", () => {
        console.log("updated");
        total.textContent = `Total: ${currencyFormatter.format(Basket.totalPrice())}`;
    });

    elem.appendChild(total);

    return  elem;
}