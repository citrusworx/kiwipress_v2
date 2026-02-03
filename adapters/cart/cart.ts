import { Money } from "../product/product";

export interface CartAdapter {
    items: {
        productId: string;
        quantity: number;
    }[];
    total: Money;
}