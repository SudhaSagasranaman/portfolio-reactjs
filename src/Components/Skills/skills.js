import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";

export function Skills() {
  return (
    <section id="skills" className="container-fluid py-5">
      <div className="container text-center">
        <h2 className="fw-bold mb-4">Skills</h2>

        <div className="row g-4">
          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-code-slash fs-2 mb-2"></i>
              <h5>Python</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-database fs-2 mb-2"></i>
              <h5>SQL</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-bar-chart-line-fill fs-2 mb-2"></i>
              <h5>Power BI</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-table fs-2 mb-2"></i>
              <h5>Excel</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-graph-up fs-2 mb-2"></i>
              <h5>Tableau</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-cpu fs-2 mb-2"></i>
              <h5>Machine Learning</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-lightning-charge-fill fs-2 mb-2"></i>
              <h5>React JS</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-bootstrap-fill fs-2 mb-2"></i>
              <h5>Bootstrap</h5>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="card p-3">
              <i className="bi bi-file-code-fill fs-2 mb-2"></i>
              <h5>HTML & CSS</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
