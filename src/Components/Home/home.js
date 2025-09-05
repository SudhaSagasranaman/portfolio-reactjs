import React from "react";
import pic from "./pic.jpeg"

export function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          {/* Text: full width on small, left on md+ */}
          <div className="col-12 col-md-6 home-left">
            <h1 className="hello-title">
              Hi, I’m <span className="accent">Sudha</span> <span className="wave">👋</span>
            </h1>

            <p className="role-line">
              <span className="role-item">Data Analytics</span>
              <span className="sep">|</span>
              <span className="role-item highlight">React JS</span>
              <span className="sep">|</span>
              <span className="role-item">Power BI</span>
            </p>

            <div className="d-flex justify-content-center align-items-center gap-2 mt-5 mb-3 ">
              <a href="#contact" className="btn-connect" aria-label="Connect Now">
                Connect Now
              </a>
              <a href="/Sudha_CV.pdf" className="btn-resume"  aria-label="View Resume">
                View Resume
              </a>
            </div>

            <div className="socials d-flex gap-2 mt-5">
              <a className="social-btn" href="https://github.com/your-id"  aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a className="social-btn" href="https://linkedin.com/in/your-id" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a className="social-btn" href="https://facebook.com/your-id" target="_blank" rel="noreferrer" aria-label="Facebook">
                <i className="bi bi-facebook"></i>
              </a>
              <a className="social-btn" href="mailto:you@email.com" aria-label="Email">
                <i className="bi bi-envelope"></i>
              </a>
            </div>
          </div>

          {/* Image: full width on small, right on md+ */}
          <div className="col-12 col-md-5  mt-5 home-right text-center">
            <img
              className="profile-img"
              src={pic}
              alt="Sudha profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
