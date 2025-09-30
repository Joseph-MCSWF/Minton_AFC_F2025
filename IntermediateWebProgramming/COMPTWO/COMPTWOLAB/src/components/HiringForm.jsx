import {Col, Form, FormGroup, Input, Label, Row} from "reactstrap";
import "../styles/Hiring.css";

export default function HiringForm() {
    return(
        <div className="d-flex justify-content-center pt-5">
            <Form className="hiring-form w-100" style={{ maxWidth: 900 }}>
                <Row className="g-3 align-items-center">
                    <Col>
                        <Label htmlFor="firstName" className="col-form-label mb-0">First Name</Label>
                    </Col>
                    <Col>
                        <Input id="firstName" type="text" placeholder="First Name" />
                    </Col>
                    <Col>
                        <Label htmlFor="lastName" className="col-form-label mb-0">Last Name</Label>
                    </Col>
                    <Col>
                        <Input id="lastName" type="text" placeholder="Last Name" />
                    </Col>
                </Row>
            </Form>
        </div>


    )

}