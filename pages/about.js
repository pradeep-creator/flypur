import React, {Component} from 'react'
import Layout from '../layouts/default'

class About extends Component{
    render(){
        return(
            <Layout>                

                <main class="overflow-hidden position-relative ">
                    <header class="headerset header alter3-header section gradient gradient-primary-auxiliary text-contrast">
                            <div class="shapes-container">
                                <div class="animation-shape shape-ring animation--rotating-diagonal">
                                    <div></div>
                                </div>
                                <div class="animation-shape shape-circle animation--clockwise">
                                    <div></div>
                                </div>
                                <div class="animation-shape shape-triangle animation--anti-clockwise">
                                    <div class="animation--rotating"></div>
                                </div>
                                <div class="animation-shape shape-diamond animation--anti-clockwise">
                                    <div class="animation--rotating"></div>
                                </div>
                                <div class="static-shape shape-ring-1"></div>
                                <div class="static-shape shape-ring-2"></div>
                                <div class="static-shape shape-circle-1"></div>
                            
                                <div class="static-shape ghost-shape ghost-shape-1"></div>
                            </div>
                            <div class="container  text-center">
                                <h2 class="display-3 extra-bold mt-3 heading-line">About</h2>
                            </div>
                        </header>

                        <section class="section alter3-features">
                                <div class="shapes-container">
                                    <div class="shape shape-ring shape-ring-1">
                                        <div class="animation animation--rotating"></div>
                                    </div>
                                    <div class="shape shape-ring shape-ring-2">
                                        <div class="animation animation--rotating"></div>
                                    </div>
                                    <div class="shape shape-circle animation--clockwise">
                                        <div></div>
                                    </div>
                                
                                </div>
                        </section>
                        
                        <section class="section why-choose-us aboutpadding"> 
                        <div class="container pb-8 bring-to-front">
                                <div class="section-heading text-center">
                                    <h2 class="heading-line">NASSCOM Foundation-Achieving Social Transformation in India.</h2>
                                    <p class="text-muted lead mx-auto">Aiming at reshaping India to achieve inclusive affiliation, NASSCOM Foundation enables corporate social responsibility activities.  Understanding the evolvement in technology and depth in digitization, NASSCOM Foundation brings technology to reach social innovation in the society.  With great ideas in mind, NASSCOM announces sustainable development goals to transform the world.</p>
                                </div>
                                <div class="row gap-y">
                                        <div class="col-md-6">
                                                <h4 class="bold text-alternate">Let's break down some of the most important reasons why donation
                                                    management is necessary.</h4>
                                                    {/* <p class="text-muted lead mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Distinctio vel illo inventore quam repellendus sequi reiciendis dolor necessitatibus
                                                    mollitia sint!</p> */}
                                                <ul class="list-unstyled why-icon-list">
                                                    <li class="list-item">
                                                        <div class="media align-items-center">
                                                            <div class="icon-shape mr-3">
                                                                <div class="shape shape-pipes"></div>
                                                                <i class="icon text-alternate fas fa-plug fa-3x"></i>
                                                            </div>
                                                            <div class="media-body">
                                                                <h5 class="bold">Donation Methods Are Changing &amp; Expanding</h5>
                                                                <p class="my-0">As donors continue to diversify the ways they choose to give,
                                                                    the need for a comprehensive system to organize these various avenues grows.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-item">
                                                        <div class="media align-items-center">
                                                            <div class="icon-shape mr-3">
                                                                <div class="shape shape-pipes"></div>
                                                                <i class="icon text-alternate fas fa-heart fa-3x"></i>
                                                            </div>
                                                            <div class="media-body">
                                                                <h5 class="bold">Donation Data Is Necessary For Growth.</h5>
                                                                <p class="my-0">All of this data can help you grow your donation base and, as a
                                                                    result, expand your programming.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li class="list-item">
                                                        <div class="media align-items-center">
                                                            <div class="icon-shape mr-3">
                                                                <div class="shape shape-pipes"></div>
                                                                <i class="icon text-alternate fas fa-headphones fa-3x"></i>
                                                            </div>
                                                            <div class="media-body">
                                                                <h5 class="bold">Management Leads to Retention.</h5>
                                                                <p class="my-0">Data is helpful in the short-term, but it also aids in your
                                                                    long-term donor retention efforts.</p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                    <div class="col-md-6">
                                        <div class="rotated-mockups device-twin">
                                            <div class="browser absolute shadow-lg">
                                                <img src="img/screens/tablet/1.png" alt="..." />
                                            </div>
                                            <div class="front iphone light">
                                                <div class="screen">
                                                    <img src="img/screens/app/2.jpeg" alt="..." />
                                                </div>
                                                <div class="notch"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                </main>
            </Layout>
        )
    }
}

export default About
