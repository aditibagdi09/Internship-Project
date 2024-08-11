import React, { useState } from "react";
import Address from "./mailForms/Address";
import { Button, Col, Row } from "react-bootstrap";
import ValidAndInvalid from "./mailForms/ValidAndInvalid";
import MailContent from "./mailForms/MailContent";

export default function Form() {
  const pageTitle = ["Address", "VaildAndInvalid", "MailContent"];
  const [pageno, setPageno] = useState(0);

  const pageHandler = () => {
    switch (pageno) {
      case 0:
        return <Address />;
      case 1:
        return <ValidAndInvalid />;
      case 2:
        return <MailContent />;
      default:
        return <Address />;
    }
  };

  return (
    <div className="form-container">
      <div className="header">
        <h3>Step {pageno + 1}</h3>
      </div>
      <div className="body row justify-content-center">
        <div className="col-md-10">{pageHandler()}</div>
      </div>
      <div className="footer">
        <Row>
          <Col></Col>
          <Col>
            {pageno !== pageTitle.length - 1 && (
              <Button
                className="m-3"
                onClick={() => {
                  setPageno(pageno + 1);
                }}
              >
                Next
              </Button>
            )}
          </Col>
        </Row>
      </div>
    </div>
  );
}