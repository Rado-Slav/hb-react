import React, { Component } from 'react';
import NavbarStyleTwo from '../components/Layout/NavbarStyleTwo';
import Banner from '../components/HomeFour/Banner';
import WorkingProcess from '../components/HomeFour/WorkingProcess';
import AboutUs from '../components/HomeFour/AboutUs';
import Services from '../components/HomeFour/Services';
import Portfolio from '../components/HomeFour/Portfolio';
import OurAchievement from '../components/HomeFour/OurAchievement';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import Subscribe from '../components/Common/Subscribe';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import FaqsContent from '../components/Faqs/FaqsContent';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/Layout/Footer';

class Index4 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarStyleTwo />
                <Banner />
                <WorkingProcess /> 
                <AboutUs />
                <Services />
                <Portfolio />
                <OurAchievement />
                <TeamStyleTwo />
                <Subscribe />

                <div className="ptb-100">
                    <FeedbackStyleOne />
                </div>

                <FaqsContent />
                <BlogPost />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index4;