import React, { useEffect, useState } from 'react'
import { ValidateForm } from './ValidateForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import './Contact.css'
const Contact = () => {
  const [userdata, setUserdata] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (event) => {
    setUserdata((data) => {
      return { ...data, [event.target.name]: event.target.value }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError(ValidateForm(userdata));
    setIsSubmit(true);
  }
  useEffect(() => {
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError])

  return (
    <div>
      <section id="contact" className="contact">
        <div className="container">
          <div className="section-title">
            <h2>contact</h2>
            <p>Contact Us</p>
          </div>
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Bangalore 560072</p>
                </div>
                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>admin@amigosbusinesscorp.com</p>
                </div>
                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91 76192 21922</p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 mt-5 mt-lg-0">
              <form className="form-details" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input
                      type="text"
                      name="name"
                      value={userdata.name}
                      className="form-control"
                      id="name"
                      placeholder="Your Name"
                      onChange={handleChange}
                    />
                    {formError.name && <p className="error">{formError.name}</p>}
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email"
                      className="form-control"
                      name="email"
                      value={userdata.email}
                      id="email"
                      placeholder="Your email"
                      onChange={handleChange} />
                    {formError.email && <p className="error">{formError.email}</p>}
                  </div>
                </div>
                <div className="form-group mt-3">
                  <input type="text"
                    className="form-control"
                    name="subject"
                    value={userdata.subject}
                    id="subject"
                    placeholder="subject"
                    onChange={handleChange} />
                </div>
                {formError.subject && <p className="error">{formError.subject}</p>}
                <div className="form-group mt-3">
                  <textarea
                    className="form-control"
                    name="message"
                    value={userdata.message}
                    rows="5"
                    placeholder="message"
                    onChange={handleChange}>
                  </textarea>
                </div>
                <div>
                  {formError.message && <p className="error">{formError.message}</p>}
                  {Object.keys(formError).length === 0 && isSubmit ? (<div className='message'>Your message has been sent ThankYou!</div>) : (
                    <p></p>
                  )}
                </div>
                <div className="text-center"><button type="submit">Send Message</button></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export default Contact
