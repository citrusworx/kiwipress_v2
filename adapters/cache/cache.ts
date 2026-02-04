export interface CacheAdapter {
    get(key: string): Promise<unknown | null>;
    set(key:string, value: unknown, ttl?: number): Promise<void>;
    invalidate(pattern: string): Promise<void>;
}

// Redis, In-memory, Edge Cache