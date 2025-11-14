import { useMemo, useState } from "react";
import type { WidgetRequest, WidgetResponse } from "../../API/widget";
import WidgetGet from "./WidgetGet";
import WidgetCreate from "./WidgetCreate";
import WidgetUpdate from "./WidgetUpdate";
import WidgetDelete from "./WidgetDelete";
import WidgetImageUploader from "./WidgetImageUploader";

type Mode = "manage" | "display";

type Props = {
    mode?: Mode;
    initial?: Partial<WidgetResponse>;
    onLoaded?: (w: WidgetResponse) => void;
    onCreated?: (w: WidgetResponse) => void;
    onUpdated?: (w: WidgetResponse) => void;
    onDeleted?: (id: number) => void;
    onError?: (err: Error) => void;
};

const PLACEHOLDER_IMG =
    "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=1200&q=80";

export default function WidgetCard({
                                       mode = "manage",
                                       initial,
                                       onLoaded,
                                       onCreated,
                                       onUpdated,
                                       onDeleted,
                                       onError,
                                   }: Props) {
    if (mode === "display") {
        const name = initial?.name ?? "Untitled widget";
        const blurb = initial?.blurb ?? "";
        const color = (initial?.color ?? "").toString();
        const img = initial?.imageUrl || "";
        const created = initial?.created;

        return (
            <article
                className="surface-app text-app"
                style={{
                    border: "1px solid rgba(0,0,0,.1)",
                    borderRadius: 12,
                    overflow: "hidden",
                }}
            >
                {(img || PLACEHOLDER_IMG) && (
                    <img
                        src={img || PLACEHOLDER_IMG}
                        alt={name}
                        style={{ width: "100%", height: 160, objectFit: "cover" }}
                    />
                )}

                <div style={{ padding: "0.75rem 0.9rem" }}>
                    <h3 style={{ margin: 0, fontSize: "1.05rem", fontWeight: 700 }}>{name}</h3>
                    {blurb ? <p style={{ margin: "0.4rem 0 0.2rem", opacity: 0.85 }}>{blurb}</p> : null}

                    <div style={{ display: "flex", alignItems: "center", gap: ".5rem", marginTop: ".4rem" }}>
                        {/^#[0-9A-Fa-f]{6}$/.test(color) && (
                            <>
                <span
                    aria-label="color"
                    title={color.toUpperCase()}
                    style={{
                        width: 16,
                        height: 16,
                        borderRadius: 4,
                        border: "1px solid rgba(0,0,0,.15)",
                        background: color,
                    }}
                />
                                <span style={{ fontSize: ".85rem", opacity: 0.8 }}>{color.toUpperCase()}</span>
                            </>
                        )}
                        {created && (
                            <span style={{ fontSize: ".85rem", opacity: 0.7, marginLeft: "auto" }}>
                {created}
              </span>
                        )}
                    </div>
                </div>
            </article>
        );
    }

    const [idInput, setIdInput] = useState<string>(initial?.id ? String(initial.id) : "");
    const [form, setForm] = useState<WidgetRequest>({
        name: initial?.name ?? "",
        blurb: initial?.blurb ?? "",
        color: initial?.color ?? "",
        imageUrl: initial?.imageUrl ?? "",
    });

    const validImage = useMemo(() => /^https?:\/\/.+/i.test(form.imageUrl?.trim() || ""), [form.imageUrl]);
    const hex =
        /^#[0-9A-Fa-f]{6}$/.test(form.color ?? "") ? (form.color as string).toUpperCase() : "#000000";

    return (
        <div
            className="surface-app text-app"
            style={{ border: "1px solid rgba(0,0,0,.1)", borderRadius: 12, padding: "1rem", width: "100%", maxWidth: 560 }}
        >
            <div style={{ display: "grid", gap: ".75rem" }}>
                <div style={{ display: "grid", gap: ".25rem" }}>
                    <label htmlFor="widget-id">Widget ID</label>
                    <input
                        id="widget-id"
                        inputMode="numeric"
                        placeholder="Enter ID (for Get/Update/Delete)"
                        value={idInput}
                        onChange={(e) => setIdInput(e.target.value)}
                        className="surface-app text-app"
                        style={{ padding: ".5rem .75rem", borderRadius: 8, border: "1px solid rgba(0,0,0,.1)" }}
                    />
                </div>

                <div style={{ display: "grid", gap: ".25rem" }}>
                    <label htmlFor="name">Name</label>
                    <input
                        id="name"
                        placeholder="Widget name"
                        value={form.name}
                        onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
                        className="surface-app text-app"
                        style={{ padding: ".5rem .75rem", borderRadius: 8, border: "1px solid rgba(0,0,0,.1)" }}
                    />
                </div>

                <div style={{ display: "grid", gap: ".25rem" }}>
                    <label htmlFor="blurb">Blurb</label>
                    <input
                        id="blurb"
                        placeholder="Short description"
                        value={form.blurb || ""}
                        onChange={(e) => setForm((s) => ({ ...s, blurb: e.target.value }))}
                        className="surface-app text-app"
                        style={{ padding: ".5rem .75rem", borderRadius: 8, border: "1px solid rgba(0,0,0,.1)" }}
                    />
                </div>

                <div style={{ display: "grid", gap: ".25rem" }}>
                    <label htmlFor="color">Color</label>
                    <div style={{ display: "flex", alignItems: "center", gap: ".5rem" }}>
                        <input
                            id="color"
                            type="color"
                            value={hex}
                            onChange={(e) => setForm((s) => ({ ...s, color: e.target.value.toUpperCase() }))}
                            style={{ width: "2.5rem", height: "2.5rem", padding: 0, borderRadius: 8, border: "1px solid rgba(0,0,0,.1)" }}
                            aria-label="Pick color"
                        />
                        <input
                            type="text"
                            readOnly
                            value={hex}
                            className="surface-app text-app"
                            style={{ padding: ".5rem .75rem", borderRadius: 8, border: "1px solid rgba(0,0,0,.1)", width: 120 }}
                            aria-label="Hex color"
                        />
                    </div>
                </div>

                <div style={{ display: "grid", gap: ".5rem" }}>
                    <WidgetImageUploader
                        id={idInput}
                        initialUrl={form.imageUrl || ""}
                        onAttach={(url) => setForm((s) => ({ ...s, imageUrl: url }))}
                        onUpdated={(w) => {
                            setForm({ name: w.name, blurb: w.blurb, color: w.color, imageUrl: w.imageUrl });
                            onUpdated?.(w);
                        }}
                        onError={onError}
                        label="Save Image URL"
                    />
                    {(validImage || PLACEHOLDER_IMG) && (
                        <img
                            src={validImage ? form.imageUrl : PLACEHOLDER_IMG}
                            alt="widget preview"
                            style={{ width: "100%", height: 160, objectFit: "cover", borderRadius: 8, border: "1px solid rgba(0,0,0,.08)" }}
                        />
                    )}
                </div>

                <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap", marginTop: ".25rem" }}>
                    <WidgetGet
                        id={idInput}
                        onLoad={(w) => {
                            setIdInput(String(w.id));
                            setForm({ name: w.name, blurb: w.blurb, color: w.color, imageUrl: w.imageUrl });
                            onLoaded?.(w);
                        }}
                        onError={onError}
                    />

                    <WidgetCreate
                        data={form}
                        onCreate={(w) => {
                            setIdInput(String(w.id));
                            setForm({ name: w.name, blurb: w.blurb, color: w.color, imageUrl: w.imageUrl });
                            onCreated?.(w);
                        }}
                        onError={onError}
                    />

                    <WidgetUpdate
                        id={idInput}
                        patch={form}
                        onUpdate={(w) => {
                            setForm({ name: w.name, blurb: w.blurb, color: w.color, imageUrl: w.imageUrl });
                            onUpdated?.(w);
                        }}
                        onError={onError}
                    />

                    <WidgetDelete
                        id={idInput}
                        onDelete={(id) => {
                            onDeleted?.(id);
                        }}
                        onError={onError}
                    />
                </div>
            </div>
        </div>
    );
}
