import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';
import Link from 'next/link';
import BlogSidebar from '../components/Blog/BlogSidebar';

class Blog2 extends Component {

    state = {
        planets: []
    }

    componentDidMount() {
        fetch('https://swapi.dev/api/planets/')
          .then((response) => response.json())
          .then(data => {
              this.setState({ planets: data.results }), console.log(this.state.planets);

        });
    }

    render() {

        return (
            <React.Fragment>
                <Navbar />
                <PageBanner
                    pageTitle="Blog Right Sidebar"
                    homePageUrl="/"
                    homePageText="Home"
                    activePageText="Blog Right Sidebar"
                />


                <section className="blog-section ptb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row">
                                  {this.state.planets.map(each =>
                                    <div key={each.name} className="col-lg-6 col-md-6">
                                      <div className="single-blog">
                                        <div className="image">
                                          <Link href="/blog-details">
                                            <a>
                                              <img src={require("../images/blog/blog1.jpg")} alt="image" />
                                            </a>
                                          </Link>
                                        </div>

                                        <div className="content">
                                          <span>Diameter: {each.diameter}</span>
                                          <h3>
                                            <Link href="/blog-details">
                                              <a>{each.name}</a>
                                            </Link>
                                          </h3>
                                          <p>Climate: {each.climate}</p>

                                          <Link href="/blog-details">
                                            <a className="read-more">Read More</a>
                                          </Link>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                    {/* Pagination */}
                                    <div className="col-lg-12 col-md-12">
                                        <div className="pagination-area">
                                            <Link href="#">
                                                <a className="prev page-numbers">
                                                    <i className="flaticon-left"></i>
                                                </a>
                                            </Link>

                                            <Link href="#">
                                                <a className="page-numbers">1</a>
                                            </Link>

                                            <span className="page-numbers current" aria-current="page">2</span>

                                            <Link href="#">
                                                <a className="page-numbers">3</a>
                                            </Link>

                                            <Link href="#">
                                                <a className="page-numbers">4</a>
                                            </Link>

                                            <Link href="#">
                                                <a className="next page-numbers">
                                                    <i className="flaticon-right"></i>
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>  
                            </div>

                            <div className="col-lg-4 col-md-12">
                                <BlogSidebar />
                            </div>
                        </div>
                    </div>
                </section>
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default Blog2;