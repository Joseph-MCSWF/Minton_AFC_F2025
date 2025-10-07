import { Container } from "reactstrap";
import HiringForm from "../components/HiringForm.jsx";

export default function Hiring() {
    const US_STATES = ["AL", "AK", "AZ"];
    return (
        <Container
            className="d-flex justify-content-center align-items-start"
            style={{ minHeight: "calc(100svh - 140px)" }}
        >
            <div className="w-100" style={{ maxWidth: 900 }}>
                <HiringForm states={US_STATES} />
            </div>
        </Container>
    );
}
