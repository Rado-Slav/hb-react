import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class ServiceDetailsContent extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <div className="services-details-area ptb-100">

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
                
                <div className="container">
                    <div className="services-details-video">
                        <div className="details-image">
                            <img src={require("../../images/service-details/services-details1.jpg")} alt="image" />
                            <div className="details-video">
                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="bx bx-play"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
 
                        <div className="text">
                            <h3>We Provide Useful Services</h3>
                            <p>Quuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quia non numquam eius modi tempora incidunt ut labore et dolore magnam dolor sit amet, consectetur.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                        </div>
                    </div>

                    <div className="services-details-overview bor-tb">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>Exceptional Best Products</h3>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>

                                    <div className="features-text">
                                        <h4>Core Development</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Define Your Choices</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/services-details2.jpg")} alt="image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="services-details-overview bor-tb">
                        <div className="row align-items-center">
                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-image">
                                    <img src={require("../../images/service-details/services-details3.jpg")} alt="image" />
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-12">
                                <div className="services-details-desc">
                                    <h3>We Provide Useful Services</h3>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>

                                    <div className="features-text">
                                        <h4>Core Development</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>

                                    <div className="features-text">
                                        <h4>Define Your Choices</h4>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
        );
    }
}

export default ServiceDetailsContent;