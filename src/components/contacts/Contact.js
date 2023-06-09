import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Row, Col } from "react-bootstrap";
import InputGroup from 'react-bootstrap/InputGroup';
import { MdEmail } from "react-icons/md";
import { useState } from 'react';
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");
    const contactEmail = "us8896664511@gmail.com";
    const submitForm = () => {
        window.open(
            `mailto:${contactEmail}?subject=${encodeURIComponent(
                subject
            )}&body=${encodeURIComponent(name)} (${encodeURIComponent(
                email
            )}): ${encodeURIComponent(message)}`
        );
    };
    return (
        <div className="Contact-Container">
            <Row className='contact-row'>
                <Col style={{ display: "flex", flexWrap: "no-wrap", marginLeft: "0px", paddingLeft: "0px" }}>
                    <MdEmail className='contact-coli' />
                    <div className='contact-colx' >
                        <b>Get in touch with me</b>
                    </div>
                </Col>
            </Row>
            <Row className="contact-width">
                <Col className="form" >
                    <Form>
                        <InputGroup as={Row} className="mb-3 low">
                            <Form.Label column sm={2}>
                                Name
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="text"
                                    value={name}
                                    id="contactName"
                                    name="contactName"
                                    onChange={(e) => setName(e.target.value)} />
                            </Col>
                        </InputGroup>
                        <InputGroup as={Row} className="mb-3 low">
                            <Form.Label column sm={2}>
                                Email
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control type="Email"
                                    value={email}
                                    id="contactEmail"
                                    name="contactEmail"
                                    onChange={(e) => setEmail(e.target.value)} />
                            </Col>
                        </InputGroup>
                        <InputGroup as={Row} className="mb-3 low">
                            <Form.Label column sm={2}>
                                Subject
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control as="textarea" aria-label="With textarea" type="text"
                                    value={subject}
                                    id="contactSubject"
                                    name="contactSubject"
                                    onChange={(e) => setSubject(e.target.value)} style={{ resize: 'none' }} />
                            </Col>
                        </InputGroup>
                        <InputGroup as={Row} className="mb-3 low">
                            <Form.Label column sm={2}>
                                Message
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control as="textarea" aria-label="With textarea" value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="contactMessage"
                                    name="contactMessage" style={{ resize: 'none', height: "200px" }} />
                            </Col>
                        </InputGroup>
                        <InputGroup as={Row} className="mb-3 maxi">
                            <Col style={{ marginLeft: "0px", paddingLeft: "0px" }}>
                                <Button onClick={submitForm} type="submit">Submit</Button>
                            </Col>
                        </InputGroup>
                    </Form>
                </Col>
                <Col className='contact-info' style={{ lineHeight: "2", fontFamily: "Times New Roman" }}>
                    <h3>About and Phone</h3>
                    Utkarsh Singh
                    <br />
                    us8896664511@gmail.com
                    <br />
                    Mirzapur, 231001
                    <br />
                    Uttar Pradesh, India
                    <br />
                    +91 8896664511
                </Col>
            </Row>
        </div>
    );
}

export default Contact;