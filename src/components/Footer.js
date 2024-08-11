import React from "react";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#2f2f2f",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        borderTop: "1px solid #444",
      }}
    >
      <h4 style={{ fontSize: "18px", marginBottom: "10px" }}>
        Designed and Developed by{" "}
        <a
          style={{
            textDecoration: "none",
            color: "#66d9ef",
          }}
          href="https://www.linkedin.com/in/aditi-bagdi-ab11801b5/"
        >
          Aditi Bagdi
        </a>
      </h4>
      <ul
        style={{
          listStyle: "none",
          padding: 0,
          margin: 0,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <li style={{ marginRight: "20px" }}>
          <a
            style={{
              textDecoration: "none",
              color: "#66d9ef",
            }}
            href="https://www.linkedin.com/in/aditi-bagdi-ab11801b5/"
          >
            <img
              src="https://img.icons8.com/color/48/000000/linkedin.png"
              alt="LinkedIn"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </li>
        <li style={{ marginRight: "20px" }}>
          <a
            style={{
              textDecoration: "none",
              color: "#66d9ef",
            }}
            href="https://github.com/aditibagdi09"
          >
            <img
              src="https://img.icons8.com/color/48/000000/github.png"
              alt="GitHub"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </li>
        <li>
          <a
            style={{
              textDecoration: "none",
              color: "#66d9ef",
            }}
            href="https://twitter.com/aditi_bagdi"
          >
            <img
              src="https://img.icons8.com/color/48/000000/twitter.png"
              alt="Twitter"
              style={{ width: "24px", height: "24px" }}
            />
          </a>
        </li>
      </ul>
    </div>
  );
}
