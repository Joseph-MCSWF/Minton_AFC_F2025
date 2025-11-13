import brightforgeLogo from "../assets/appImages&Icons/BrightforgeLogo.png";

export default function Home() {
    return (
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "2rem" }}>
            <div style={{ textAlign: "center" }}>
                <img
                    src={brightforgeLogo}
                    alt="BrightForge Widgets logo"
                    style={{
                        width: "min(92vw, 720px)",
                        height: "auto",
                        display: "block",
                        margin: "0 auto",
                        background: "var(--app-surface)",
                        borderRadius: 12,
                        padding: "1rem",
                        boxShadow: "0 6px 16px rgba(0,0,0,.15)"
                    }}
                />
                <a
                    href={brightforgeLogo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-app"
                    style={{ display: "inline-block", marginTop: "0.75rem", textDecoration: "underline" }}
                >
                </a>
            </div>
        </main>
    );
}
