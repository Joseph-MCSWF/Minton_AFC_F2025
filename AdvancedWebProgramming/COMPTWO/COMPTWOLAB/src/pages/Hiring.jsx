import { useMemo, useState } from "react";
import { Container } from "reactstrap";
import HiringForm from "../components/HiringForm.jsx";

const PASSWORD_RE = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,12}$/;
const PHONE_RE = /^\d{3}-\d{3}-\d{4}$/;

export default function Hiring() {
    const [values, setValues] = useState({
        firstName: "",
        lastName: "",
        address1: "",
        city: "",
        state: "AL",
        age: 21,
        phone: "",
        email: "",
        password: "",
        married: "single",
    });
    const [touched, setTouched] = useState({});

    const US_STATES = [
        "AL","AK","AZ"
    ];


    const handleChange = (e) => {
        const { name, value } = e.target;
        let v = value;

        switch (name) {
            case "firstName":
                v = value.slice(0, 20);
                break;
            case "lastName":
                v = value.slice(0, 20);
                break;
            case "address1":
                v = value.slice(0, 60);
                break;
            case "city":
                v = value.slice(0, 29);
                break;
            case "age":
                v = value.replace(/\D/g, "").slice(0, 2);
                break;
            case "phone": {
                const digits = value.replace(/\D/g, "").slice(0, 10);
                if (digits.length > 6) v = `${digits.slice(0,3)}-${digits.slice(3,6)}-${digits.slice(6)}`;
                else if (digits.length > 3) v = `${digits.slice(0,3)}-${digits.slice(3)}`;
                else v = digits;
                break;
            }
            case "password":
                v = value.slice(0, 12);
                break;
            default:
                break;
        }
        setValues((s) => ({ ...s, [name]: v }));
    };

    const handleBlur = (e) => {
        setTouched((s) => ({ ...s, [e.target.name]: true }));
    };

    const setMarried = (choice) =>
        setValues((s) => ({ ...s, married: choice }));

    const errors = useMemo(() => {
        const e = {};

        if (!(values.firstName.trim().length >= 1 && values.firstName.trim().length <= 20)) {
            e.firstName = "First Name is required (1–20).";
        }

        if (values.lastName.trim() && !(values.lastName.trim().length >= 1 && values.lastName.trim().length <= 20)) {
            e.lastName = "If provided, 1–20 characters.";
        }

        if (!values.address1.trim() || values.address1.length > 60) {
            e.address1 = "Address is required (≤ 60).";
        }

        if (!values.city.trim() || values.city.length > 29) {
            e.city = "City is required (≤ 29).";
        }

        if (!US_STATES.includes(values.state)) {
            e.state = "Select a valid state.";
        }

        const ageNum = Number(values.age);
        if (!(ageNum >= 21 && ageNum <= 99)) {
            e.age = "Age must be 21–99.";
        }
        if (!values.phone.trim() || !PHONE_RE.test(values.phone)) {
            e.phone = "Phone must be 111-222-3333.";
        }

        if (!values.email.trim()) {
            e.email = "Email is required.";
        }

        if (!PASSWORD_RE.test(values.password)) {
            e.password = "Password must be 8–12 chars incl. upper, lower, digit, symbol.";
        }
        return e;
    }, [values]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setTouched({
            firstName: true, lastName: true, address1: true, city: true,
            state: true, age: true, phone: true, email: true, password: true,
        });

        if (Object.keys(errors).length) {
            const alertMsg = Object.values(errors).map((m) => `- ${m}`).join("\n");
            alert("Please fix the following:\n\n" + alertMsg);
            return;
        }


        const payload = {
            ...values,
            age: Number(values.age || 0),
        };
        console.log("Hiring submission:", payload);
    };

    const handleReset = () => {
        setTouched({});
        setValues({
            firstName: "",
            lastName: "",
            address1: "",
            city: "",
            state: "CA",
            age: 21,
            phone: "",
            email: "",
            password: "",
            married: "single",
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-start" style={{ minHeight: "calc(100svh - 140px)" }}>
            <div className="w-100" style={{ maxWidth: 900 }}>

                <HiringForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    onMarriedChange={setMarried}
                    onSubmit={handleSubmit}
                    onReset={handleReset}
                    states={US_STATES}
                />
            </div>
        </Container>
    );
}
