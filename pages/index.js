import Layout from '../layouts/default'
import React, {Component} from 'react'
import Link from "next/link"


class Index extends Component {
    render(){
        return(
            <Layout>
                <main className="overflow-hidden position-relative">
                    <header className="header alter3-header section gradient gradient-primary-auxiliary text-contrast">
                        <div className="shapes-container">
                            <div className="animation-shape shape-ring animation--rotating-diagonal">
                                <div></div>
                            </div>
                            <div className="animation-shape shape-circle animation--clockwise">
                                <div></div>
                            </div>
                            <div className="animation-shape shape-triangle animation--anti-clockwise">
                                <div className="animation--rotating"></div>
                            </div>
                            <div className="animation-shape shape-diamond animation--anti-clockwise">
                                <div className="animation--rotating"></div>
                            </div>
                            <div className="static-shape shape-ring-1"></div>
                            <div className="static-shape shape-ring-2"></div>
                            <div className="static-shape shape-circle-1"></div>
                            <div className="static-shape pattern-dots-1"></div>
                            <div className="static-shape pattern-dots-2"></div>
                            <div className="static-shape ghost-shape ghost-shape-1"></div>
                        </div>
                        <div className="container bring-to-front">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="extra-bold display-md-3 font-md"> 
                                        <span className="d-block display-md-4 light">Buy, Travel & Shop Anywhere</span>
                                    </h1>
                                    <p className="lead">Fancy a particular product? but it's not available in your country or city? Use flypur to fulfil your desires!</p>
                                  {/* <nav className="nav mt-5"><a href="#"
                                            className="nav-link mr-3 btn btn btn-rounded btn-contrast marginbutton">
                                            <img src="./img/icon/android.svg" className="iconheight" alt=""> Android Download
                                        </a>

                                        <a href="#" className="nav-link mr-3 btn btn btn-rounded btn-contrast marginbutton">
                                            <img src="./img/icon/apple-black.svg" className="iconheight" alt=""> iOS Download
                                        </a>

                                    </nav>  */}
                                </div>
                            </div>
                        </div>
                    </header>
                    <i className="fas fa-play"></i>
                    <section className="isometric-mockups">
                        <div className="tablet ipad landscape">
                            <div className="screen">
                                <img src="img/screens/tablet/1.png" alt="..." />
                            </div>
                            <div className="button"></div>
                        </div>
                        <div className="iphone light phone-big">
                            <div className="screen">
                                <img src="img/screens/app/4.jpeg" alt="..." />
                            </div>
                            <div className="notch"></div>
                        </div>
                        <div className="iphone light phone-small">
                            <div className="screen">
                                <img src="img/screens/app/2.jpeg" alt="..." />
                            </div>
                            <div className="notch"></div>
                        </div>
                        <div className="tablet ipad portrait">
                            <div className="screen">
                                <img src="img/screens/tablet/1.png" alt="..."/>
                            </div>
                            <div className="button"></div>
                        </div>
                    </section>

                    <section className="section alter3-partners bg-contrast edge top-left">
                        <div className="container bring-to-front pb-md-9">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="section-heading">
                                        <i className="fas fa-handshake fa-3x accent mb-3"></i>
                                        <h3 className="text-alternate heading-line">Why &amp; What To Shop With Flypur</h3>
                                        <p className="lead">Building Our Promise. We are a partner with a NASSCOM FOUNDATION and SEVA INTERNATIONAL . And we are dedicated to give superior services to our users.</p>
                                    </div>
                                    {/* <ul className="nav">
                                        <li className="nav-item mr-3 py-2 op-5">
                                            <img src="img/logos/1.png" className="icon" alt=""/>
                                        </li>
                                        <li className="nav-item mr-3 py-2 op-5">
                                            <img src="img/logos/2.png" className="icon" alt=""/>
                                        </li>
                                    </ul> */}
                                    <Link href="/">
                                        <a className="more-link btn btn-outline-primary bold">Know More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section alter3-features">
                        <div className="shapes-container">
                            <div className="shape shape-ring shape-ring-1">
                                <div className="animation animation--rotating"></div>
                            </div>
                            <div className="shape shape-ring shape-ring-2">
                                <div className="animation animation--rotating"></div>
                            </div>
                            <div className="shape shape-circle animation--clockwise">
                                <div></div>
                            </div>
                            <div className="shape background-shape-main"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5 order-lg-last">
                                    <div className="section-heading">
                                         <p className="px-2 text-alternate text-uppercase bold">Lorem ipsum dolor sit amet.</p>
                                        <h2 className="heading-line">Why &amp; What To Shop With Flypur</h2>
                                        <p className="lead text-muted my-4 semi-bold">The NASSCOM’s Donation and Project management
                                            platform aims at efficient management of 4 key workflows in the NGOs.</p>
                                        <p>NASSCOM offers donation management and project management platforms for NGOs.</p><a
                                            href="product.html" className="more-link btn btn-primary text-contrast bold">Know More</a>
                                    </div>
                                </div>
                                <div className="col-lg-7 pr-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 rotated-cards">
                                            <div data-aos="fade-down" data-aos-delay="0">
                                                <div className="card border-0 shadow mb-5 tilt">
                                                    <div className="card-body py-5 px-4">
                                                        <div
                                                            className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                            <i className="icon m-0 pe pe-7s-add-user pe-3x"></i></div>
                                                        <h4 className="bold mb-5">Go on shopping spree</h4>
                                                        <p className="text-muted lead">Shop Anything From Anywhere: - Living in India is great but as it’s a developing economy not everything is available here.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-aos="fade-down" data-aos-delay="500">
                                                <div className="card border-0 shadow mb-5 tilt">
                                                    <div className="card-body py-5 px-4">
                                                        <div
                                                            className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                            <i className="icon m-0 pe pe-7s-display1 pe-3x"></i></div>
                                                        <h4 className="bold mb-5">Order Food Which you can't reach</h4>
                                                        <p className="text-muted lead">Complete lifecycle management of donation right
                                                            from point of entry.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 rotated-cards">
                                            <div data-aos="fade-down" data-aos-delay="800">
                                                <div className="card border-0 shadow mb-5 tilt">
                                                    <div className="card-body py-5 px-4">
                                                        <div
                                                            className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                            <i className="icon m-0 pe pe-7s-tools pe-3x"></i></div>
                                                        <h4 className="bold mb-5">Project management.</h4>
                                                        <p className="text-muted lead">Administer any requests and NGO projects
                                                            efficiently by using current technology.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div data-aos="fade-down" data-aos-delay="1200">
                                                <div className="card border-0 shadow mb-5 tilt">
                                                    <div className="card-body py-5 px-4">
                                                        <div
                                                            className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                            <i className="icon m-0 pe pe-7s-note pe-3x"></i></div>
                                                        <h4 className="bold mb-5">Reporting management</h4>
                                                        <p className="text-muted lead">Dynamic reporting of finance utilization for
                                                            every social activity in the NGO.</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section alter3-features">
                        <div className="shapes-container">
                            <div className="shape shape-ring shape-ring-1">
                                <div className="animation animation--rotating"></div>
                            </div>
                            <div className="shape shape-ring shape-ring-2">
                                <div className="animation animation--rotating"></div>
                            </div>
                            <div className="shape shape-circle animation--clockwise">
                                <div></div>
                            </div>
                            <div className="shape background-shape-main"></div>
                        </div>
                        <div className="container">
                            <div className="row align-items-center">
                                
                                <div className="col-lg-7 pr-lg-6">
                                    <div className="row">
                                        <div className="col-lg-6 rotated-cards">
                                            <div data-aos="fade-down" data-aos-delay="0">
                                                <div className="card border-0 shadow mb-5 tilt">
                                                    <div className="card-body py-5 px-4">
                                                        <div
                                                            className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                            <i className="icon m-0 pe pe-7s-add-user pe-3x"></i></div>
                                                        <h4 className="bold mb-5">Travelling Internationally?</h4>
                                                        <p className="text-muted lead">Are you travelling internationally? Wanna make some extra cash while you travel?</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div data-aos="fade-down" data-aos-delay="500">
                                                <div className="card border-0 shadow mb-5 tilt">
                                                    <div className="card-body py-5 px-4">
                                                        <div
                                                            className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                            <i className="icon m-0 pe pe-7s-display1 pe-3x"></i></div>
                                                        <h4 className="bold mb-5">Travelling Domestically?</h4>
                                                        <p className="text-muted lead">Are you travelling domestically? Make some cash on the trip by buying and delivering items and food ( Domestic Only ).</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 rotated-cards">
                                            <div data-aos="fade-down" data-aos-delay="800">
                                                <div className="card border-0 shadow mb-5 tilt">
                                                    <div className="card-body py-5 px-4">
                                                        <div
                                                            className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                            <i className="icon m-0 pe pe-7s-tools pe-3x"></i></div>
                                                        <h4 className="bold mb-5">Travelling Locally?</h4>
                                                        <p className="text-muted lead">Travelling locally from one point another within your city? Buy or transport items for senders and receiver and earn some cash!</p>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div data-aos="fade-down" data-aos-delay="1200">
                                                <div className="card border-0 shadow mb-5 tilt">
                                                    <div className="card-body py-5 px-4">
                                                        <div
                                                            className="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                            <i className="icon m-0 pe pe-7s-note pe-3x"></i></div>
                                                        <h4 className="bold mb-5">Reporting management</h4>
                                                        <p className="text-muted lead">Dynamic reporting of finance utilization for
                                                            every social activity in the NGO.</p>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 order-lg-last">
                                    <div className="section-heading">
                                         <p className="px-2 text-alternate text-uppercase bold">Lorem ipsum dolor sit amet.</p>
                                        <h2 className="heading-line">Travel To Earn</h2>
                                        <p className="lead text-muted my-4 semi-bold">The NASSCOM’s Donation and Project management
                                            platform aims at efficient management of 4 key workflows in the NGOs.</p>
                                        <p>NASSCOM offers donation management and project management platforms for NGOs.</p><a
                                            href="product.html" className="more-link btn btn-primary text-contrast bold">Know More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>


                    <section className="section powered-design">
                        <div className="shapes-container">
                            <div className="shape shape-circle shape-circle-1">
                                <div data-aos="fade-up-left" data-aos-duration="1500"></div>
                            </div>
                            <div className="shape shape-circle shape-circle-2">
                                <div data-aos="fade-up-left" data-aos-duration="1200" data-aos-delay="500"></div>
                            </div>
                            <div className="shape shape-ring animation--rotating-diagonal">
                                <div></div>
                            </div>
                            <div className="shape shape-triangle shape-animated">
                                <div className="animation--rotating"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row gap-y align-items-center">
                                <div className="col-md-6">
                                    <div className="section-heading">
                                        <h2 className="heading-line">Achieving Social Transformation in India</h2>
                                        <p className="lead text-muted">Aiming at reshaping India to achieve inclusive affiliation, NASSCOM Foundation
                                                enables corporate social responsibility activities</p>
                                    </div>
                                    <a href="#" className="btn btn-outline-alternate more-link mt-0">Know More</a>
                                </div>
                                <div className="col-md-6">
                                    <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast">
                                        <figure>
                                            <img src="img/screens/app/pieces/1.png" className="img-responsive" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast mt-5">
                                        <figure>
                                            <img src="img/screens/app/pieces/2.png" className="img-responsive" alt=""/>
                                        </figure>
                                    </div>
                                    <div className="rounded tilt overflow-hidden shadow-box shadow-hover bg-contrast mt-5">
                                        <figure>
                                            <img src="img/screens/app/pieces/3.png" className="img-responsive" alt=""/>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container ">
                            <div className="row gap-y align-items-center">
                                <div className="col-md-6">
                                    <div className="section-heading">
                                        <h2 className="heading-line">Understanding the evolvement in
                                                technology and depth in digitization</h2>
                                        <p className="lead text-muted">NASSCOM Foundation brings technology to reach
                                                social innovation in the society</p>
                                    </div><a href="about.html" className="btn btn-outline-alternate more-link mt-0">Know More</a>
                                </div>
                                <div className="col-md-6 text-center ">

                                    <div className="iphone light">
                                        <div className="heightscreen screen shadow-box clickvideo " id="showVideo">
                                            <i className="videoiconmargin fas fa-play-circle  fa-5x box bounce-2 "></i>
                                        </div>
                                        <div className="notch"></div>
                                    </div>

                                </div>
                            </div>
                        </div>

                
                        <div className="videoplaying text-center ">
                            <div className="videoclosebutton clickvideo" id="closevideo">
                                <img src="" alt="" />
                                <i className="fas fa-times-circle fa-2x"></i>

                            </div>
                            <div className="embed-responsive embed-responsive-16by9 videosize text-center">
                                <iframe className="embed-responsive-item text-center"
                                    src="https://www.youtube.com/" allowfullscreen></iframe>
                            </div>
                        </div>
                    </section>


                    <section className="section features-cant-miss">
                        <div className="shapes-container overflow-clear">
                            <div className="shape shape-circle shape-circle-1">
                                <div data-aos="fade-up-left"></div>
                            </div>
                            <div className="shape shape-circle shape-circle-2">
                                <div data-aos="fade-up-right" data-aos-delay="200"></div>
                            </div>
                            <div className="shape shape-circle shape-circle-3">
                                <div data-aos="fade-up-left" data-aos-delay="400"></div>
                            </div>
                            <div className="shape shape-circle shape-circle-4">
                                <div data-aos="fade-up-left" data-aos-delay="600"></div>
                            </div>
                            <div className="shape shape-triangle shape-animated">
                                <div className="animation--rotating"></div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row gap-y">
                                <div className="col-md-6 order-md-last">
                                    <div className="section-heading">
                                        <i className="fas fa-trophy fa-2x text-danger mb-3"></i>
                                        <h2 className="heading-line">Key Highlights</h2>
                                    </div>
                                    <ul className="list-unstyled">
                                        <li className="media flex-column flex-md-row text-center text-md-left"><i
                                                className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users  pe-3x"></i>
                                            <div className="media-body mt-3 mt-md-0">
                                                <h5 className="bold mt-0 mb-1">End to end activities</h5>
                                                <p className="m-0">The platform manages end to end activities that are involved in the
                                                    donation and project management life cycle.</p>
                                            </div>
                                        </li>
                                        <li className="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                                className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-tools pe-3x"></i>
                                            <div className="media-body mt-3 mt-md-0">
                                                <h5 className="bold mt-0 mb-1">Hierarchy management and security</h5>
                                                <p className="m-0">Based on different roles and permissions, the securities of data
                                                    access permissions are mapped. </p>
                                            </div>
                                        </li>
                                        <li className="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                                className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-cloud-upload pe-3x"></i>
                                            <div className="media-body mt-3 mt-md-0">
                                                <h5 className="bold mt-0 mb-1">Cloud based multi-tenancy</h5>
                                                <p className="m-0">The platform is easily scalable as it is hosted on a cloud based
                                                    multi-tenancy that is integrated with SAP and Tally.</p>
                                            </div>
                                        </li>
                                        <li className="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                            className="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-news-paper pe-3x"></i>
                                        <div className="media-body mt-3 mt-md-0">
                                            <h5 className="bold mt-0 mb-1">Dynamic reporting dashboards</h5>
                                            <p className="m-0"> These charts are constructive to look upon and analyze
                                                the work that is completed in a given time and for the planned budget.</p>
                                        </div>
                                        
                                    </li>
                                        <li>
                                                <a href="feature.html" className="btn btn-outline-alternate more-link mt-0 readmore">Read More.</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <div className="bubble bubble-left center-x-md">
                                        <figure className="rounded overflow-hidden shadow" data-aos="zoom-in">
                                            <img
                                                src="img/screens/app/pieces/4.png" className="img-responsive" alt=""/>
                                        </figure>
                                    </div>
                                    <figure className="bubble bubble-right rounded overflow-hidden shadow">
                                        <img src="img/screens/app/pieces/5.png" className="img-responsive" alt="" data-aos="fade-left"/>
                                    </figure>
                                    <div className="iphone light">
                                        <div className="screen shadow-box">
                                            <img src="img/screens/app/4.jpeg" alt="..."/>
                                        </div>
                                        <div className="notch"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                

                    {/* <section className="section integration-bubbles">
                        <div className="container overflow-hidden">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="bubbles-wrapper">
                                        <div className="animations m-0">
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md"><img
                                                    src="img/demo/header/apx.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Autoprefixer</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl"><img
                                                    src="img/demo/header/bs.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Bootstrap</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg"><img
                                                    src="img/demo/header/cordova.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Cordova</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl"><img
                                                    src="img/demo/header/css.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">CSS</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md"><img
                                                    src="img/demo/header/fa.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Fontawesome</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg"><img
                                                    src="img/demo/header/html.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">HTML</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md"><img
                                                    src="img/demo/header/js.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Javascript</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl"><img
                                                    src="img/demo/header/npm.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Npm</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg"><img
                                                    src="img/demo/header/sass.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">SASS</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl"><img
                                                    src="img/demo/header/apx.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Autoprefixer</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md"><img
                                                    src="img/demo/header/bs.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Bootstrap</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl"><img
                                                    src="img/demo/header/cordova.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Cordova</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-md"><img
                                                    src="img/demo/header/css.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">CSS</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xxl"><img
                                                    src="img/demo/header/fa.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Fontawesome</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-lg"><img
                                                    src="img/demo/header/html.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">HTML</span></div>
                                            <div className="bubble bg-contrast rounded-circle p-2 shadow icon icon-xl"><img
                                                    src="img/demo/header/js.svg" alt="" className="img-responsive"> <span
                                                    className="badge badge-contrast shadow-box">Javascript</span></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="section-heading">
                                        <p className="text-alternate text-uppercase bold">Lorem, ipsum.</p>
                                        <h2 className="heading-line">Lorem ipsum dolor sit amet.</h2>
                                        <p className="lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime,
                                            a?</p>
                                    </div><a href="#!" className="more-link">Lorem, ipsum dolor.</a>
                                </div>
                            </div>
                        </div> 
                    </section>  */}
                    
                    <section className="section why-choose-us">
                        <div className="shapes-container">
                            <div className="pattern pattern-dots"></div>
                        </div>
                        <div className="container pb-8 bring-to-front">
                            <div className="section-heading text-center">
                                <h2 className="heading-line">Why Is Managing Donations Important?</h2>
                                <p className="text-muted lead mx-auto">Donation management is there to make your work-life easier and
                                    your donor's experience that much better. It's a win-win for everyone. And that, fellow
                                    fundraisers, is the beauty of donation management.</p>
                            </div>
                            <div className="row gap-y">
                                <div className="col-md-6">
                                    <h4 className="bold text-alternate">Let's break down some of the most important reasons why donation
                                        management is necessary.</h4>
                                    {/* <!--<p className="text-muted lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Distinctio vel illo inventore quam repellendus sequi reiciendis dolor necessitatibus
                                        mollitia sint!</p> --> */}
                                    <ul className="list-unstyled why-icon-list">
                                        <li className="list-item">
                                            <div className="media align-items-center">
                                                <div className="icon-shape mr-3">
                                                    <div className="shape shape-pipes"></div><i
                                                        className="icon text-alternate fas fa-plug fa-3x"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="bold">Donation Methods Are Changing &amp; Expanding</h5>
                                                    <p className="my-0">As donors continue to diversify the ways they choose to give,
                                                        the need for a comprehensive system to organize these various avenues grows.
                                                    </p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-item">
                                            <div className="media align-items-center">
                                                <div className="icon-shape mr-3">
                                                    <div className="shape shape-pipes"></div><i
                                                        className="icon text-alternate fas fa-heart fa-3x"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="bold">Donation Data Is Necessary For Growth.</h5>
                                                    <p className="my-0">All of this data can help you grow your donation base and, as a
                                                        result, expand your programming.</p>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="list-item">
                                            <div className="media align-items-center">
                                                <div className="icon-shape mr-3">
                                                    <div className="shape shape-pipes"></div><i
                                                        className="icon text-alternate fas fa-headphones fa-3x"></i>
                                                </div>
                                                <div className="media-body">
                                                    <h5 className="bold">Management Leads to Retention.</h5>
                                                    <p className="my-0">Data is helpful in the short-term, but it also aids in your
                                                        long-term donor retention efforts.</p>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    <hr className="my-5" />
                                    <div className="text-center text-md-left">
                                        <a href="#" className="btn btn-primary text-contrast">Know
                                            More</a>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="rotated-mockups device-twin">
                                        <div className="browser absolute shadow-lg">
                                            <img src="img/screens/tablet/1.png" alt="..."/>
                                        </div>
                                        <div className="front iphone light">
                                            <div className="screen">
                                                <img src="img/screens/app/2.jpeg" alt="..."/>
                                            </div>
                                            <div className="notch"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

{/* 
                    <!-- <section className="section faqs-dd bg-light edge top-left">
                        <div className="shapes-container">
                            <div className="absolute icon" data-aos="fade-down-left"><i className="fas fa-question"></i></div>
                        </div>
                        <div className="container">
                            <div className="section-heading text-center">
                                <h2 className="heading-line">Lorem, ipsum dolor.</h2>
                                <p className="lead">Want to know more about our services?</p>
                            </div>
                            <div className="row">
                                <div className="col-lg-8 mx-lg-auto">
                                    <div data-aos="fade-up">
                                        <div className="card shadow-box shadow-hover mb-3">
                                            <div className="card-header py-3"><a href="#" className="card-title collapsed"
                                                    data-toggle="collapse" data-target="#v1-q1">Lorem ipsum dolor sit amet.</a>
                                            </div>
                                            <div id="v1-q1" className="collapse card-body">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Modi deserunt culpa molestiae repellat voluptas, vitae consequatur
                                                placeat esse sequi fuga?</div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up">
                                        <div className="card shadow-box shadow-hover mb-3">
                                            <div className="card-header py-3"><a href="#" className="card-title collapsed"
                                                    data-toggle="collapse" data-target="#v1-q2">Lorem, ipsum dolor sit amet
                                                    consectetur adipisicing elit.</a></div>
                                            <div id="v1-q2" className="collapse card-body">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Quo porro laborum impedit fugit, modi quod assumenda voluptas in.
                                                Veritatis, rerum?</div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up">
                                        <div className="card shadow-box shadow-hover mb-3">
                                            <div className="card-header py-3"><a href="#" className="card-title collapsed"
                                                    data-toggle="collapse" data-target="#v1-q3">Lorem ipsum dolor sit amet
                                                    consectetur adipisicing elit. Hic, odit?</a></div>
                                            <div id="v1-q3" className="collapse card-body">Lorem ipsum dolor sit amet consectetur
                                                adipisicing elit. Recusandae odio quisquam fugiat, quaerat rerum sint voluptatum
                                                dolorem reiciendis? Exercitationem, voluptas?</div>
                                        </div>
                                    </div>
                                    <div data-aos="fade-up">
                                        <div className="card shadow-box shadow-hover mb-3">
                                            <div className="card-header py-3"><a href="#" className="card-title collapsed"
                                                    data-toggle="collapse" data-target="#v1-q4">Lorem ipsum dolor sit amet
                                                    consectetur.</a>
                                            </div>
                                            <div id="v1-q4" className="collapse card-body">Definitely <span className="bold">Yes</span>Lorem
                                                ipsum dolor sit amet consectetur adipisicing elit. Officia dicta aliquid numquam
                                                commodi, at optio dolorum animi eius. Accusamus, a?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> --> */}

                    <section className="section start-free">
                        <div className="shapes-container"><i className="icon pe pe-7s-hourglass pe-3x"></i> <i
                                className="icon pe pe-7s-magic-wand pe-3x"></i> <i className="icon pe pe-7s-rocket pe-3x"></i> <i
                                className="icon pe pe-7s-plugin pe-3x"></i> <i className="icon pe pe-7s-like pe-3x"></i> <i
                                className="icon pe pe-7s-clock pe-3x"></i> <i className="icon pe pe-7s-smile pe-3x"></i> <i
                                className="icon pe pe-7s-piggy pe-3x"></i> <i className="icon pe pe-7s-shield pe-3x"></i> <i
                                className="icon pe pe-7s-server pe-3x"></i></div>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 mx-auto">
                                    <div className="section-heading text-center"><i className="pe pe-7s-unlock fa-3x text-alternate"></i>
                                        <h2 className="heading-line bold mt-4">Join Us Now!</h2>
                                        <p className="lead text-muted">Come join us ,With great ideas in mind, Be the part of change to transform the world.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="nav flex-column flex-md-row align-items-center justify-content-center">
                                <a href="https://donormgm-pilot.bluelup.in/login" target="_blank"
                                    className="btn btn-alternate btn-lg py-3 px-4 bold mr-0 mr-md-3 mb-3 mb-md-0">Sign up</a> 
                                <a href="https://donormgm-pilot.bluelup.in/login" target="_blank" className="btn btn-outline-dark btn-lg py-3 px-4 bold">Sign In</a></div>
                        </div>
                    </section>
                </main>
            </Layout>
        )
    }
}


export default Index;