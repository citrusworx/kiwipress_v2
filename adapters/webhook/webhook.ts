export interface WebhookAdapter {
    on(event: string, handler: Function): void;
    emit(event: string, payload: unknown): void;
}