export type WidgetRequest = {
    name: string;
    blurb: string;
    color: string;
    imageUrl: string;
};

export type WidgetResponse = {
    id: number;
    name: string;
    blurb: string;
    color: string;
    imageUrl: string;
    created?: string;
};

export class ApiError extends Error {
    status: number;
    data?: unknown;
    constructor(message: string, status: number, data?: unknown) {
        super(message);
        this.status = status;
        this.data = data;
    }
}

const API_ROOT = (import.meta as any).env?.VITE_API_ROOT ?? "";
const BASE_URL = `${API_ROOT}/api/widgets`;

async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
    const res = await fetch(url, init);
    if (!res.ok) {
        let msg = res.statusText || "Request failed";
        try {
            const data = await res.json();
            throw new ApiError((data as any)?.message ?? msg, res.status, data);
        } catch {
            throw new ApiError(msg, res.status);
        }
    }
    return res.json() as Promise<T>;
}

async function requestVoid(url: string, init?: RequestInit): Promise<void> {
    const res = await fetch(url, init);
    if (!res.ok) {
        let msg = res.statusText || "Request failed";
        try {
            const data = await res.json();
            throw new ApiError((data as any)?.message ?? msg, res.status, data);
        } catch {
            throw new ApiError(msg, res.status);
        }
    }
}


export async function listWidgets(): Promise<WidgetResponse[]> {
    return requestJson<WidgetResponse[]>(BASE_URL);
}


export async function createWidget(data: WidgetRequest): Promise<WidgetResponse> {
    return requestJson<WidgetResponse>(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}


export async function getWidget(id: number): Promise<WidgetResponse> {
    return requestJson<WidgetResponse>(`${BASE_URL}/${id}`);
}


export async function updateWidget(
    id: number,
    patch: Partial<WidgetRequest>
): Promise<WidgetResponse> {
    return requestJson<WidgetResponse>(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
    });
}


export async function deleteWidget(id: number): Promise<void> {
    return requestVoid(`${BASE_URL}/${id}`, { method: "DELETE" });
}
