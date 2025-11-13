export default function Navbar() {
    return (
        <header className="surface-app" style={{ borderBottom: "1px solid rgba(0,0,0,.08)" }}>
            <div className="container" style={{display: "grid", gridTemplateColumns: "1fr auto 1fr", alignItems: "center", gap: "1rem", padding: ".75rem 1rem",}}>
                <a href="/" className="text-app" style={{ fontWeight: 800, fontSize: "1.25rem", textDecoration: "none", justifySelf: "center" }}>
                    BrightForge
                </a>

                <nav aria-label="Primary" style={{ justifySelf: "end" }}>
                    <ul style={{ display: "flex", gap: "1rem", listStyle: "none", margin: 0, padding: 0 }}>
                        <li><a className="text-app" href="/">Home</a></li>
                        <li><a className="text-app" href="/widgets">Widgets</a></li>
                        <li><a className="text-app" href="/info">Info</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
