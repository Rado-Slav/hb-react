import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import PricingCard from '../components/Pricing/PricingCard';
import DigitalExperience from '../components/Common/DigitalExperience';
import Footer from '../components/Layout/Footer';

class Pricing extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Pricing" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Pricing" 
                /> 
                <PricingCard />

                <div className="ptb-100">
                    <DigitalExperience />
                </div>

                <Footer />
            </React.Fragment>
        );
    }
}

export default Pricing;