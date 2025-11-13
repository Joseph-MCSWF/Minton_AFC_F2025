type Props = {
    code?: number | string;
    message?: string;
};

export default function ErrorPage({ code = 404, message = "Something went wrong" }: Props) {
    return (
        <main className="container" style={{ padding: "2rem" }}>
            <div
                className="surface-app text-app"
                style={{
                    border: "1px solid rgba(0,0,0,.1)",
                    borderRadius: 12,
                    padding: "2rem",
                    textAlign: "center",
                    maxWidth: 420,
                    margin: "0 auto",
                }}
            >
                <div style={{ fontSize: "3rem", fontWeight: 800, lineHeight: 1 }}>{code}</div>
                <p style={{ marginTop: ".5rem" }}>{message}</p>
                <a
                    href="/"
                    className="text-app"
                    style={{
                        display: "inline-block",
                        marginTop: "1rem",
                        padding: ".5rem .75rem",
                        borderRadius: 8,
                        border: "1px solid rgba(0,0,0,.1)",
                        textDecoration: "none",
                    }}
                >
                    Go Home
                </a>
            </div>
        </main>
    );
}
