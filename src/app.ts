import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import "./app.scss";
import {Basket} from "./utils/Basket";

let routes: { [index: string]: HTMLElement }

const rootDiv = document.getElementById("app")!;

function setRoutes() {
    return {
        '/' : Home(),
        '/cart': Cart()
    };
}

function setView() {
    Basket.init();
    routes = setRoutes();

    rootDiv.innerHTML = "";

    rootDiv.prepend(Navbar());

    const mainElem = document.createElement("main");
    mainElem.appendChild(routes[window.location.pathname] || NotFound)
    rootDiv.append(mainElem);
    registerHyperlinks();
    Basket.init();
}

function registerHyperlinks() {
    document.querySelectorAll('[data-link]').forEach(elem => {
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