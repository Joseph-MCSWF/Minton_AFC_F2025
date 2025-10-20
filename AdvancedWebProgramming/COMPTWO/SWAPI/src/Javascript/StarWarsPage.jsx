import React, { useState } from "react";
import PeopleTable from "../components/Table";
import Header from "../components/Header";
import { Spinner } from "reactstrap";

export default function StarWarsPage() {
    const [people, setPeople] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const columns = [
        { key: "name",       label: "NAME",       className: "px-5 border-black border-3" },
        { key: "height",     label: "HEIGHT",     className: "px-5 border-black border-3" },
        { key: "hair_color", label: "HAIR COLOR", className: "px-5 border-black border-3" },
        { key: "gender",     label: "GENDER",     className: "px-5 border-black border-3" },
    ];

    async function handleLoad() {
        try {
            setLoading(true);
            setError("");
            const res = await fetch("https://swapi.dev/api/people/?page=1");
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const data = await res.json();
            setPeople(data.results ?? []);
        } catch (e) {
            setError(String(e));
            setPeople([]);
        } finally {
            setLoading(false);
        }
    }

    function handleReset() {
        setPeople([]);
        setError("");
        setLoading(false);
    }

    return (
        <>
            <Header onLoad={handleLoad} onReset={handleReset} loading={loading} />

            <div className="d-flex justify-content-center align-items-center vh-100">
                <div className="w-100" style={{ maxWidth: 900, paddingTop: 80 }}>
                    {loading && (
                        <div className="d-flex justify-content-center align-items-center">
                            <Spinner /> <span className="ms-2">Loading…</span>
                        </div>
                    )}

                    {!loading && error && (
                        <div className="alert alert-danger text-center" role="alert">
                            {error}
                        </div>
                    )}

                    {!loading && !error && people.length === 0 && (
                        <div className="text-center text-muted">
                            Click <strong>Load Characters</strong> to fetch SWAPI data.
                        </div>
                    )}

                    <PeopleTable columns={columns} data={people} />
                </div>
            </div>
        </>
    );
}
