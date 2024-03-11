import * as React from "react"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Form from 'react-bootstrap/Form';


export default () => {
    return <div>
        <Header title="home page tile"></Header>
        <div className="container">
            <div className="row justify-content-md-center">
                <div className="col-10 p-5">
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
                </div>
            </div>
        </div>
        <Footer></Footer>

    </div>
}
