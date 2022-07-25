import {describe, it, expect, beforeEach} from "vitest";
import {Basket} from "../../src/utils/Basket";


describe("Basket", () => {
    const productName = "Banane";
    const secondProductName = "Kartoffeln";

    beforeEach(() => {
        Basket.init;
        Basket.contents = [];
    });

    it('should add product by name', function () {
        Basket.add(productName);
        expect(Basket.getItems()).to.be.lengthOf(1);
    });

    it('should update the quantity of an item in basket', function () {
        Basket.add(productName);
        Basket.add(productName);
        expect(Basket.getItems()).to.be.lengthOf(1);
        expect(Basket.find(productName).quantity).to.be.equal(2);
    });

    it('should increase the quantity of an item in basket', function () {
        Basket.add(productName);
        Basket.increase(productName, 5);
        expect(Basket.getItems()).to.be.lengthOf(1);
        expect(Basket.find(productName).quantity).to.be.equal(6);
    });

    it('should remove the item from basket', function () {
        Basket.add(productName);
        Basket.remove(productName);
        expect(Basket.getItems()).to.be.lengthOf(0);
    });

    it('should remove a quantity of an item in basket', function () {
        Basket.add(productName);
        Basket.increase(productName, 5);
        Basket.decrease(productName, 4);
        expect(Basket.find(productName).quantity).to.be.equal(2);
    })

    it('should get total quantity of items in basket', function () {
        Basket.add(productName);
        Basket.increase(productName, 5);
        Basket.add(secondProductName);
        expect(Basket.totalCount()).to.be.equal(7);
    });

    it('should get total price of items in basket', function () {
        Basket.add(productName);
        Basket.increase(productName, 5);
        Basket.add(secondProductName);
        expect(Basket.totalPrice()).to.be.equal(7.5);
    });

});