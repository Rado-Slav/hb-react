import React, { Component } from 'react';
import emailjs from 'emailjs-com';
import apiexport from '../../api/apikeys'

import Link from 'next/link';

class ContactForm extends Component {

    render() {

      const onSubmit = (e) => {
        e.preventDefault()
        emailjs.sendForm(apiexport.service_id, apiexport.template_id, e.target,apiexport.user_id)
        .then(result => {
            alert('Message Sent, We will get back to you shortly', result.text);
          },
          error => {
            alert('An error occured, Plese try again',error.text)
          })
      }

        return (
            <section id="form-contact" className="contact-section">
                <div className="container">
                    <div className="contact-text">
                        <h3>Have Any Questions About Us?</h3>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="contact-form">
                                <form id="contactForm" onSubmit = {onSubmit}>
                                    <div className="form-group">
                                        <label>User Name</label>
                                        <input type="text" name="name" id="name" className="form-control" required placeholder="User Name" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                    </div>
                                    
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="msg_subject" id="msg_subject" className="form-control" required  placeholder="Your Subject" />
                                    </div>
                                
                                    <div className="form-group">
                                        <label>Message</label>
                                        <textarea name="message" className="form-control" id="message" cols="30" rows="6" required  placeholder="Your Message"></textarea>
                                    </div>

                                    <div className="send-btn">
                                        <button type="submit" className="default-btn">
                                            Send Message
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="contact-image">
                                <img src={require("../../images/contact.jpg")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ContactForm;