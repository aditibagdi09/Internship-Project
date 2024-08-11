import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import Papa from "papaparse";

export default function Address() {
  const [toAddress, setToAddress] = useState([]);
  const [fromAddress, setFromAddress] = useState(
    sessionStorage.getItem("From address")
      ? JSON.parse(sessionStorage.getItem("From address"))
      : ""
  );
  const submitHandler = (e) => {
    //console.log(fromAddress);
    //console.log(toAddress);
    const toAddressData = [];
    toAddress.map((row, index) => toAddressData.push(row.EmailAddress));
    //console.log(toAddressData);
    if (fromAddress === "" || toAddressData === []) {
      alert("Please fill the details before submitting");
    } else {
      sessionStorage.setItem("From address", JSON.stringify(fromAddress));
      sessionStorage.setItem("To address", JSON.stringify(toAddressData));
      alert(
        "File successfully uploaded! Go to next step to know the valid address"
      );
    }
  };
  const toAddressHandler = (e) => {
    const file = e.target.files[0];
    Papa.parse(file, {
      header: true,
      complete: (result) => {
        setToAddress(result.data);
      },
    });
  };
  return (
    <div>
      <div className="m-3 shadow-lg p-3 bg-white rounded containerTransition">
        <h5>Fill the Form and To Mail Address</h5>
        <Container
          className="justify-content-left"
          style={{ textAlign: "left" }}
        >
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="fromMailAddress">
              <Form.Label column sm="2">
                From Address
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="mt-3"
                  type="email"
                  value={fromAddress}
                  onChange={(e) => setFromAddress(e.target.value)}
                  required
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="toMailAddress">
              <Form.Label column sm="2">
                To Address
                <span
                  style={{ color: "red", display: "block", fontSize: "10px" }}
                >
                  (CSV files)
                </span>
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  className="mt-3"
                  type="file"
                  accept=".csv"
                  onChange={toAddressHandler}
                  required
                />
              </Col>
              <p style={{ color: "red" }}>
                **Make sure email ids in the csv file should be under the column
                EmailAddress
              </p>
            </Form.Group>
          </Form>
        </Container>
        <Button variant="primary" onClick={submitHandler}>
          Submit
        </Button>
      </div>
    </div>
  );
}
