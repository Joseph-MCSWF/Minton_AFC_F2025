
import { useState } from "react";
import WidgetCard from "../components/WidgetCard/WidgetCard";
import WidgetGrid, {type SessionWidget } from "../components/WidgetGrid";
import type { WidgetResponse } from "../API/widget";

function upsertSession(
    prev: SessionWidget[],
    w: WidgetResponse,
    status: SessionWidget["status"]
): SessionWidget[] {
    const idx = prev.findIndex((x) => x.id === w.id);
    const entry: SessionWidget = { ...w, status };
    if (idx === -1) return [entry, ...prev];
    const next = prev.slice();
    next[idx] = { ...prev[idx], ...entry, status };
    return next;
}

export default function Widgets() {
    const [session, setSession] = useState<SessionWidget[]>([]);
    const [error, setError] = useState<string | null>(null);

    const onLoaded = (w: WidgetResponse) =>
        setSession((p) => upsertSession(p, w, "fetched"));
    const onCreated = (w: WidgetResponse) =>
        setSession((p) => upsertSession(p, w, "created"));
    const onUpdated = (w: WidgetResponse) =>
        setSession((p) => upsertSession(p, w, "updated"));
    const onDeleted = (id: number) =>
        setSession((p) => p.filter((x) => x.id !== id));
    const onError = (err: Error) => setError(err.message);

    return (
        <main className="container" style={{ padding: "1rem 1rem 2rem" }}>
            <section style={{ marginBottom: "1rem" }}>
                <WidgetCard
                    onLoaded={onLoaded}
                    onCreated={onCreated}
                    onUpdated={onUpdated}
                    onDeleted={onDeleted}
                    onError={onError}
                />
            </section>

            <WidgetGrid
                widgets={session}
                onUpdated={onUpdated}
                onDeleted={onDeleted}
                onError={onError}
            />

            {error && (
                <div
                    className="surface-app text-app"
                    style={{
                        marginTop: "1rem",
                        padding: ".75rem 1rem",
                        border: "1px solid rgba(0,0,0,.1)",
                        borderRadius: 8,
                    }}
                >
                    {error}
                </div>
            )}
        </main>
    );
}
