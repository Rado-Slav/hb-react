import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class AboutUs extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <section className="work-section pb-100">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="work-content">
                                <h3>Brainstorming, <span>Researching</span> Planning, Strategizing Work</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dood tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="work-status">
                                            <h3>
                                                <span className="odometer">50</span>
                                                <span className="sign-icon">K</span>
                                            </h3>
                                            <h4>Completed Project</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt ut labore et dolore.</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="work-status">
                                            <h3>
                                                <span className="odometer">98</span>
                                                <span className="sign-icon">%</span>
                                            </h3>
                                            <h4>Customer Satisfaction</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt ut labore et dolore.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 pr-0">
                            <div className="work-image">
                                <div className="work-video">
                                    <Link href="#play-video">
                                        <a
                                            onClick={e => {e.preventDefault(); this.openModal()}}
                                            className="video-btn popup-youtube"
                                        > 
                                            <i className="flaticon-play"></i>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </section>
        );
    }
}

export default AboutUs;