import React from "react";
import "./css.css";

export default function GettingStarted() {
  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <div className="d-flex justify-content-center align-items-center vh-100 vw-100 gradient">
        <div>
          <h1 style={{ color: "white", fontSize: "4vmax" }}>
            Welcome to Cort<b style={{ fontSize: "4.25vmax" }}>X</b>
          </h1>
          <div className="hover" style={{ textAlign: "center" }}>
            <a
              href="/dashboard"
              style={{
                fontSize: "2vmax",
                padding: ".5rem",
                backgroundImage:
                  "-webkit-linear-gradient(90deg, rgb(180, 223, 243), rgb(163, 241, 202))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation:
                  "gradient 15s infinite ease-in, hue 1s infinite linear",
              }}
              className="text-align-center"
            >
              Get Started.
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
