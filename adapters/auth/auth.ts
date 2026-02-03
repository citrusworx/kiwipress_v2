export type AuthSession = {
    data: Record<string, unknown>;
}

export interface AuthAdapter {
    login(credentials: unknown): Promise<AuthSession>;
    logout(): Promise<void>;
    getSession(): Promise<AuthSession | null>;
}