import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Cart from "./Pages/Cart";
import Navbar from "./Components/Navbar";

import "./app.css";

const routes: { [index: string]: HTMLElement } = {
    '/' : Home,
    '/cart': Cart
};

const rootDiv = document.getElementById("app")!;

function setView() {
    rootDiv.innerHTML = "";

    rootDiv.prepend(Navbar());

    const mainElem = document.createElement("main");
    mainElem.appendChild(routes[window.location.pathname] || NotFound)
    rootDiv.append(mainElem);
    registerHyperlinks();
}

function registerHyperlinks() {
    document.querySelectorAll('a[data-link]').forEach(elem => {
        elem.addEventListener("click", (ev) => {
            ev.preventDefault();
            // @ts-ignore
            const pathName = ev.target.dataset["link"] || "/";
            window.history.pushState({}, pathName, window.location.origin + pathName);
            setView();
        });
    });
}

setView();


window.onpopstate = () => setView();