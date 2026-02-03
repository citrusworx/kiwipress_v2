export interface CollectionAdapter<T> {
    items: T[];
    pagination?: {
        page: number;
        perPage: number;
        total: number;
    }
}