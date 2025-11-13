import { getWidget, type WidgetResponse } from "../../API/widget";
import {useState} from "react";

type Props = {
    id?: number | string;
    onLoad?: (data: WidgetResponse) => void;
    onError?: (err: Error) => void;
};

export default function WidgetGet({ id, onLoad, onError }: Props) {
    const [loading, setLoading] = useState(false);

    const hasValidId =
        id !== undefined &&
        id !== null &&
        String(id).trim() !== "" &&
        !Number.isNaN(Number(id));

    async function handleClick() {
        if (!hasValidId || loading) return;
        try {
            setLoading(true);
            const data = await getWidget(Number(id));
            onLoad?.(data);
        } catch (e: any) {
            onError?.(e instanceof Error ? e : new Error("Get failed"));
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            type="button"
            disabled={!hasValidId || loading}
            onClick={handleClick}
            className="surface-app text-app"
            style={{
                padding: ".5rem .75rem",
                borderRadius: 8,
                border: "1px solid rgba(0,0,0,.1)",
                cursor: !hasValidId || loading ? "not-allowed" : "pointer",
                opacity: !hasValidId || loading ? 0.6 : 1,
            }}
            aria-disabled={!hasValidId || loading}
            aria-label="Get widget by ID"
            title={!hasValidId ? "Enter an ID first" : "Get widget"}
        >
            {loading ? "Getting…" : "Get"}
        </button>
    );
}
