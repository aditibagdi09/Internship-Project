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
            <img width="50" height="50" src="https://img.icons8.com/ios-filled/50/apple-mail.png" alt="apple-mail"/>{" "}
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
