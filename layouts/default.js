import React, {Component} from 'react'
import Header from '../components/header'
import Footer from '../components/footer'


class Index extends Component{

    render(){
        return(
            <>
                <Header />
                    {this.props.children}
                <Footer />
            </>
        )
    }
}

export default Index