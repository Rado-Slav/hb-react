import React, { Component } from 'react';
import NavbarStyleTwo from '../components/Layout/NavbarStyleTwo';
import Banner from '../components/HomeSeven/Banner';
import Features from '../components/HomeSeven/Features';
import AboutTech from '../components/HomeSeven/AboutTech';
import DigitalMarketing from '../components/HomeSeven/DigitalMarketing';
import Services from '../components/HomeSeven/Services';
import WhyChooseUs from '../components/HomeSeven/WhyChooseUs';
import DigitalExperience from '../components/Common/DigitalExperience';
import TeamStyleOne from '../components/Common/TeamStyleOne';
import FaqsContent from '../components/Faqs/FaqsContent';
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/Layout/Footer';

class Index7 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarStyleTwo />
                <Banner />
                <Features />
                <AboutTech />
                <DigitalMarketing />
                <Services />
                <WhyChooseUs />
                <DigitalExperience />
                <TeamStyleOne />

                <div className="pb-100">
                    <FaqsContent />
                </div>

                <FeedbackStyleTwo />
                <BlogPost />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index7;