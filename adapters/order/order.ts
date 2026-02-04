import { CartAdapter } from "../cart/cart";
import { Money } from "../product/product";

export interface OrderAdapter {
    id: string;
    items: CartAdapter["items"];
    status: "pending" | "paid" | "fulfilled" | "cancelled" | "refunded"
    total: Money;
}

export interface FullFilmentAdapter {
    orderId: string;
    carrier?: string;
    trackingNumber: string;
    status: "pending" | "picked" | "shipped" | "delayed" | "delivered" | "returned";
}