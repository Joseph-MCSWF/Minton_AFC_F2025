

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

const BASE_URL = "/api/widgets";

function withDefaultHeaders(init?: RequestInit): RequestInit {
    const mergedHeaders = {
        Accept: "application/json",
        ...(init?.headers || {}),
    } as Record<string, string>;
    return { ...init, headers: mergedHeaders };
}

async function ensureOk(res: Response): Promise<void> {
    if (res.ok) return;
    let data: unknown | undefined;
    try {

        data = await res.json();
    } catch {

    }
    const message =
        (data as any)?.message ??
        (res.statusText || "Request failed");
    throw new ApiError(message, res.status, data);
}

async function requestJson<T>(url: string, init?: RequestInit): Promise<T> {
    const res = await fetch(url, withDefaultHeaders(init));
    await ensureOk(res);
    return await res.json() as T;
}

async function requestVoid(url: string, init?: RequestInit): Promise<void> {
    const res = await fetch(url, withDefaultHeaders(init));
    await ensureOk(res);
}

/** CREATE */
export async function createWidget(data: WidgetRequest): Promise<WidgetResponse> {
    return await requestJson<WidgetResponse>(BASE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
}

/** READ */
export async function getWidget(id: number): Promise<WidgetResponse> {
    return await requestJson<WidgetResponse>(`${BASE_URL}/${id}`);
}

/** UPDATE */
export async function updateWidget(
    id: number,
    patch: Partial<WidgetRequest>
): Promise<WidgetResponse> {
    return await requestJson<WidgetResponse>(`${BASE_URL}/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
    });
}

/** DELETE */
export async function deleteWidget(id: number): Promise<void> {
    return await requestVoid(`${BASE_URL}/${id}`, { method: "DELETE" });
}
