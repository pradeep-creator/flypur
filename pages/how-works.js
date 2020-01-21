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
                                <h2 class="display-3 extra-bold mt-3 heading-line">Features</h2>
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
                            <div class="shapes-container overflow-clear">
                                <div class="shape shape-circle shape-circle-1">
                                    <div data-aos="fade-up-left"></div>
                                </div>
                                <div class="shape shape-circle shape-circle-2">
                                    <div data-aos="fade-up-right" data-aos-delay="200"></div>
                                </div>
                                <div class="shape shape-circle shape-circle-3">
                                    <div data-aos="fade-up-left" data-aos-delay="400"></div>
                                </div>
                                <div class="shape shape-circle shape-circle-4">
                                    <div data-aos="fade-up-left" data-aos-delay="600"></div>
                                </div>
                                <div class="shape shape-triangle shape-animated">
                                    <div class="animation--rotating"></div>
                                </div>
                            </div>
                        
                            <div class="container">
                                {/* <div class="section-heading text-center">
                                    <h2 class="heading-line">How Flypur Works For Buyers</h2>
                                    <p class="text-muted lead mx-auto">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                </div> */}
                                <div class="row gap-y">
                                    <div class="col-md-6 order-md-last">
                                        <div class="section-heading"><i class="fas fa-trophy fa-2x text-danger mb-3"></i>
                                            <h2 class="heading-line">How Flypur Works For Buyers</h2>
                                        </div>
                                        <ul class="list-unstyled">
                                            <li class="media flex-column flex-md-row text-center text-md-left"><i
                                                    class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users  pe-3x"></i>
                                                <div class="media-body mt-3 mt-md-0">
                                                    <h5 class="bold mt-0 mb-1">Input Your requirements</h5>
                                                    <p class="m-0">To accept a traveller’s delivery offer, pay for the item using any of the payment methods available. Flypur holds the payment securely until the item is received by a shopper. The Flypur traveller will make the payment for your item on your behalf and will be reimbursed once he delivers the item to the shopper. ( Item Offer price + bank/platform Transaction fee ).</p>
                                                </div>
                                            </li>
                                            <li class="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                                    class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-lock pe-3x"></i>
                                                <div class="media-body mt-3 mt-md-0">
                                                    <h5 class="bold mt-0 mb-1">You will get a delivery offer from a Flypur Traveller travelling to your city from your desired city</h5>
                                                    <p class="m-0">Travellers from our flypur community going to your destination from the city where from where you want to buy the product will start making delivery offers. Select the one you are ok with and accept it respectively.</p>
                                                </div>
                                            </li>
                                            
                                            <li class="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                                    class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-smile pe-3x"></i>
                                                <div class="media-body mt-3 mt-md-0">
                                                    <h5 class="bold mt-0 mb-1">Pay for your item Securely</h5>
                                                    <p class="m-0">To accept a traveller’s delivery offer, pay for the item using any of the payment methods available. Flypur holds the payment securely until the item is received by a shopper. The Flypur traveller will make the payment for your item on your behalf and will be reimbursed once he delivers the item to the shopper. ( Item Offer price + bank/platform Transaction fee ).</p>
                                                </div>
                                            </li>
                                            <li class="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                                    class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-map-marker pe-3x"></i>
                                                <div class="media-body mt-3 mt-md-0">
                                                    <h5 class="bold mt-0 mb-1">Get The Delivery</h5>
                                                    <p class="m-0"> The Shopper and traveller will meet in person to close the delivery. The shopper will confirm delivery on his phone and the order will be closed.</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="bubble bubble-left center-x-md">
                                            <figure class="rounded overflow-hidden shadow" data-aos="zoom-in">
                                                <img src="img/screens/app/pieces/4.png" class="img-responsive" alt="" />
                                            </figure>
                                        </div>
                                        <figure class="bubble bubble-right rounded overflow-hidden shadow">
                                        </figure>
                                        <div class="iphone light">
                                            <div class="screen shadow-box">
                                                <img src="img/screens/app/6.png" alt="..."/>

                                                </div>
                                            <div class="notch"></div>
                                        </div>
                                    </div>
                                </div>
                                
                                <hr/>

                                <div class="row gap-y">
                                    <div class="col-md-6 order-md-last">
                                        <div class="section-heading"><i class="fas fa-trophy fa-2x text-danger mb-3"></i>
                                            <h2 class="heading-line">How Flypur Works For Travellers</h2>
                                        </div>
                                        <ul class="list-unstyled">
                                            <li class="media flex-column flex-md-row text-center text-md-left"><i
                                                    class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-users  pe-3x"></i>
                                                <div class="media-body mt-3 mt-md-0">
                                                    <h5 class="bold mt-0 mb-1">Make Delivery offer to Shoppers</h5>
                                                    <p class="m-0">Screen delivery requests from Shoppers seeking delivery in your destination city and requesting to buy in your origin city and make an offer that works for you — including your delivery fee.</p>
                                                </div>
                                            </li>
                                            <li class="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                                    class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-lock pe-3x"></i>
                                                <div class="media-body mt-3 mt-md-0">
                                                    <h5 class="bold mt-0 mb-1">Confirm the Details of The Item</h5>
                                                    <p class="m-0">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                                                </div>
                                            </li>
                                            
                                            <li class="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                                    class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-smile pe-3x"></i>
                                                <div class="media-body mt-3 mt-md-0">
                                                    <h5 class="bold mt-0 mb-1">Purchase The item for the shopper</h5>
                                                    <p class="m-0">Once a Shopper accepts your delivery offer, you’ll communicate them via Flypur’s web Platform or mobile platform to communicate and confirm the details of the product/item (Material, colour &amp; size, other Details).</p>
                                                </div>
                                            </li>
                                            <li class="media flex-column flex-md-row text-center text-md-left mt-4"><i
                                                    class="mx-auto mr-md-3 mx-auto mr-md-3 accent pe pe-7s-map-marker pe-3x"></i>
                                                <div class="media-body mt-3 mt-md-0">
                                                    <h5 class="bold mt-0 mb-1">Make the Delivery and get reimbursed</h5>
                                                    <p class="m-0"> Meet the shopper at a mutually decided location and deliver the item to him/her. Once he confirms the receipt of the item in the app the traveller will be paid. (item reimbursement + your charges for the services from the shopper).</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="bubble bubble-left center-x-md">
                                            <figure class="rounded overflow-hidden shadow" data-aos="zoom-in">
                                                <img src="img/screens/app/pieces/4.png" class="img-responsive" alt="" />
                                            </figure>
                                        </div>
                                        <figure class="bubble bubble-right rounded overflow-hidden shadow">
                                        </figure>
                                        <div class="iphone light">
                                            <div class="screen shadow-box">
                                                <img src="img/screens/app/6.png" alt="..."/>

                                                </div>
                                            <div class="notch"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="container pt-0 alter3-features">
                                    <div class="section-heading text-center">
                                        <h2 class="heading-line">How Payments Work</h2>
                                         <p class="text-muted lead mx-auto">Making payment is as easy &amp; safe as shopping online on commerce sites.</p>
                                    </div>
                                    <div class="row align-items-center">                                            
                                        <div class="col-lg-12">
                                            <div class="row">
                                                <div class="col-lg-6 rotated-cards">
                                                        <div data-aos="fade-down" data-aos-delay="0">
                                                                <div class="card border-0 shadow mb-5 tilt">
                                                                    <div class="card-body py-5 px-4">
                                                                        <div
                                                                            class="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                                            <img src='/img/pay-1.png' width="90" />
                                                                        </div>
                                                                        {/* <h4 class="bold mb-5">Grant request management.</h4> */}
                                                                        <p class="text-muted lead">The shopper makes a request via the order page and once it matches with a travellers delivery offer the shopper makes the payment to flypur. Flypur holds the money and releases it to the traveller when the shopper receives the item.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                    <div data-aos="fade-down" data-aos-delay="500">
                                                            <div class="card border-0 shadow mb-5 tilt">
                                                                <div class="card-body py-5 px-4">
                                                                    <div
                                                                        class="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                                        <img src='/img/pay-2.png' width="90" />
                                                                    </div>
                                                                    {/* <h4 class="bold mb-5">Donation management.</h4> */}
                                                                    <p class="text-muted lead">The traveller will make the purchase on behalf of the shopper from his own money and will be later reimbursed by the flypur upon successful delivery.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                </div>
                                                <div class="col-lg-6 rotated-cards">
                                                    <div data-aos="fade-down" data-aos-delay="800">
                                                            <div data-aos="fade-down" data-aos-delay="800">
                                                                    <div class="card border-0 shadow mb-5 tilt">
                                                                        <div class="card-body py-5 px-4">
                                                                            <div
                                                                                class="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                                                <img src='/img/pay-3.png' width="90" />
                                                                            </div>
                                                                            {/* <h4 class="bold mb-5">Project management.</h4> */}
                                                                            <p class="text-muted lead">The shopper meets the traveller at a mutually decided public place or at U-flypur centre and makes the delivery.</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                    </div>
                                                    <div data-aos="fade-down" data-aos-delay="1200">
                                                        <div class="card border-0 shadow mb-5 tilt">
                                                            <div class="card-body py-5 px-4">
                                                                <div
                                                                    class="icon-box rounded-circle gradient gradient-primary-light text-contrast shadow icon-xl mb-3">
                                                                    <img src='/img/pay-4.png' width="90" />
                                                                </div>
                                                                {/* <h4 class="bold mb-5">Reporting management</h4> */}
                                                                <p class="text-muted lead">Upon receiving the purchased item the shopper confirms the order on the website or app and the total money is released to the traveller's bank account.</p>
                                                            </div>
                                                        </div>
                                                    </div>
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
