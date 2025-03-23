import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);
import baseUrl from "../../utils/baseUrl";

const alertContent = () => {
  MySwal.fire({
    title: "Congratulations!",
    text: "Your message was successfully send and will back to you soon",
    icon: "success",
    timer: 2000,
    timerProgressBar: true,
    showConfirmButton: false,
  });
};

// Form initial state
const INITIAL_STATE = {
  name: "",
  email: "",
  number: "",
  subject: "",
  text: "",
};

const ContactForm = () => {
  const [contact, setContact] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevState) => ({ ...prevState, [name]: value }));
    // console.log(contact)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = `${baseUrl}/api/contact`;
      const { name, email, number, subject, text } = contact;
      const payload = { name, email, number, subject, text };
      const response = await axios.post(url, payload);
      console.log(response);
      setContact(INITIAL_STATE);
      alertContent();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="main-contact-area ptb-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-8">
              <div className="contact-wrap">
                <div className="contact-form">
                  <div className="contact-title">
                    <h2>Write Us</h2>
                  </div>

                  <form id="contactForm" onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Name</label>
                          <input
                            type="text"
                            name="name"
                            className="form-control"
                            value={contact.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Email Address</label>
                          <input
                            type="text"
                            name="email"
                            className="form-control"
                            value={contact.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            type="text"
                            name="number"
                            className="form-control"
                            value={contact.number}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-6 col-md-6">
                        <div className="form-group">
                          <label>Subject</label>
                          <input
                            type="text"
                            name="subject"
                            className="form-control"
                            value={contact.subject}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-md-12">
                        <div className="form-group">
                          <label>Message</label>
                          <textarea
                            name="text"
                            className="form-control"
                            cols="30"
                            rows="5"
                            value={contact.text}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>

                      <div className="col-lg-12 col-sm-12">
                        <button type="submit" className="default-btn btn-two">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="contact-info">
                <h3>Our contact details</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod.
                </p>

                <ul className="address">
                  <li className="location">
                    <i className="bx bxs-location-plus"></i>
                    <span>Address</span>
                    6890 Blvd, The Bronx, NY 1058 New York, USA
                  </li>
                  <li>
                    <i className="bx bxs-phone-call"></i>
                    <span>Phone</span>
                    <a href="tel:+1-(514)-312-5678">+1 (514) 312-5678</a>
                    <a href="tel:+1-(514)-312-6677">+1 (514) 312-6677</a>
                  </li>
                  <li>
                    <i className="bx bxs-envelope"></i>
                    <span>Email</span>
                    <a href="mailto:hello@nezox.com">hello@nezox.com</a>
                    <a href="#">skype: example</a>
                  </li>
                </ul>

                <div className="sidebar-follow-us">
                  <h3>Follow us:</h3>

                  <ul className="social-wrap">
                    <li>
                      <a href="https://twitter.com/" target="_blank">
                        <i className="bx bxl-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/" target="_blank">
                        <i className="bx bxl-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/" target="_blank">
                        <i className="bx bxl-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/" target="_blank">
                        <i className="bx bxl-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
