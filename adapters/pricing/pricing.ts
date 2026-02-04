export interface PricingRuleAdapter {
    id: string;
    type: "sale" | "discount" | "bulk" | "subscription" | "loyalty";
    appliesTo: string[];
    effect: {
        type: "percentage" | "fixed";
        amount: number;
    };
    conditions: Record<string, unknown>
}  