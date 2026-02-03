import { MediaAdapter } from "../media/media";

export type Currency = string & {__currencyBrand: never};

export type Money = {
    currency: Currency;
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