export interface AuthorAdapter {
    id: string;
    name: string;
    slug?: string;
    avatar?: string;
    bio?: string;
    metadata: Record<string, unknown>;
}