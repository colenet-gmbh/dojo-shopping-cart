import {Product} from "../types/Product";

export const currencyFormatter: Intl.NumberFormat = new Intl.NumberFormat('de-DE', {
    style: 'currency',
    currency: 'EUR'
});

export function formattedPrice(product: Product | null): string {
    return currencyFormatter.format(getPrice(product));
}

export function getPrice(product: Product | null): number {
    if (product !== null) {
        if (product.discount !== undefined) {
            return Math.round(product.price *100 - product.discount *100 | 0) /100;
        }
        return product.price;
    }
    return 0
}



