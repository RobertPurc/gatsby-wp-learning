import * as React from "react"
import Form from 'react-bootstrap/Form';
import PrimaryLayout from "../layouts/PrimaryLayout"

export default () => {
    return <PrimaryLayout column="col-10">
        <h1>
            contact us
        </h1>
        <Form>
            <Form.Group className="mb-3" controlId="contactForm.email">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.Subject">
                <Form.Label>subject</Form.Label>
                <Form.Control type="text" rows={3} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="contactForm.Message">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>
        </Form>
    </PrimaryLayout>

}
