import {BasketContent} from "../types/BasketContent";

export const LocalStorage = {
    save(key: string, content: BasketContent[]): void {
        const parsedContent = JSON.stringify(content);
        window.localStorage.setItem(key, parsedContent);
    },

    retrieve(key: string): string | null {
        return window.localStorage.getItem(key);
    }
}