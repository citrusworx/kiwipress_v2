import { z } from 'zod';

export const ProductSchema = z.object({
    id: z.string(),
    title: z.string(),
    description: z.string(), // TODO: DocumentSchema
    slug: z.string(),
    price: z.any(), //TODO:  MoneySchema
    images: z.array(z.unknown()), // TODO:  MediaSchema
    sku: z.string().optional(),
    specification: z.string().optional(),
    metadata: z.record(z.string(), z.unknown()).optional()
});
