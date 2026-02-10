import { Money } from "../product/product";

export interface CartAdapter {
    cartId: string;
    items: {
        itemId: string;
        itemName: string;
        itemImage: string;
        itemPrice: Money;
        quantity: number;
    }[];
    tax: Money;
    total: Money;
}

export type CartItem = Readonly<{ // Does this mean this type cannot be updated? If so, how do we update the quantity of an item in the cart?
    itemId: string;
    quantity: number;
    price: Money;
    image: string;
    name: string;
}>;

export type Cart = {
    cartId: string;
    items: CartItem[];
    tax: Money;
    total: Money;
}