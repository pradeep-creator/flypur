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
                                <h2 class="display-3 extra-bold mt-3 heading-line">Rejection &amp; Refunds</h2>
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
                            <p>Shoppers may refuse to accept the Items only if the Traveller has brought 
                                incorrect goods (for example, specifications which differ from the agreement 
                                between the parties, in terms of brand, color, style, size, etc.) or the 
                                condition of the Items is other than that agreed to between the parties 
                                (for example, damaged or used items or otherwise not in the condition 
                                represented) and if the traveller did not come. Shoppers may not refuse 
                                acceptance of Items because they changed their mind about the transaction, 
                                or through an attempt to renegotiate the price of the items or because they 
                                have found the items elsewhere. Shoppers agree that Flypur, in its sole 
                                discretion, may determine whether the reason for rejection is acceptable 
                                under applicable policies and if Flypur determines the rejection is 
                                impermissible or unauthorized, Shoppers agree that they may be charged and 
                                the transaction completed as agreed to by the parties. Except as set forth 
                                above, in instances where the Shopper fails to appear for inspection and 
                                acceptance within five (5) days of the delivery date, Shoppers are required 
                                to confirm delivery of Items in order to release funds to Travelers.</p>
                        </div>                        
                            
                        </section>
                        
                    </main>
            </Layout>
        )
    }
}

export default About
