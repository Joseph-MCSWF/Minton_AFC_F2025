// Presentational only: expects `data` (array of people)
export default function Table({ data }) {
    if (!data || data.length === 0) return null;

    // Required column order: Name, Height, Hair Color, Gender
    return (
        <div className="table-wrap">
            <table>
                <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Height</th>
                    <th scope="col">Hair Color</th>
                    <th scope="col">Gender</th>
                </tr>
                </thead>
                <tbody>
                {data.map((p, idx) => (
                    <tr key={p.url || idx}>
                        <td>{p.name || "Unknown"}</td>
                        <td>{p.height || "Unknown"}</td>
                        <td>{p.hair_color && p.hair_color !== "unknown" ? p.hair_color : "Unknown"}</td>
                        <td>{p.gender && p.gender !== "unknown" ? p.gender : "Unknown"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}
