import React, { Component } from 'react';
import Link from 'next/link';

class AboutContent extends Component {

    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="about-section bor-tb">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 p-0">
                            <div className="about-image">
                                <img src={require("../../images/about/about-2.jpg")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-tab">
                                <h2>About HB Mill Ltd.</h2>
                                <div className="bar"></div>
                                <p>HB DREAM MILL LTD is a full service web development and graphic design company located in Bulgaria that specializes in html and CMS based websites mainly under Drupal, and under other CMSs like Joomla!™ and WordPress as well. We build Drupal, WordPress, Joomla, XHTML, PHP, CSS and Flash powered websites. We design all kinds of websites and applications, as well as different publications, brochures, flyers, identity systems, logos, advertisements and more. Our goal is to help you create a unique and memorable identity through consistent design practices and many development techniques.

                                  Driven out by the passion and desire for creating and developing clean, professional and always up to date websites and applications, HB Dream Mill was found in 2009. After more than 7 years of professional and freelance web development and design, it was time to bring this passion and knowledge to another level.

                                  HB Dream Mill’s love of technology, technical experience and practical knowledge is part of every project the company works on. We believe that precise and constant communication with our clients is the key as time is the most limited resoure for every client, person as a whole. This is why we demand not only high level of professionalism for our team but also perfect organisational skills that could provide a strong foundation for a long lasting and win-win business-client relationship.

                                  What the client demands, we provide…Always accurate and professional!</p>

                                <div className="tab about-list-tab">
                                    {/* Tabs Nav */}
                                    <ul className="tabs">
                                        <li
                                            className="current"
                                            onClick={(e) => this.openTabSection(e, 'tab1')}
                                        >
                                            <span>History</span>
                                        </li>

                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab2')}
                                        >
                                            <span>Quality Aspect</span>
                                        </li>

                                        <li
                                            onClick={(e) => this.openTabSection(e, 'tab3')}
                                        >
                                            <span>Corporate Values</span>
                                        </li>
                                    </ul>
                                    
                                    {/* Tab content */}
                                    <div className="tab_content">
                                        {/* Tabs item */}
                                        <div id="tab1" className="tabs_item">
                                            <div className="text">
                                                <h3>HB Dream Mill Ltd was found in 2009 in Sofia, Bulgaria.</h3>

                                              <p>The company started as a small creative and inovative company with a team with many years of experience in the sphere of graphic and web design, web development, IT and multimedia and always moving with the latest trends.

                                              As an organized and flexible team we love to be challenged every day and always try to exceed our clients’ expectations.

                                                We understand that our success depends on our clients – this is why the success of your business is our highest priority. Regardless of  the project, we will continue working on it until we fulfil your requirements and you are completely satisfied.</p>
                                            </div>

                                            <Link href="/contact/#form-contact">
                                                <a className="default-btn">Discover More</a>
                                            </Link>
                                        </div>

                                        {/* Tabs item */}
                                        <div id="tab2" className="tabs_item">
                                            <div className="text">
                                                <h3>HB Dream Mill has been found based on several grounds:</h3>
                                            </div>

                                            <ul className="list">
                                                <li>
                                                    <i className="flaticon-tick"></i>
                                                    PROFESSIONALISM
                                                    <p>We are strategic thinkers with a strong work ethic, dedicated to clients, and always reliable and trustworthy. This allows us to maintain our satisfaction guarantee policy and be proud of the tremendous reputation that we have established.</p>
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick"></i>
                                                  VALUE
                                                  <p>Utilizing the most appropriate and the best-chosen technology, we are able to efficiently provide modern online solutions to your organization. Our long-earned know-how allows us to do this at the most affordable rates.</p>
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick"></i>
                                                  COMMITMENT
                                                  <p>As we understand that our success depends on the success of our clients we strive to exceed our clients’ expectations and ensure that their online goals are met. Our commitment to our clients has earned us an impressive portfolio covering a variety of industries all over the world. We have worked for small unknown companies to big corporations who always remained satisfied from our services.</p>
                                                </li>
                                                <li>
                                                    <i className="flaticon-tick"></i>
                                                  AVAILABILITY
                                                  <p>We are always available for our clients – never too busy to meet their requirements and expectations.</p>
                                                </li>
                                            </ul>

                                            <Link href="contact">
                                                <a className="default-btn">Discover More</a>
                                            </Link>
                                        </div>

                                        {/* Tabs item */}
                                        <div id="tab3" className="tabs_item">
                                            <div className="text">
                                              <h3>We are not in the web business serving users, but in the user business serving WEB.</h3>

                                              <p>HB Dream Mill Ltd works with a talanted team of web enthusiasts, dedicated designers, web developers and programmers, user-experience specialists and project managers who always care about  the level of service and quality of work they deliver. This results in well-executed websites, effective marketing campaigns, happy clients, and lasting relationships.

                                                Having completed many projects and having worked with a lot of clients, we’ve developed proven processes and best practices to ensure our projects are delivered successfully and on time.

                                                Whether you need a small website or short run brochure, or require a complex web application with cross media publishing, or you would like to have a new custom based online payment system for your e-commerce online shop we have the right mix of skills to deliver the product precisely tailored to your needs.

                                                Simply put – we know how  and what we are doing and we ALWAYS get the job done.</p>
                                            </div>

                                            <Link href="/contact">
                                                <a className="default-btn">Discover More</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutContent;