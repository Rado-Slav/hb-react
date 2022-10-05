import React, { Component } from 'react';
import Link from 'next/link';

class SidebarModal extends Component {

    state = {
        modal: false
    };
 
    closeModal = () => {
        this.props.onClick(this.state.modal);
    }

    render() {
        return (
            <React.Fragment>
                <div className={`sidebar-modal ${this.props.active}`}>
                    <div className="sidebar-modal-inner">
                        <div className="sidebar-about-area">
                            <div className="title">
                                <h2>About Us</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication. No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                            </div>
                        </div>

                        <div className="sidebar-contact-feed">
                            <h2>Contact</h2>

                            <div className="contact-form">
                                <form id="contactForm">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" className="form-control" placeholder="Your Name" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" className="form-control" placeholder="Your Email" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="phone_number" id="phone_number" className="form-control" placeholder="Your Phone" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6 col-md-6">
                                            <div className="form-group">
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" placeholder="Your Subject" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" cols="30" rows="6" required placeholder="Your Message"></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12 col-md-12">
                                            <div className="send-btn text-center">
                                                <button type="submit" className="btn send-btn-one">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="sidebar-contact-area">
                            <div className="contact-info">
                                <div className="contact-info-content">
                                    <h2>
                                        <a className="pnumber">+359 879 363 878</a>
                                        <span className="or">OR</span>
                                        <a className="email">office@hbmill.com</a>
                                    </h2>
            
                                    <ul className="social">
                                        <li>
                                            <Link href="https://www.facebook.com/HB-Dream-Mill-Ltd-116366011820081">
                                                <a target="_blank">
                                                    <i className="flaticon-facebook"></i>
                                                </a>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="https://twitter.com/HbMill">
                                                <a target="_blank">
                                                    <i className="flaticon-twitter"></i>
                                                </a>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Close Modal */}
                        <span onClick={this.closeModal} className="close-btn sidebar-modal-close-btn">
                            <i className="flaticon-cancel"></i>
                        </span>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default SidebarModal;