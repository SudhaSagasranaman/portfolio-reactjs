import React from "react";
export function Home(){
    return(
        <>
        <div id = "home" className="container d-flex align-items-center justify-content-center vh-100 text-center mt-5">
        <div className="row align-items-center justify-content-center">
    
    {/* Left Side - Text */}
    <div className="col-12 col-sm-12 col-md-6 col-lg-6">
          <h1 className="fw-bold">Hi, I'm Sudha 👋</h1>
          <p className="lead">Data Analytics | React JS | Power BI</p>
          <a href="#contact" className="btn btn-warning rounded-pill mt-3">Connect now</a>
    </div>

    {/* Right Side - Image */}
    <div className=" col-12 col-lg-3 col-md-6 text-center">
      <img src="https://www.pikpng.com/pngl/b/79-798106_girl-emoji-iphone-iphoneemoji-emoticon-woman-tipping-hand.png" 
        alt="Profile"
        className="img-fluid rounded-circle shadow"/>
    </div>
    </div>
    </div>
        </>
    );
}