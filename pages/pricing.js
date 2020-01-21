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
                                <h2 class="display-3 extra-bold mt-3 heading-line">Pricing</h2>
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

                        <section class="section features-cant-miss">
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
                        <div class="container">
                            <p>Pricing of the products depends upon the request of the buyer,</p>                            
                            <h3>Service pricing</h3>
                            <p>Buyers will pay <strong>8%</strong> of the total amount of order as our service fee.</p>
                            <p>Traveller fee will be decided by the buyers and travellers mutually.</p>
                        </div>                        
                            
                        </section>
                        
                    </main>
            </Layout>
        )
    }
}

export default About
