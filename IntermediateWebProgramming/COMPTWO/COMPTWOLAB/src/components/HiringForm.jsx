import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import "../styles/Hiring.css";

export default function HiringForm() {
    return(
        <div className="d-flex justify-content-center pt-5">
            <Form className="hiring-form w-100" style={{ maxWidth: 1200 }}>
                {/*ROW ONE*/}
                <Row className="g-3 align-items-center">
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="firstName" className="col-form-label mb-0">First Name</Label>
                            <Input id="firstName" type="text" placeholder="First Name" />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="lastName" className="col-form-label mb-0">Last Name</Label>
                            <Input id="lastName" type="text" placeholder="Last Name" />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="phoneNumber" className="col-form-label mb-0">Phone Number</Label>
                            <Input id="phoneNumber" type="text" placeholder="Phone Number" />
                        </FormGroup>
                    </Col>
                </Row>
                {/*ROW TWO*/}
                <Row className="g-3 align-items-center">
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="firstName" className="col-form-label mb-0">Address</Label>
                            <Input id="firstName" type="text" placeholder="Address" />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="lastName" className="col-form-label mb-0">City</Label>
                            <Input id="lastName" type="text" placeholder="City" />
                        </FormGroup>
                    </Col>
                    <Col sm="12" md="4">
                        <FormGroup>
                            <Label htmlFor="phoneNumber" className="col-form-label mb-0">State</Label>
                            <Input id="phoneNumber" type="text" placeholder="State" />
                        </FormGroup>
                    </Col>
                </Row>
            </Form>
        </div>
    )
}