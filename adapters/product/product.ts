import { MediaAdapter } from "../media/media";

export type Money = {
    currency: string;
    amount: number;
}

export interface ProductAdapter {
    id: string;
    sku?: string;
    title: string;
    description: string;
    specification: string;
    price: Money;
    images: MediaAdapter[];
    metadata: Record<string, unknown>;
}

// Demo Money instance

const moneyObj: Money = {
    currency: "USD",
    amount: 236200
}

console.log(`$${moneyObj.amount}`);