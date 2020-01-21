import React, {Component} from 'react'
import Link from 'next/link'


class Index extends Component {
    render(){
        return(
            <>
                <head>
                    <meta name="viewport" content="width=device-width,initial-scale=1" />
                    <link href="https://fonts.googleapis.com/css?family=Lato:100,300,400,600,700,900" rel="stylesheet" />
                    <link rel="stylesheet" href="css/main.min.css"/>
                    <link rel="stylesheet" href="css/style.css"/>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    <script src="js/donor.min.js"></script>    
                    {/* <script>
                        $("#showVideo").click(() => {
                            $('div.videoplaying').fadeIn(300)
                        })
                        $("#closevideo").click(() => {
                            $('div.videoplaying').fadeOut(300)
                        })
                    </script> */}
                
                </head>


                <nav class="navbar navbar-expand-md main-nav navigation fixed-top sidebar-left">
                    <div class="container">
                        <button class="navbar-toggler" type="button">
                            <span class="icon-bar"></span> 
                            <span class="icon-bar"></span> 
                            <span class="icon-bar"></span>
                        </button> 
                        <a href="/"
                            class="navbar-brand">
                            <img src="img/logo.png" alt="" class="logo logo-sticky d-block d-md-none" />
                            <img src="img/logo.png" alt="" class="logo d-none d-md-block" />
                        </a>
                        <div class="collapse navbar-collapse" id="main-navbar">
                            <div class="sidebar-brand">
                                <a href="/">
                                    <img src="img/logo.png" alt="flypur"
                                        class="logo" />
                                </a>
                            </div>
                            <ul class="nav navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a href="/" className="nav-link">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/about" className="nav-link">About Us</a>
                                </li>
                                <li class="nav-item">
                                    <a href="/contact" className="nav-link">Contact Us</a>
                                </li> 
                                <li class="nav-item">
                                    <a href="/" className="nav-link btn-primary buttoncolor">Sign In</a>
                                </li>                                
                            </ul>
                        </div>
                    </div>
                </nav>
            </>
        )
    }
}

export default Index