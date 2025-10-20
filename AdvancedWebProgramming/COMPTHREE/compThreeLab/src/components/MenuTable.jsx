import React from "react";
import { Container, Table, Badge } from "reactstrap";

export default function MenuTable({ items }) {
    return (
        <Container
            fluid
            className="d-flex justify-content-center align-items-start"
            style={{ minHeight: "calc(100svh - 140px)" }}
        >
            <div className="w-100" style={{ maxWidth: 1200 }}>
                <div className="table-wrap rounded-3 shadow-lg">
                    <Table responsive hover borderless className="align-middle mb-0">
                        <thead className="table-dark">
                        <tr className="menu-table--sm">
                            <th style={{ width: 110 }}>Image</th>
                            <th>Item Name</th>
                            <th className="d-none d-md-table-cell">Description</th>
                            <th className="text-end" style={{ width: 120 }}>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {items.slice(0,5).map((it) => (
                            <tr key={it.name}>
                                <td><img src={it.img} alt="" className="menu-thumb" /></td>
                                <td className="menu-table--sm text-warning">{it.name}</td>
                                <td className="d-none d-md-table-cell menu-desc">{it.desc}</td>
                                <td className="text-end">
                                    <Badge color="warning" pill className="text-dark">${it.price}</Badge>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </div>
            </div>
        </Container>
    );
}
