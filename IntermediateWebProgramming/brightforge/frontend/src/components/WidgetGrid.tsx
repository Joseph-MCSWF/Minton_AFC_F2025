import WidgetCard from "./WidgetCard/WidgetCard";
import type {WidgetResponse } from "../API/widget";
import {useMemo} from "react";

export type SessionWidget = WidgetResponse & {
    status: "created" | "updated" | "fetched" | "deleted";
};

type Props = {
    widgets: SessionWidget[];
    onUpdated?: (w: WidgetResponse) => void;
    onDeleted?: (id: number) => void;
    onError?: (err: Error) => void;
};

export default function WidgetGrid({ widgets, onUpdated, onDeleted, onError }: Props) {
    const visible = useMemo(
        () => widgets.filter((w) => w.status === "created" || w.status === "updated" || w.status === "fetched"),
        [widgets]
    );

    if (visible.length === 0) {
        return (
            <div className="text-app" style={{ padding: "1rem", opacity: 0.7 }}>
                No widgets yet. Create or fetch to see them here.
            </div>
        );
    }

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: "1rem",
                width: "100%",
            }}
        >
            {visible.map((w) => (
                <WidgetCard
                    key={w.id}
                    initial={w}
                    onUpdated={onUpdated}
                    onDeleted={onDeleted}
                    onError={onError}
                />
            ))}
        </div>
    );
}
