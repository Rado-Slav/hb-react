import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import Banner from '../components/HomeTwo/Banner';
import Features from '../components/HomeOne/Features';
import AboutUs from '../components/HomeTwo/AboutUs';
import Services from '../components/HomeTwo/Services';
import FeaturesTwo from '../components/HomeTwo/FeaturesTwo';
import WorkingProcess from '../components/HomeTwo/WorkingProcess';
import WhyChooseUs from '../components/HomeTwo/WhyChooseUs';
import FunFacts from '../components/Common/FunFacts';
import Projects from '../components/HomeTwo/Projects';
import TeamStyleOne from '../components/Common/TeamStyleOne';
import SkillsArea from '../components/HomeTwo/SkillsArea';
import BlogPost from '../components/Common/BlogPost';
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';
import PartnerStyleOne from '../components/Common/PartnerStyleOne';
import Footer from '../components/Layout/Footer';

class Index2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Banner />
                <Features />  
                <AboutUs />
                <Services />
                <FeaturesTwo />
                <WorkingProcess />
                <WhyChooseUs />
                <FunFacts />
                <Projects />
                <TeamStyleOne />
                <SkillsArea />
                <BlogPost />
                <FeedbackStyleTwo />
                <PartnerStyleOne />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index2;