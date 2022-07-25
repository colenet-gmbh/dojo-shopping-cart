import {Basket} from "../utils/Basket";
import {productLeftOverStock} from "../utils/ProductUtils";

export default (name: string, value: number = 1, isInCheckout: boolean = false): HTMLElement => {
    const elem = document.createElement("div");
    elem.className = "counter";

    let minus = document.createElement("div");
    minus.className = "counter-btn";
    minus.textContent = "-";
    if (value === 1) {
        minus.classList.add("disabled");
    }
    minus.addEventListener("click", () => {
        if (value !== 1) {
            value--;
            count.textContent = `${value}`;
            count.setAttribute("data-count", String(value));
            if (isInCheckout) {
                Basket.decrease(name);
            }
            add.classList.remove("disabled");
        } else {
            minus.classList.add("disabled");
        }

    });
    elem.appendChild(minus);

    let count = document.createElement("div");
    count.className = "count";
    count.textContent = String(value);
    count.setAttribute("data-count", String(value));

    elem.appendChild(count);

    let add = document.createElement("div");
    add.className = "counter-btn";
    add.textContent = "+";
    add.setAttribute("data-count", String(value));
    add.addEventListener("click", () => {
        if (value < productLeftOverStock(name, isInCheckout)) {
            value++;
            count.textContent = String(value);
            count.setAttribute("data-count", String(value));
            if (isInCheckout) {
                Basket.increase(name);
            }
            if (value === productLeftOverStock(name, isInCheckout)) {
                add.classList.add("disabled");
            }
            minus.classList.remove("disabled");
        } else {
            add.classList.add("disabled");
        }

    });

    elem.appendChild(add);

    // Reset after add to basket
    elem.addEventListener("add-to-basket", () => {
        const stock = productLeftOverStock(name);
        if (stock === 1) {
            value = 1;
            add.classList.add("disabled");
        } else {
            if (stock < 1) {
                value = 0
            } else {
                value = 1
            }
        }

        minus.classList.add("disabled");


        count.textContent = String(value);
        count.setAttribute("data-count", String(value));
    });



    return elem;
}


