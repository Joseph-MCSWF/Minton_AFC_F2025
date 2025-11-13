import { deleteWidget } from "../../API/widget";
import {useState} from "react";

type Props = {
    id?: number | string;
    onDelete?: (id: number) => void;
    onError?: (err: Error) => void;
};

export default function WidgetDelete({ id, onDelete, onError }: Props) {
    const [loading, setLoading] = useState(false);

    const hasValidId =
        id !== undefined &&
        id !== null &&
        String(id).trim() !== "" &&
        !Number.isNaN(Number(id));

    async function handleClick() {
        if (!hasValidId || loading) return;
        const numericId = Number(id);
        try {
            setLoading(true);
            await deleteWidget(numericId);
            onDelete?.(numericId);
        } catch (e: any) {
            onError?.(e instanceof Error ? e : new Error("Delete failed"));
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
            title={!hasValidId ? "Enter an ID first" : "Delete widget"}
        >
            {loading ? "Deleting…" : "Delete"}
        </button>
    );
}
