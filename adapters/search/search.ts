import { CollectionAdapter } from "../collection/collection";

export interface SearchAdapter<T> {
    query(q: string, options?: unknown): Promise<CollectionAdapter<T>>;
}