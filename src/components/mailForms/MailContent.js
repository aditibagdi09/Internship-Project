import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import EditText from "../editor/EditText";

export default function MailContent() {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const submitHandler = () => {
    const fromAddress = JSON.parse(sessionStorage.getItem("From address"));
    const toAddress = JSON.parse(sessionStorage.getItem("To address"));
    var address = "";
    for (var i = 0; i < toAddress.length; i++) {
      if (toAddress[i] === "") continue;
      else if (i === toAddress.length - 1) address += toAddress[i];
      else address += toAddress[i] + ", ";
    }
    console.log(body);
    window.sendEmail(fromAddress, address, subject, body);
  };
  return (
    <div>
      <div className="m-3 shadow-lg p-3 bg-white rounded containerTransition">
        <h5>Fill the Mail Content</h5>
        <Container
          className="justify-content-left"
          style={{ textAlign: "left" }}
        >
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="Subject">
              <Form.Label column sm="2">
                Subject
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="Subject">
              <Form.Label column sm="2">
                Body
              </Form.Label>
              <Col sm="10">
                <EditText body={body} setBody={setBody} />
              </Col>
            </Form.Group>
          </Form>
        </Container>
        <Button variant="primary" onClick={submitHandler}>
          Send the mail
        </Button>
      </div>
    </div>
  );
}
