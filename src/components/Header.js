import React from "react";
import { Container, Navbar } from "react-bootstrap";

export default function Header() {
  return (
    <div>
      <Navbar
        bg="light"
        expand="lg"
        className="shadow-lg p-3 mb-5 bg-white rounded"
      >
        <Container>
          <Navbar.Brand href="/" className="transition">
            <img
              src="logo.png"
              alt="logo"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span style={{ fontSize: "24px", fontWeight: "bold", color: "#2f2f2f" }}>
              Mailzy
            </span>
          </Navbar.Brand>
          <Navbar.Text className="transition">
            <i style={{ fontSize: "18px", color: "#666", fontStyle: "italic" }}>
              Mass-Mail Dispatcher
            </i>
          </Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
}