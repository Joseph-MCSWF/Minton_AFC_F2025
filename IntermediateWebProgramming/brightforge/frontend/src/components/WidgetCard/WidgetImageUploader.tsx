import { updateWidget, type WidgetResponse } from "../../API/widget";
import {useState} from "react";

type Props = {
    id?: number | string;
    initialUrl?: string;
    onAttach?: (url: string) => void;
    onUpdated?: (data: WidgetResponse) => void;
    onError?: (err: Error) => void;
    label?: string;
};

export default function WidgetImageUploader({
                                                id,
                                                initialUrl = "",
                                                onAttach,
                                                onUpdated,
                                                onError,
                                                label = "Save Image",
                                            }: Props) {
    const [url, setUrl] = useState(initialUrl);
    const [loading, setLoading] = useState(false);

    const hasValidId =
        id !== undefined &&
        id !== null &&
        String(id).trim() !== "" &&
        !Number.isNaN(Number(id));
    const validUrl = /^https?:\/\/.+/i.test(url.trim());

    async function handleClick() {
        if (!validUrl || loading) return;
        try {
            setLoading(true);
            if (hasValidId) {
                const updated = await updateWidget(Number(id), { imageUrl: url.trim() });
                onUpdated?.(updated);
            } else {
                onAttach?.(url.trim());
            }
        } catch (e: any) {
            onError?.(e instanceof Error ? e : new Error("Image save failed"));
        } finally {
            setLoading(false);
        }
    }

    return (
        <div style={{ display: "flex", gap: ".5rem", alignItems: "center" }}>
            <input
                type="url"
                placeholder="https://…/image.jpg"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="surface-app text-app"
                style={{
                    flex: 1,
                    padding: ".5rem .75rem",
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,.1)",
                }}
            />
            <button
                type="button"
                onClick={handleClick}
                disabled={!validUrl || loading}
                className="surface-app text-app"
                style={{
                    padding: ".5rem .75rem",
                    borderRadius: 8,
                    border: "1px solid rgba(0,0,0,.1)",
                    cursor: !validUrl || loading ? "not-allowed" : "pointer",
                    opacity: !validUrl || loading ? 0.6 : 1,
                    whiteSpace: "nowrap",
                }}
                title={!validUrl ? "Enter a valid image URL" : hasValidId ? "Save to widget" : "Attach to new widget"}
            >
                {loading ? "Saving…" : label}
            </button>
        </div>
    );
}
