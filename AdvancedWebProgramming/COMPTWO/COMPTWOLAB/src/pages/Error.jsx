import { Container, Button } from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "../styles/Error.css";

export default function Error() {
    const { pathname } = useLocation();

    return (
        <Container className="error-wrap">
            <div className="error-card">
                <div className="error-body">
                    <h1 className="error-title">Whoops!</h1>
                    <p className="error-text">We couldn’t find the page you were looking for.</p>
                    <span className="error-path">{pathname}</span>

                    <div className="error-actions">
                        <Button tag={Link} to="/" color="warning" className="text-dark fw-bold">Home</Button>
                        <Button tag={Link} to="/menu" color="secondary">Menu</Button>
                        <Button tag={Link} to="/hiring" color="secondary">Hiring</Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}
