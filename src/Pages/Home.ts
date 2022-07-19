import items from "../items.json"

const currencyFormatter: Intl.NumberFormat = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })

const elem: HTMLElement = document.createElement("div");
elem.innerHTML = /*html*/`
    <h1>Produkte</h1>
    <div id="items">${items.map(item => `<h3>${item.name}</h3><small>${currencyFormatter.format(item.price)}</small>`).join("")}</div>
`;

export default elem;