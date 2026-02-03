import { CartAdapter } from "../cart/cart";

export type CheckoutSession = {
    id: string;
    cart: CartAdapter;
}

export interface CheckoutAdapter {
    create(cart: CartAdapter): Promise<CheckoutSession>;
}