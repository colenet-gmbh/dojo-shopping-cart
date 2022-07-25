import items from "../items.json"
import ProductCard from "../components/ProductCard";


export default (): HTMLElement => {
    const elem = document.createElement("div");

    elem.innerHTML = /*html*/`
    <h1>Produkte</h1>`;
    const products: HTMLElement = document.createElement("div");
    products.className = "products";

    items.map(item => products.appendChild(ProductCard(item)));
    elem.append(products);


    return elem;
}

