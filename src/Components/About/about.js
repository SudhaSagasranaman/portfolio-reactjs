import React from "react";

export function About() {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center g-4">

          {/* Left: text */}
          <div className="col-lg-7 text-center text-lg-start">
            <h2 className="fw-bold mb-4">About Me</h2>
            <p className="mb-3">
              With experience as a <strong>C# .NET Developer</strong> in R&D projects,
              I restarted my career after a break by reskilling in
              <strong> Data Analytics, Machine Learning, and Frontend Development</strong>.
              I enjoy turning data into clear stories and building clean, responsive UIs.
            </p>

            <p>
              My stack: <strong>Python, SQL, Power BI, Tableau, Excel</strong> (ML basics),
              <strong> React, Bootstrap, HTML/CSS</strong>.
              Projects include a <strong>Power BI Sales Dashboard</strong> and a
              <strong> Milky Mist website</strong> using React + Bootstrap.
            </p>
          </div>

          {/* Right: different illustration */}
          <div className="col-lg-5 text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1995/1995574.png" 
              alt="Developer at work"
              className="img-fluid"
              style={{ maxWidth: "280px" }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
