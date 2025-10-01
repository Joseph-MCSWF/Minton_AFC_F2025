import { Button, ButtonGroup, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "../styles/Hiring.css";

export default function HiringForm({
                                       values,
                                       onChange,
                                       onBlur,
                                       onMarriedChange,
                                       onSubmit,
                                       onReset,
                                       states = [],
                                   }) {
    return (
        <div className="d-flex justify-content-center pt-5">
            <Form
                className="hiring-form w-100"
                autoComplete="off"
                noValidate
                style={{ maxWidth: 1500 }}
                onSubmit={onSubmit}
                onReset={onReset}
            >
                {/* ROW ONE */}
                <Row className="g-3 pb-5 align-items-center">
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="firstName" className="col-form-label mb-0">First Name</Label>
                            <Input
                                id="firstName"
                                name="firstName"
                                type="text"
                                placeholder="First Name"
                                required
                                maxLength={20}
                                value={values?.firstName ?? ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="lastName" className="col-form-label mb-0">Last Name</Label>
                            <Input
                                id="lastName"
                                name="lastName"
                                type="text"
                                placeholder="Last Name"
                                maxLength={20}
                                value={values?.lastName ?? ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="phone" className="col-form-label mb-0">Phone Number</Label>
                            <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                placeholder="111-222-3333"
                                required
                                value={values?.phone ?? ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
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
                                name="address1"
                                type="text"
                                placeholder="Address"
                                required
                                maxLength={60}
                                value={values?.address1 ?? ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="city" className="col-form-label mb-0">City</Label>
                            <Input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="City"
                                required
                                maxLength={29}
                                value={values?.city ?? ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="state" className="col-form-label mb-0">State</Label>
                            <Input
                                id="state"
                                name="state"
                                type="select"
                                className="form-select"
                                required
                                value={values?.state ?? ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            >
                                <option value="" disabled>Choose…</option>
                                {states.map((s) => (
                                    <option key={typeof s === "string" ? s : s.value}
                                            value={typeof s === "string" ? s : s.value}>
                                        {typeof s === "string" ? s : (s.label ?? s.value)}
                                    </option>
                                ))}
                            </Input>
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
                                name="age"
                                type="number"
                                placeholder="Age"
                                required
                                min={21}
                                max={99}
                                value={values?.age ?? 21}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="email" className="col-form-label mb-0">Email</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="something@something.com"
                                required
                                value={values?.email ?? ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="password" className="col-form-label mb-0">Password</Label>
                            <Input
                                id="password"
                                name="password"
                                type="password"
                                placeholder="click for rules"
                                required
                                value={values?.password ?? ""}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        </FormGroup>
                    </Col>
                </Row>

                {/* ROW FOUR */}
                <Row>
                    <Col sm="12" md="6">
                        <FormGroup className="d-flex align-items-center flex-wrap gap-3">
                            <Label htmlFor="married" className="col-form-label">Marriage Status</Label>
                            <ButtonGroup>
                                <Button
                                    type="button"
                                    onClick={() => onMarriedChange?.("married")}
                                    color={values?.married === "married" ? "warning" : "secondary"}
                                >
                                    Married
                                </Button>
                                <Button
                                    type="button"
                                    onClick={() => onMarriedChange?.("single")}
                                    color={values?.married === "single" ? "warning" : "secondary"}
                                >
                                    Single
                                </Button>
                            </ButtonGroup>
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
