export default function Info() {
    return (
        <main style={{ minHeight: "70vh", display: "grid", placeItems: "center", padding: "2rem" }}>
            <div
                className="surface-app text-app"
                style={{
                    maxWidth: 720,
                    width: "100%",
                    padding: "1.25rem 1.5rem",
                    border: "1px solid rgba(0,0,0,.1)",
                    borderRadius: 12,
                    textAlign: "center",
                }}
            >
                <p style={{ fontSize: "1.1rem", margin: 0 }}>
                    We are a Widget Company. contract us and we can give you these widgets and access to make your own
                    and store them with us for later use anytime anywhere!
                </p>
            </div>
        </main>
    );
}
