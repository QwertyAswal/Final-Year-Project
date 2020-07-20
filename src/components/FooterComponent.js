import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className="footer">
            <div className="container" style={{paddingTop:'30px'}}>
                <div className="row justify-content-center">
                    <div className="col-4 offset-1 col-sm-3">
                        <h5>Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/home">Home</Link></li>
                            <li><Link to="/chatbot">ChatBot</Link></li>
                            <li><Link to="/graph">Graph Plotter</Link></li>
                            <li><Link to="/data">Data Helper</Link></li>
                            <li><Link to="/aboutus">About</Link></li>
                        </ul>
                    </div>
                    <div className="col-7 col-sm-4" >
                        <h5>Our Address</h5>
                        <address style={{color:'white'}}>
                            GB Pant Institute of Engineering and Technology<br />
                            Pauri ,Uttarakhand<br />
                            India<br />
                            <i className="fa fa-phone fa-lg"></i> : +91 9319708373<br />
                            <i className="fa fa-envelope fa-lg"></i> : <a href="mailto:aswals8991@gmail.com">
                                aswals8991@gamil.com</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-google" href="http://google.com/+"> <i className="fa fa-google"> </i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="https://www.linkedin.com/in/shubhamaswal"> <i className="fa fa-linkedin"> </i></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://github.com/QwertyAswal"> <i className="fa fa-github"> </i></a>
                            <a className="btn btn-social-icon btn-google" href="http://youtube.com/"> <i className="fa fa-youtube"> </i></a>
                            <a className="btn btn-social-icon btn-linkedin" href="mailto:aswals8991@gmail.com"> <i className="fa fa-yahoo"> </i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p><br /></p>
                        <p>© Copyright 2020 MathBot</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;