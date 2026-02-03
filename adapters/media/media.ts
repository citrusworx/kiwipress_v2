export interface MediaAdapter {
    id: string;
    type: "image" | "video" | "audio" | "file";
    url: string;
    alt?: string;
    metadata: Record<string, unknown>;
}