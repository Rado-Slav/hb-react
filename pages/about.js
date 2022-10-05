import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/About/AboutContent';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import Footer from '../components/Layout/Footer';

class About extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="About" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="About" 
                /> 
                <AboutContent />

                <div className="pb-100">
                    <FeedbackStyleOne />
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default About;