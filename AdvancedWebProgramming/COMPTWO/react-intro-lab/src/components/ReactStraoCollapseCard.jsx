import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';


function ExampleCard() {
    return (

        <Card>

            <CardBody>

                <CardTitle tag="h5">Card Title</CardTitle>

                <CardText>This is a simple card example using Reactstrap.</CardText>
            </CardBody>
        </Card>
    );
}


export default ExampleCard;