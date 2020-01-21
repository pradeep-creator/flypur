import React, {Component} from 'react'
import Layout from '../layouts/default'

class Contact extends Component{
    render(){
        return(
            <Layout>
                
                <main class="overflow-hidden position-relative ">
                    <header class="headerset  header alter3-header section gradient gradient-primary-auxiliary text-contrast">
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
                            <h2 class="display-3 extra-bold mt-3 heading-line">Contact Us</h2>
                        </div>
                    </header>

                    <section>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 mx-auto">
                                    {/* <!-- <div class="section-heading text-center"></div>
                                    <h2 class="lead  ">address, nawar khera golapar</h2>
                                    <h2 class="lead  ">haldwani uttrakhand</h2>
                                        <h2 class="lead  ">phone: 8755335930</h2>
                                </div> --> */}
                                    <div class="rounded media bg-contrast shadow-lg p-4">
                                        <div class="icon-shape mr-4">
                                            <i class="far fa-address-card fa-3x"></i>
                                        </div>
                                        <div class="media-body">
                                            <h4 class="text-primary">Address</h4>
                                            <i class="fas fa-phone-volume d-flex align-items-center mt-0 contacticon">&nbsp; +919494064548</i>
                                            <i class="fas fa-envelope d-flex align-items-center mt-0 contacticon ">&nbsp; office@flypur.com</i>
                                            <p class="mt-4">
55, 2nd floor, Lane-2, WestendMarg, Saidullajab, Near Saket Metro Station, New Delhi, Delhi 110030</p>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- address column end here  -->

                                <!-- form collum start here --> */}
                                <div class="col-md-6 mx-auto  ">

                                    <form class="formpadding  ">
                                        <div class="mat-input ">
                                            <div class="mat-input-outer">
                                                <input type="text" autocomplete="off"/>
                                                <label class="">Name</label>
                                                <div class="border"></div>
                                            </div> 
                                            <div class="mat-input-outer">
                                                <input type="text" autocomplete="off"/>
                                                <label class="">Phone Number</label>
                                                <div class="border"></div>
                                            </div> 
                                            <div class="mat-input-outer">
                                                <input type="text" autocomplete="off"/>
                                                <label class="">Email</label>
                                                <div class="border"></div>
                                            </div>
                                            <br/>
                                            <div class="mat-input-outer">
                                                <textarea  autocomplete="off"></textarea>
                                                <label class="">Message</label>
                                                <div class="border"></div>
                                            </div>                  
                                        </div>
                                        <button type="submit" class="btn btn-primary text-contrast submitbutton">Send</button>
                                    </form>
                                </div>
                                {/* <!-- form collum end here --> */}
                            </div>

                            {/* <!-- iframe --> */}

                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3505.6592806750423!2d77.19911471440447!3d28.51989709592213!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce1fb44618b65%3A0x8e06b2a6128352d1!2sAcropolis%20Infotech%20Private%20Limited!5e0!3m2!1sen!2sin!4v1579625674380!5m2!1sen!2sin" width="100%" height="450" frameborder="0" allowfullscreen=""></iframe>
                            {/* <!-- iframe ends here --> */}

                        </div>
                    </section>
                    
                </main>

            </Layout>
        )
    }
}

export default Contact
