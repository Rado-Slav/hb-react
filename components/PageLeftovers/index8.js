import React, { Component } from 'react';
import NavbarStyleTwo from '../components/Layout/NavbarStyleTwo';
import Banner from '../components/HomeEight/Banner';
import Features from '../components/HomeEight/Features';
import AboutUs from '../components/HomeEight/AboutUs';
import Services from '../components/HomeEight/Services';
import ServiceDevelopment from '../components/HomeEight/ServiceDevelopment';
import IntroVideo from '../components/HomeEight/IntroVideo';
import WhyChooseUs from '../components/HomeEight/WhyChooseUs';
import Projects from '../components/HomeEight/Projects';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/Layout/Footer';

class Index8 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarStyleTwo />
                <Banner />
                <Features /> 
                <AboutUs />
                <Services />
                <ServiceDevelopment />
                <IntroVideo />
                <WhyChooseUs />
                <Projects />
                <FeedbackStyleOne />
                <BlogPost />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index8;