import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron, NavItem, Nav, Collapse, NavbarToggler, Media } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNavOpen: false,
        }
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
        console.log(this.state.isNavOpen);
    }

    render() {
        return (
            <div className='container-fluid'>
                <Navbar dark expand="md">
                    <div className='container-fluid'>
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="ml-auto " href="/" >
                            <img src="assets/images/logo.png" height="70" width="70" alt="MathBot" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"> </span> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/chatbot">
                                        <span className="fa fa-user-secret fa-lg"> </span> ChatBot
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/graph">
                                        <span className="fa fa-line-chart fa-lg"> </span> Graph Plotter
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/data">
                                        <span className="fa fa-bar-chart fa-lg"> </span> Data Helper
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg">  </span> About Us
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>

                    </div>
                </Navbar>
                <Jumbotron>
                    <div className='container'>
                        <div className="row row-header">

                            <div className='col-12 col-sm-6'>
                                <h1>MathBot</h1>
                                <p>We take inspiration from the World's best github links and programming blogs, and create a unique fusion of different features. Our brain draining creations will shatter and break your mind!</p>
                            </div>
                            <div className='col-12 col-sm-4 mr-auto'>
                                <Media>
                                    <img src='assets/images/logo_main.png' height="200" width="300" alt='MathBot' />
                                </Media>
                            </div>

                        </div>
                    </div>
                </Jumbotron>
            </div>
        );
    }
}

export default Header;