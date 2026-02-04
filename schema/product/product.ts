import z from 'zod';

const schema = z;

schema.object({
    id: schema.string(),
    title: schema.string(),
    description: schema.string(),
    slug: schema.string(),
    price: schema.number(), // MoneySchema
    images: schema.array(schema.string()), // MediaSchema
    sku: schema.string().optional(),
    specification: schema.string().optional(),
    metadata: schema.record(schema.string(), schema.unknown()).optional()
})