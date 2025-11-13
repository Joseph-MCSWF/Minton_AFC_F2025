import { updateWidget, type WidgetRequest, type WidgetResponse } from "../../API/widget";
import {useState} from "react";

type Props = {
    id?: number | string;
    patch?: Partial<WidgetRequest>;
    onUpdate?: (data: WidgetResponse) => void;
    onError?: (err: Error) => void;
};

export default function WidgetUpdate({ id, patch, onUpdate, onError }: Props) {
    const [loading, setLoading] = useState(false);

    const hasValidId =
        id !== undefined &&
        id !== null &&
        String(id).trim() !== "" &&
        !Number.isNaN(Number(id));

    const hasAnyField =
        patch &&
        (typeof patch.name === "string" && patch.name.trim() !== "" ||
            typeof patch.blurb === "string" && patch.blurb.trim() !== "" ||
            typeof patch.color === "string" && patch.color.trim() !== "" ||
            typeof patch.imageUrl === "string" && patch.imageUrl.trim() !== "");

    const enabled = hasValidId && !!hasAnyField;

    async function handleClick() {
        if (!enabled || loading || !patch) return;
        try {
            setLoading(true);
            const updated = await updateWidget(Number(id), patch);
            onUpdate?.(updated);
        } catch (e: any) {
            onError?.(e instanceof Error ? e : new Error("Update failed"));
        } finally {
            setLoading(false);
        }
    }

    return (
        <button
            type="button"
            disabled={!enabled || loading}
            onClick={handleClick}
            className="surface-app text-app"
            style={{
                padding: ".5rem .75rem",
                borderRadius: 8,
                border: "1px solid rgba(0,0,0,.1)",
                cursor: !enabled || loading ? "not-allowed" : "pointer",
                opacity: !enabled || loading ? 0.6 : 1,
            }}
            title={!enabled ? "Enter ID and at least one field" : "Update widget"}
        >
            {loading ? "Updating…" : "Update"}
        </button>
    );
}
