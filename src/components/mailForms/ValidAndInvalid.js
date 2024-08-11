import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import validator from "validator";

export default function ValidAndInvalid() {
  const toaddress = JSON.parse(sessionStorage.getItem("To address"));
  const validEmail = [];
  const invalidEmail = [];
  const submitHandler = () => {
    sessionStorage.setItem("To address", JSON.stringify(validEmail));
    //console.log(validEmail);
    alert(
      "You confirmed the valid email address. You Can go for the next Step"
    );
  };
  for (var i = 0; i < toaddress.length; i++) {
    if (toaddress[i] === "") continue;
    if (validator.isEmail(toaddress[i])) validEmail.push(toaddress[i]);
    else invalidEmail.push(toaddress[i]);
  }

  return (
    <div>
      <Row>
        <h6 style={{ color: "red" }} className="containerTransition">
          <span style={{ display: "block" }}>
            **Mail is sent Only to valid Email Ids
          </span>
          <span style={{ display: "block" }}>
            Press Ok Before the next step
          </span>
        </h6>
        <Col sm="6">
          <div
            className="m-1 shadow-lg p-3 bg-white rounded containerTransition"
            style={{ height: "50vh", overflowY: "scroll" }}
          >
            <h6>Valid EmailId - {validEmail.length}</h6>
            {validEmail && validEmail.map((email) => <p>{email}</p>)}
          </div>
        </Col>
        <Col sm="6">
          <div
            className="m-1 shadow-lg p-3 bg-white rounded containerTransition"
            style={{ height: "50vh", overflowY: "scroll" }}
          >
            <h6>InValid EmailId - {invalidEmail.length}</h6>
            {invalidEmail && invalidEmail.map((email) => <p>{email}</p>)}
          </div>
        </Col>
      </Row>
      <Button variant="primary" onClick={submitHandler}>
        OK
      </Button>
    </div>
  );
}
