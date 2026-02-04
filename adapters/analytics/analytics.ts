export interface AnalyticsAdapter {
    track(event: string, data?: Record<string, unknown>): void;
}