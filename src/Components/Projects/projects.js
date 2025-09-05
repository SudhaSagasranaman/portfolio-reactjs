import React from "react";
import milkymist from './mm7.png'
import powerbi from './pbi-4.png'
import powerbi1 from './pbi-1.png'
import powerbi2 from './pbi-2.png'
import powerbi3 from './pbi-3.png'
import powerbi4 from './pbi-5.png'
import mm1 from './mm-1.png'
import mm3 from './mm3.png'
import mm2 from './mm2-2.png'
import mm4 from './mm4.png'
import mm6 from './mm6.png'

export  function Projects() {
  return (
    <>
    <section id="projects" className="container-fluid py-5">
      <div className="containe-fluid text-center">
        <h2 className="fw-bold mb-4">Projects</h2>
        <div className="row">

          {/* Project 1 */}
          <div className="col-md-4 mb-4">
            <div className="project-card">
              <img src={powerbi} alt="Power BI Dashboard" className="project-img" />
              <div className="overlay">
                <h5>Power BI Dashboard</h5>
                <p>Sales & performance analytics dashboard built using Power BI.</p>
                <a href="https://drive.google.com/file/d/1OlbUEO-SqXVJIq9hOKZxyCAkw87tKWyy/view?usp=drive_link" className="btn btn-light btn-sm">View Project</a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="col-md-4 mb-4">
            <div className="project-card">
              <img src= "https://www.ntiva.com/hs-fs/hubfs/Machine%20learning%20(1).png?width=1200&height=627&name=Machine%20learning%20(1).png" alt="Machine Learning Models" className="project-img" />
              <div className="overlay">
                <h5>Machine Learning Models</h5>
                <p>ML models for classification and regression using Scikit-learn, Pandas, NumPy.</p>
                <a href="https://github.com/SudhaSagasranaman/Cancer_prediction_Using-Logistics-Regression-model-program" className="btn btn-light btn-sm">View on GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="col-md-4 mb-4">
            <div className="project-card">
              <img src= {milkymist} alt="Milkymist Website" className="project-img" />
              <div className="overlay">
                <h5>Milkymist Website</h5>
                <p>Frontend website built with React, Bootstrap, and CSS.</p>
                <a href="https://sudhasagasranaman.github.io/Milkymist-ReactJs/" className="btn btn-light btn-sm">View Project</a>
              </div>
            </div>
          </div>

        {/* --- Bottom Row (Carousel) --- */}
<div className="row">
  <div className="col-12">
    <div
      id="projectsCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">

        {/* Slide 1 */}
        <div className="carousel-item active">
          <img src={powerbi} alt="Power BI Dashboard" className="carousel-img" />
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img src={powerbi1} alt="Power BI Dashboard 1" className="carousel-img" />
        </div>

        {/* Slide 3 */}
        <div className="carousel-item">
          <img src={powerbi2} alt="Power BI Dashboard 2" className="carousel-img" />
        </div>

        {/* Slide 4 */}
        <div className="carousel-item">
          <img src={powerbi3} alt="Power BI Dashboard 3" className="carousel-img" />
        </div>

        {/* Slide 5 */}
        <div className="carousel-item">
          <img src={powerbi4} alt="Power BI Dashboard 4" className="carousel-img" />
        </div>

        {/* Slide 6 */}
        <div className="carousel-item">
          <img src={milkymist} alt="Milkymist Website" className="carousel-img" />
        </div>

        {/* Slide 7 */}
        <div className="carousel-item">
          <img src={mm1} alt="Milkymist Screenshot 1" className="carousel-img" />
        </div>

        <div className="carousel-item">
          <img src={mm2} alt="Milkymist Screenshot 2" className="carousel-img" />
        </div>

        <div className="carousel-item">
          <img src={mm3} alt="Milkymist Screenshot 3" className="carousel-img" />
        </div>

        <div className="carousel-item">
          <img src={mm4} alt="Milkymist Screenshot 4" className="carousel-img" />
        </div>

        <div className="carousel-item">
          <img src={mm6} alt="Milkymist Screenshot 5" className="carousel-img" />
        </div>
      </div>

      {/* Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#projectsCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#projectsCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>
    </div>
  </div>
</div>


  
      </div>
      </div>
    </section>
    </>
  );

}








      
      
      
      
      
      
    

