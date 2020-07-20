import React, { Component } from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import About from './AboutComponent';
import Graph from './GraphComponent';
import Data from './DataComponent';
import ChatBot from './ChatComponent';
import { Switch, Route, Redirect } from 'react-router-dom';


class Main extends Component {

    render() {
        const HomePage = () => {
            return (
                <Home />
            );
        }
        return (
            <>
                <Header />
                <div className='container-fluid'>
                    <Switch>
                        <Route path="/home" component={HomePage} />
                        <Route exact path='/chatbot' component={() => <ChatBot />} />
                        <Route exact path="/aboutus" component={() => <About />} />
                        <Route exact path="/graph" component={() => <Graph />} />
                        <Route exact path="/data" component={() => <Data />} />
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <Footer />
            </>
        );
    }
}

export default Main;
