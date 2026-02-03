import { Money } from "../product/product"

export type PaymentResult = {
    id: string;
    status: "Denied" | "Accepted" | "Error";
}

export interface PaymentAdapter {
    charge(amount: Money, source: unknown): Promise<PaymentResult>
}