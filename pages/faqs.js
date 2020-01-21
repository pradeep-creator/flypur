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
                                <h2 class="display-3 extra-bold mt-3 heading-line">FAQs</h2>
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
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <h3 className="mb-4">FAQ for Shoppers</h3>
                                    <div id="accordion">
                                        <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseOne" style={{color: '#7F017F', fontWeight: 'bold'}}>
                                            1. How do I order on flypur?
                                            </a>
                                        </div>
                                        <div id="collapseOne" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                            Just log in to flypur.com tap on order anything and tap again on your preferences if you are shopping locally tap on local if shopping domestically taps on domestic and for international orders tap on international. You can even buy food with flypur if you are looking to try domestic speciality or even local speciality you can just use our order anything section. For Example:- if you live in Delhi and you fancy a vada pav from Mumbai just use our services to get your desired food item with the help of the peer network. Even if you fancy a local speciality like chole bathure or something from Chandni Chowk our peer network will enable you to fulfil your desire.
                                            </div>
                                        </div>
                                        </div>
                                        <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseTwo" style={{color: '#7F017F', fontWeight: 'bold'}}>
                                            2. How to pay for your order 
                                        </a>
                                        </div>
                                        <div id="collapseTwo" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                            Once you place your request the travellers travelling from your desired location to your location will see your request, once any one of them accepts you need to pay
                                            </div>
                                        </div>
                                        </div>
                                        <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseThree" style={{color: '#7F017F', fontWeight: 'bold'}}>
                                            3. What if I don't receive my item &amp; what if i receive the wrong item.
                                            </a>
                                        </div>
                                        <div id="collapseThree" class="collapse" data-parent="#accordion">
                                            <div class="card-body">
                                            Whether its food or general item its the duty of the buyer to check the item before taking the delivery. if you get any issue you can always open a support ticket. The best recommendation from us to avoid any issue is to check the images of the item over the chat while the traveller makes the purchase for you.
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                    <h3 className="mb-4">FAQ for Travellers</h3>
                                    <div id="accordion1">
                                        <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFour" style={{color: '#7F017F', fontWeight: 'bold'}}>
                                            1. How do I use flypur? 
                                            </a>
                                        </div>
                                        <div id="collapseFour" class="collapse" data-parent="#accordion1">
                                            <div class="card-body">
                                            Flypur for travellers works for local travellers, domestic travellers as well as international travellers. If you are travelling locally for example from a Gk Market in Delhi to Preet Vihar in Delhi you can post your trip or browse orders from that area to the other. if anyone places a request you can fulfil that order and make some cash on the way! Similarly, flypur works for a domestic as well as international travellers concept is same as local but the destinations are different.
                                            </div>
                                        </div>
                                        </div>
                                        <div class="card">
                                        <div class="card-header">
                                            <a class="collapsed card-link" data-toggle="collapse" href="#collapseFive" style={{color: '#7F017F', fontWeight: 'bold'}}>
                                            2. When will I get paid?
                                        </a>
                                        </div>
                                        <div id="collapseFive" class="collapse" data-parent="#accordion1">
                                            <div class="card-body">
                                            Once you deliver the item to the traveller and he gives the confirmation you will get reimbursed along with the cost of the item with the traveller fee.
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
