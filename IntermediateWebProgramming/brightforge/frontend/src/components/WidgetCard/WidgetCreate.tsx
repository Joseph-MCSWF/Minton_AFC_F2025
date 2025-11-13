import { createWidget, type WidgetRequest, type WidgetResponse } from "../../API/widget";
import {useState} from "react";

type Props = {
    data?: WidgetRequest;
    onCreate?: (data: WidgetResponse) => void;
    onError?: (err: Error) => void;
};

export default function WidgetCreate({ data, onCreate, onError }: Props) {
    const [loading, setLoading] = useState(false);

    const valid =
        !!data &&
        data.name?.trim() &&
        data.blurb?.trim() &&
        data.color?.trim() &&
        data.imageUrl?.trim();

    async function handleClick() {
        if (!valid || loading || !data) return;
        try {
            setLoading(true);
            const created = await createWidget(data);
            onCreate?.(created);
        } catch (e: any) {
            onError?.(e instanceof Error ? e : new Error("Create failed"));
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            type="button"
            disabled={!valid || loading}
            onClick={handleClick}
            className="surface-app text-app"
            style={{
                padding: ".5rem .75rem",
                borderRadius: 8,
                border: "1px solid rgba(0,0,0,.1)",
                cursor: !valid || loading ? "not-allowed" : "pointer",
                opacity: !valid || loading ? 0.6 : 1,
            }}
            title={!valid ? "Fill all fields first" : "Create widget"}
        >
            {loading ? "Creating…" : "Create"}
        </button>
    );
}
