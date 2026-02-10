import { CartAdapter } from "../../../adapters/cart/cart";
import { Money } from "../../../adapters/product/product";

class Cart  {
    private items = {
        
    }; 
    private total: Money = {
        amount: 0,
        currency: "USD"
    };
    private cartId = "";

    updateCart(cart: CartAdapter) {
        this.items = cart.items[0];
        this.cartId = cart.cartId; // random gen UUID
        this.total = cart.total;
    }

    addItemToCart(item: CartAdapter["items"][0]) {} // TODO: Fix this to add ItemAdapter instead of CartAdapter["items"][0]

    updateTotal(total: Money, tax: Money) {
        this.total = {
            amount: (total.amount * tax.amount) + total.amount,
            currency: total.currency
        };
    }

// TODO: implement CartAdapter interface and add methods to add/remove items and calculate total price
}