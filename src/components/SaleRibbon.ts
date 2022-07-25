export default (text: string = "Sale"): HTMLElement => {
    const elem = document.createElement("div");
    elem.className = "ribbon";
    const span = document.createElement("span");
    span.textContent = text;
    elem.appendChild(span);
    return elem;
}
