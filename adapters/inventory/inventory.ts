export interface InventoryAdapter {
    productId: string;
    qtyOnHand: number;
    qtyOnOrder: number;
    backorder?: boolean;
}