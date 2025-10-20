import { Button, ButtonGroup, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "../styles/Hiring.css";
import * as yup from "yup";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

export default function HiringForm({ states = [] }) {
    const allowedStates = states.map(s => (typeof s === "string" ? s : s.value));

    const schema = yup.object({
        firstName: yup.string().trim().required("Please enter first name").min(1).max(20),
        lastName: yup.string().trim().required("Please enter last name").min(1).max(20),
        phone: yup.string().trim().required("Please enter phone number")
            .matches(/^\d{3}-\d{3}-\d{4}$/, "Use 111-222-3333 format"),
        address1: yup.string().trim().required("Please enter address").max(60),
        city: yup.string().trim().required("Please enter city").max(29),
        state: yup.string().required("Please select a state").oneOf(allowedStates, "Select a valid option"),
        age: yup.number()
            .transform((val, orig) => (orig === "" ? NaN : Number(orig)))
            .typeError("Age must be a number")
            .required("Please enter age")
            .min(25).max(89).default(25),
        email: yup.string().trim().required("Email is required")
            .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Enter a valid email").max(50),
        password: yup.string().required("Password is required")
            .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{8,12}$/, "8–12 chars incl. upper, lower, number, symbol"),
        married: yup.string().required("Please choose a marital status").oneOf(["single", "married"], "Select single or married"),
    });

    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            firstName: "",
            lastName: "",
            phone: "",
            address1: "",
            city: "",
            state: "",
            age: 25,
            email: "",
            password: "",
            married: "single",
        },
    });
    const reg = (name, options) => {
        const { ref, ...rest } = register(name, options);
        return { innerRef: ref, ...rest };
    };

    const onSubmit = (data) => {
        console.log(JSON.stringify(data));
        reset();
    };

    return (
        <div className="d-flex justify-content-center pt-5">
            <Form
                className="hiring-form w-100"
                autoComplete="off"
                noValidate
                style={{ maxWidth: 1500 }}
                onSubmit={handleSubmit(onSubmit)}
                onReset={() => reset()}
            >
                {/* ROW ONE */}
                <Row className="g-3 pb-5 align-items-center">
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="firstName" className="col-form-label mb-0">First Name</Label>
                            <Input
                                id="firstName"
                                placeholder="First Name"
                                {...reg("firstName")}
                                aria-invalid={errors.firstName ? "true" : undefined}
                                aria-describedby={errors.firstName ? "firstName-error" : undefined}
                            />
                            {errors.firstName && <p id="firstName-error" role="alert">{errors.firstName.message}</p>}
                        </FormGroup>
                    </Col>

                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="lastName" className="col-form-label mb-0">Last Name</Label>
                            <Input
                                id="lastName"
                                placeholder="Last Name"
                                {...reg("lastName")}
                                aria-invalid={errors.lastName ? "true" : undefined}
                                aria-describedby={errors.lastName ? "lastName-error" : undefined}
                            />
                            {errors.lastName && <p id="lastName-error" role="alert">{errors.lastName.message}</p>}
                        </FormGroup>
                    </Col>

                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="phone" className="col-form-label mb-0">Phone Number</Label>
                            <Input
                                id="phone"
                                type="tel"
                                placeholder="111-222-3333"
                                {...reg("phone")}
                                aria-invalid={errors.phone ? "true" : undefined}
                                aria-describedby={errors.phone ? "phone-error" : undefined}
                            />
                            {errors.phone && <p id="phone-error" role="alert">{errors.phone.message}</p>}
                        </FormGroup>
                    </Col>
                </Row>

                {/* ROW TWO */}
                <Row className="g-3 pb-5 align-items-center">
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="address1" className="col-form-label mb-0">Address</Label>
                            <Input
                                id="address1"
                                type="text"
                                placeholder="Address"
                                maxLength={60}
                                {...reg("address1")}
                                aria-invalid={errors.address1 ? "true" : undefined}
                                aria-describedby={errors.address1 ? "address1-error" : undefined}
                            />
                            {errors.address1 && <p id="address1-error" role="alert">{errors.address1.message}</p>}
                        </FormGroup>
                    </Col>

                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="city" className="col-form-label mb-0">City</Label>
                            <Input
                                id="city"
                                type="text"
                                placeholder="City"
                                maxLength={29}
                                {...reg("city")}
                                aria-invalid={errors.city ? "true" : undefined}
                                aria-describedby={errors.city ? "city-error" : undefined}
                            />
                            {errors.city && <p id="city-error" role="alert">{errors.city.message}</p>}
                        </FormGroup>
                    </Col>

                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="state" className="col-form-label mb-0">State</Label>
                            <Input
                                id="state"
                                type="select"
                                className="form-select"
                                {...reg("state")}
                                aria-invalid={errors.state ? "true" : undefined}
                                aria-describedby={errors.state ? "state-error" : undefined}
                            >
                                <option value="" disabled>Choose…</option>
                                {states.map((s) => {
                                    const value = typeof s === "string" ? s : s.value;
                                    const label = typeof s === "string" ? s : (s.label ?? s.value);
                                    return <option key={value} value={value}>{label}</option>;
                                })}
                            </Input>
                            {errors.state && <p id="state-error" role="alert">{errors.state.message}</p>}
                        </FormGroup>
                    </Col>
                </Row>

                {/* ROW THREE */}
                <Row className="g-3 pb-5 align-items-center">
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="age" className="col-form-label mb-0">Age</Label>
                            <Input
                                id="age"
                                type="number"
                                placeholder="Age"
                                min={25}
                                max={89}
                                {...reg("age", { valueAsNumber: true })}
                                aria-invalid={errors.age ? "true" : undefined}
                                aria-describedby={errors.age ? "age-error" : undefined}
                            />
                            {errors.age && <p id="age-error" role="alert">{errors.age.message}</p>}
                        </FormGroup>
                    </Col>

                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="email" className="col-form-label mb-0">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="something@something.com"
                                {...reg("email")}
                                aria-invalid={errors.email ? "true" : undefined}
                                aria-describedby={errors.email ? "email-error" : undefined}
                            />
                            {errors.email && <p id="email-error" role="alert">{errors.email.message}</p>}
                        </FormGroup>
                    </Col>

                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="password" className="col-form-label mb-0">Password</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="click for rules"
                                {...reg("password")}
                                aria-invalid={errors.password ? "true" : undefined}
                                aria-describedby={errors.password ? "password-error" : undefined}
                            />
                            {errors.password && <p id="password-error" role="alert">{errors.password.message}</p>}
                        </FormGroup>
                    </Col>
                </Row>

                {/* ROW FOUR */}
                <Row>
                    <Col sm="12" md="6">
                        <FormGroup className="d-flex align-items-center flex-wrap gap-3">
                            <Label className="col-form-label">Marriage Status</Label>
                            <Controller
                                name="married"
                                control={control}
                                render={({ field }) => (
                                    <>
                                        <ButtonGroup>
                                            <Button
                                                type="button"
                                                onClick={() => field.onChange("married")}
                                                color={field.value === "married" ? "warning" : "secondary"}
                                                aria-pressed={field.value === "married"}
                                            >
                                                Married
                                            </Button>
                                            <Button
                                                type="button"
                                                onClick={() => field.onChange("single")}
                                                color={field.value === "single" ? "warning" : "secondary"}
                                                aria-pressed={field.value === "single"}
                                            >
                                                Single
                                            </Button>
                                        </ButtonGroup>
                                        {errors.married && <p role="alert" id="married-error">{errors.married.message}</p>}
                                    </>
                                )}
                            />
                        </FormGroup>
                    </Col>

                    <Col sm="12" md="6">
                        <FormGroup className="d-flex align-items-center flex-wrap gap-3">
                            <Label htmlFor="submit" className="col-form-label">Submit</Label>
                            <ButtonGroup>
                                <Button id="submit" type="submit">Submit</Button>
                                <Button type="reset">Reset</Button>
                            </ButtonGroup>
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    );
}
