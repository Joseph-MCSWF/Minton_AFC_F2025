import { useState } from "react";
import axios from "axios";
import Table from "./components/Table";
import "./styles/app.css";

export default function App() {
    const [people, setPeople] = useState([]);
    const [showTable, setShowTable] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function handleSubmit() {
        try {
            setLoading(true);
            setError("");
            // Single GET request using axios
            const res = await axios.get("https://swapi.dev/api/people");
            const results = Array.isArray(res.data?.results) ? res.data.results : [];
            setPeople(results);
            setShowTable(results.length > 0);
        } catch (e) {
            setError(
                e?.response?.status
                    ? `Request failed (HTTP ${e.response.status}).`
                    : "Network error or rate limit. Please try again."
            );
            setPeople([]);
            setShowTable(false);
        } finally {
            setLoading(false);
        }
    }

    function handleReset() {
        setPeople([]);
        setError("");
        setShowTable(false);
        setLoading(false);
    }

    return (
        <div className="app-shell">
            <div className="content">
                <div className="card">
                    <h1 className="title">SWAPI Characters</h1>
                    <p className="subtitle">Demonstrates loading data from https://swapi.dev/api/people using axios.</p>

                    <div className="actions">
                        <button onClick={handleSubmit} disabled={loading}>
                            {loading ? "Loading…" : "Load Characters"}
                        </button>
                        <button className="secondary" onClick={handleReset} disabled={loading}>
                            Reset
                        </button>
                    </div>

                    {loading && <div className="status">Fetching characters…</div>}

                    {!loading && error && <div className="status error">{error}</div>}

                    {!loading && !error && !showTable && (
                        <div className="status muted">No data loaded yet. Click “Load Characters”.</div>
                    )}

                    {!loading && !error && showTable && <Table data={people} />}
                </div>
            </div>
        </div>
    );
}
