export default (): HTMLElement => {
    const elem = document.createElement("nav");
    elem.innerHTML = `<a href="/" data-link="/"><h3>COLENET SHOP</h3></a><a href="/cart" data-link="/cart">Einkaufswagen (0)</a>`;

    return elem;
}