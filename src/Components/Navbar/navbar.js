import React from "react";

export function Navbar() {
  return (
    <nav id="navbar" className="navbar navbar-expand-lg fixed-top shadow-sm">
      <div className="container-fluid fw-bold">
        <a className="navbar-brand fst-italic" href="#home">
          Jenakasudha S
        </a>

        {/* Hamburger for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              {/* Just add "active" class to Home */}
              <a className="nav-link active" href="#home">Home</a>
            </li>
            <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
            <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
            <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
