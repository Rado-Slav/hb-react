import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import FaqsContent from '../components/Faqs/FaqsContent';
import DigitalExperience from '../components/Common/DigitalExperience';
import Footer from '../components/Layout/Footer';

class Faq extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="FAQ" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="FAQ" 
                /> 

                <div className="ptb-100">
                    <FaqsContent />
                </div>

                <div className="pb-100">
                    <DigitalExperience />
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Faq;