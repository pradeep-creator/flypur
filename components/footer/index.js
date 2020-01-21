import React, {Component} from 'react'
import Link from 'next/link'


class Index extends Component {
    render(){
        return(
            <>
                <section className="section">
                    <div className="container bring-to-front">
                        <div className="row gap-y">
                            <div className="col-md-12">
                                <div className="rounded media bg-contrast shadow-lg p-4">
                                    <ul className="cards text-center">
                                        <li>
                                            <a href="">
                                                <img src="/img/icon/visa.svg" width="80" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="/img/icon/mastercard.svg" width="80" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="/img/icon/paypal.svg" width="80" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="/img/icon/discover.svg" width="80" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="/img/icon/american-express.svg" width="80" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="">
                                                <img src="/img/icon/Razerpay.png" width="120" />
                                            </a>
                                        </li>
                                    </ul>                                    
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <div className="rounded media bg-contrast shadow-lg p-4">
                                    <div className="icon-shape mr-4"><i className="pe pe-7s-help2 pe-3x"></i></div>
                                    <div className="media-body">
                                        <h4 className="text-primary">Sales Departmant</h4><a href="#"
                                            className="more-link d-flex align-items-center mt-0">sales@nasscomfoundation.org</a>
                                            <br/>
                                            <i className="fas fa-phone-volume d-flex align-items-center mt-0 contacticon">&nbsp +91-120-4990111</i>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
                {/* <!-- Contact Channels end here --> */}
                <footer className="site-footer section bg-dark text-contrast edge top-left">
                    <div className="container py-3">
                        <div className="row gap-y text-center text-md-left">
                            <div className="col-md-2 mr-auto">
                                <img src="img/logo.png" alt="" className="logo" />
                                {/* <p>Flypur Travellers travelling locally, domestically or globally can make some cash while travelling.</p> */}
                            </div>
                            <div className="col-md-2">
                                <nav className="nav flex-column"> 
                                    <a href="/about" className="nav-item py-2 text-contrast">About Us</a>
                                    <a href="/how-works" className="nav-item py-2 text-contrast">How Flypur Works</a>
                                    <a href="/contact" className="nav-item py-2 text-contrast">Contact Us</a>                                      
                                </nav>
                            </div>
                            <div className="col-md-2">
                                <nav className="nav flex-column">
                                    <a href="/faqs" className="nav-item py-2 text-contrast">FAQs</a>
                                    <a href="/term-condition" className="nav-item py-2 text-contrast">Terms &amp; Conditions</a>
                                    <a href="/privacy-policy" className="nav-item py-2 text-contrast">Privacy Policy</a>
                                </nav>
                            </div>
                            <div className="col-md-2">
                                <nav className="nav flex-column"> 
                                    <a href="/trust-safety" className="nav-item py-2 text-contrast">Trust &amp; Safety</a>
                                    <a href="/refund-policy" className="nav-item py-2 text-contrast">Refund Policy</a>
                                    <a href="/pricing" className="nav-item py-2 text-contrast">Pricing</a>                                  
                                </nav>
                            </div>
                            <div className="col-md-4">
                                <h6 className="py-2 small">Follow us</h6>
                                <nav className="nav justify-content-around">
                                    <a href="https://www.facebook.com/flypur" target="_blank" className="btn btn-circle btn-sm brand-facebook">
                                        <i className="fab fa-facebook"></i>
                                    </a> 
                                    <a href="https://twitter.com/flypurglobal" target="_blank" className="btn btn-circle btn-sm brand-twitter">
                                        <i className="fab fa-twitter"></i>
                                    </a> 
                                    <a href="https://www.instagram.com/flypurglobal" target="_blank" className="btn btn-circle btn-sm brand-instagram">
                                        <i className="fab fa-instagram"></i>
                                    </a>
                                    <a href="https://www.linkedin.com/company/flypur" target="_blank" className="btn btn-circle btn-sm brand-linkedin">
                                        <i className="fab fa-linkedin"></i>
                                    </a>
                                    <a href="https://www.youtube.com/channel/UC4LsqsY3H2jy5JSmiRDFEwA" target="_blank" className="btn btn-circle btn-sm brand-youtube">
                                        <i className="fab fa-youtube"></i>
                                    </a>
                                    <a href="https://in.pinterest.com/flypur" target="_blank" className="btn btn-circle btn-sm brand-pinterest">
                                        <i className="fab fa-pinterest"></i>
                                    </a>
                                    <a href="https://flypur.tumblr.com/" target="_blank" className="btn btn-circle btn-sm brand-tumblr">
                                        <i className="fab fa-tumblr"></i>
                                    </a>
                                </nav>
                                <div className="input-group mt-3">
                                    <input type="text" className="form-control" placeholder="Enter your email ID"/>
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="submit" style={{color: '#fff', padding:5}}>Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr className="mt-5 op-5" />
                        <div className="row small">
                            <div className="col-md-12">
                                <p className="sm-2 text-center text-md-left">© 2019 Flypur. All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </>
        )
    }
}

export default Index