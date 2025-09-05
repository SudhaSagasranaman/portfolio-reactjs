import React from "react";


export function Contact() {
  const showAlert = () => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const tel = document.getElementById("tel").value;
    const message = document.getElementById("msg").value;
    alert(
      "Name:  " +
        name +
        "\nEmail:  " +
        email +
        "\nTelephone  " +
        tel +
        "\nMessage:  " +
        message +
        "\n\n\n Message sent Successfully"
    );
  };

  return (
    <div id="contact" className="container-fluid d-flex justify-content-center align-items-center contact-section">
      <div className="row justify-content-center w-100 gx-4 align-items-center">
        {/* Left side: Info + image */}
        <div className="col-12 col-md-6 col-lg-5 p-3 d-flex flex-column align-items-center text-center contact-left">
          <img
            src="https://media.istockphoto.com/id/1224478344/vector/woman-holding-business-message-in-envelope.jpg?s=612x612&w=0&k=20&c=IhHhIRmuivXlWx4ywUjvGyCwWULL1pzdkLDxWEgG41A="
            alt="contact illustration"
            className="contact-prof-img mb-3"
          />
          <h5 className="mb-1">Let's talk</h5>
          <h6 className="mb-1">
            <i className="bi bi-envelope-fill me-2 small"></i> sudhasagas@gmail.com
          </h6>
          <h6 className="mb-0">
            <i className="bi bi-telephone-fill me-2 small"></i> 9980566224
          </h6>
        </div>

        {/* Right side: Form */}
        <div className="col-12 col-md-6 col-lg-5 p-3 d-flex justify-content-center">
          <div className="contact-card p-3">
            <form onSubmit={(e) => e.preventDefault()} className="w-100">
              <div className="mb-2">
                <label className="small form-label">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control form-control-sm contact-input"
                  placeholder="Name"
                />
              </div>

              <div className="mb-2">
                <label className="small form-label">Your Email</label>
                <input
                  type="email"
                  id="email"
                  className="form-control form-control-sm contact-input"
                  placeholder="Email"
                />
              </div>

              <div className="mb-2">
                <label className="small form-label">Your Phone No</label>
                <input
                  type="tel"
                  id="tel"
                  className="form-control form-control-sm contact-input"
                  placeholder="Phone Number"
                />
              </div>

              <div className="mb-2">
                <label className="small form-label">Write your message here</label>
                <textarea
                  className="form-control contact-textarea"
                  rows="4"
                  placeholder="Message"
                  id="msg"
                ></textarea>
              </div>

              <div className="d-flex justify-content-center mt-2">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm px-3"
                  onClick={showAlert}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
