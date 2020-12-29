export interface LincolnRespond {
    type: string;
    respondingServiceName?: string;
    success?: boolean;
    executionTimeMs?: number;
    errors?: string[];
}