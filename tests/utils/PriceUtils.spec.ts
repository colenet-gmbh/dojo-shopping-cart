import {describe, it, expect } from "vitest";
import {formattedPrice, getPrice} from "../../src/utils/PriceUtils";


describe("PriceUtils", () => {
    const productA =
    {
        "name": "Banane",
        "price": 1.20,
        "discount": 0.15,
        "currency": "EUR",
        "unit": "Stück",
        "stock": 78,
        "img": "https://www.kochschule.de/sites/default/files/images/kochwissen/440/banane.jpg"

    };
    const productB =
    {
        "name": "Kartoffeln",
        "price": 1.20,
        "currency": "EUR",
        "unit": "Beutel",
        "stock": 78,
        "img": "https://amp.fitforfun.de/files/images/201909/1/kartoffeln-auf-einem-tisch,379854_3x2_xl.jpg"

    };

    it('should get the discount price of a product', function () {
        expect(getPrice(productA)).toEqual(1.05);
        expect(getPrice(productB)).toEqual(1.20);
    });

    it('should get the formatted price of a product', function () {
        expect(formattedPrice(productA)).to.be.contains("1,05");
        expect(formattedPrice(productA)).to.be.contains("€");
        expect(formattedPrice(productB)).to.be.contains("1,20");
        expect(formattedPrice(productB)).to.be.contains("€");
    });
});