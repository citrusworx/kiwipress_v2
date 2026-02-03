export interface WebhookAdapter {
    on(event: string, handler: Function): void;
}