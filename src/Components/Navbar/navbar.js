import React from "react";

export function Navbar() {
  return (
    <>
      <div id="navbar" className="fixed-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-white text-dark shadow-sm p-1">
          <div className="container-fluid fs-6 fw-bold">
            <a className="navbar-brand h3 fst-italic fw-bold m-0" href="#home">
              Jenakasudha S
            </a>

            {/* Hamburger button (visible on small screens) */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            {/* Collapsible menu */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto small">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#home">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#skills">Skills</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#projects">Projects</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
