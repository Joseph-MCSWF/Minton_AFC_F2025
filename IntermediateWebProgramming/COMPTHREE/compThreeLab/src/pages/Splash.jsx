import '../styles/Splash.css';
import prancingPony from "../assets/prancingPony.png";

export default function Splash() {
    return (
        <div
            className="d-flex flex-column justify-content-center align-items-center text-center"
            style={{ minHeight: "calc(100svh - 140px)" }} // account for your tall navbar
        >
            <h1 className="splash-text mb-3">Welcome To The Prancing Pony</h1>

            <img
                src={prancingPony}
                alt="Prancing Pony crest"
                className="splash-img"
                loading="lazy"
            />
        </div>
    );
}