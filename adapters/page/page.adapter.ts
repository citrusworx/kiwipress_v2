import { DocumentAST } from "../../types/document"

export interface PageAdapter {
    id?: string;
    slug: string;
    title: string;
    content: string | DocumentAST;
    tags: string[];
    metadata: Record<string, unknown>
}