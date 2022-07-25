export default (): HTMLElement => {
    const elem = document.createElement("nav");
    elem.innerHTML = `<a href="/" data-link="/"><h3>COLENET SHOP</h3></a><div data-link="/cart" data-count="0" id="basket" class="cart"><img data-link="/cart" src="/assets/cart-shopping-solid.svg" alt="cart"/></div>`;

    return elem;
}