import {describe, it, expect} from "vitest";
import {formattedPrice, getPrice} from "../../src/utils/PriceUtils";
import {getProduct, productLeftOverStock} from "../../src/utils/ProductUtils";


describe("ProductUtils", () => {
    const productName = "Banane";
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
    it('should get a product by name', function () {
        expect(getProduct(productName)).toEqual(productA);
    });

    it("should return the stock", function () {
        expect(productLeftOverStock(productName)).toEqual(78);
    });
});