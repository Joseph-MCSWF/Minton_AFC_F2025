import icon from '../assets/icon.png'
import {
    Button,
    Navbar, NavbarBrand, NavbarText
} from "reactstrap";

export default function Header() {

    return (
        <Navbar fixed="top" className="bg-dark bg-opacity-50" dark expand="md">
            <div>
                <NavbarBrand>
                    <img
                        src={icon}
                        alt="logo"
                        width={64}
                        height={64}
                        style={{objectFit: "contain", verticalAlign: "middle"}}
                    />
                </NavbarBrand>
                <NavbarText style={{
                    color: "#04ecf8",
                    fontWeight: 1000,
                    textShadow: "0 1px 0 #05595f, 0 2px 0 #04484c, 0 3px 2px rgba(0,0,0,.45)"
                }}>Welcome to the ReactStrap Star Wars API Demo</NavbarText>
            </div>
            <div className="position-absolute start-50 translate-middle-x d-flex gap-2">
                <button className="btn text-black bg-danger bg-opacity-75 border border-danger rounded-3 px-3">Load Characters</button>
                <button className="btn text-black bg-danger bg-opacity-75 border border-danger rounded-3 px-3">Reset</button>
            </div>
        </Navbar>


    );
}
