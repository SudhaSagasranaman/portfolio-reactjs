import React from "react";
export function Contact() {

    const showAlert = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let tel = document.getElementById("tel").value;
    let message = document.getElementById("msg").value;
    alert("Name:  " + name + "\nEmail:  " + email  +  "\nTelephone  " + tel +"\nMessage:  " + message+"\n\n\n Message sent Successfully");
  };

    return (
        <>
            <div id="contact" class="container d-flex justify-content-center align-items-center vh-100">
                <div class="row justify-content-center w-100 ">
                    <div class="col-12 col-md-6 col-lg-5  p-5">
                        <h5> Let's talk</h5><br /><br />
                        <h5><i className="bi bi-envelope-fill me-2 small"></i> sudhasagas@gmail.com</h5>
                        <h5><i className="bi bi-telephone-fill me-2 small"></i> 9980566224</h5>
                    </div>

                    <div class=" border-1 col-12 col-md-6 col-lg-5 p-5">

                        <label class="small">Your Name</label><br />
                        <input type="text" id = "name" className="form-control border-0 border-bottom rounded-0" placeholder="Name" />
                        <label class="small">Your Email</label><br />
                        <input type="email" id = "email" className="form-control border-0 border-bottom rounded-0" placeholder="Email" />
                        <label class="small">Your Phone No</label><br />
                        <input type="number" id = "tel" className="form-control border-0 border-bottom rounded-0" placeholder="Phone Number" />
                        <label class="small">Write your message here</label><br />
                        <textarea className="form-control" rows="3" placeholder="Message" id = "msg"></textarea>
                        <button type="submit" className="btn btn-primary d-block mx-auto w-25 mt-2" onClick={showAlert}>Submit</button>
  


                    </div>

                </div>
            </div>
        </>
    );
}