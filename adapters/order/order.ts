import { CartAdapter } from "../cart/cart";
import { Money } from "../product/product";

export interface OrderAdapter {
    id: string;
    items: CartAdapter["items"];
    status: "pending" | "paid" | "fulfilled" | "cancelled" | "refunded"
    total: Money;
}