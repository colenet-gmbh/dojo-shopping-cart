import {describe, it, expect} from "vitest";
import {LocalStorage} from "../../src/utils/LocalStorage";
import {BasketContent} from "../../src/types/BasketContent";


describe("LocalStorage", () => {
    const testKey = "test-key";
    const content: BasketContent[] =
        [{
            "name": "Banane",
            quantity: 5
        }];

    it('should save and retrieve basket content', function () {
        LocalStorage.save(testKey, content);
        expect(LocalStorage.retrieve(testKey)).toEqual(JSON.stringify(content));
    });

});