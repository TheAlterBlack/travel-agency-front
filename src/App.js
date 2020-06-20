import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SiteHeader from './components/SiteHeader';
// TODO #1
// import SiteFooter from './components/SiteFooter';
import Home from './pages/Home';
import Events from './pages/Events';
// TODO #3
import EventItem from './pages/EventItem';

export default class App extends Component {
    render () {
        return (
            <div className="App">
                <BrowserRouter>
                    <SiteHeader/>

                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/events" component={Events}/>
                        <Route exact path="/events/:id" component={EventItem}/>
                    </Switch>

                </BrowserRouter>
            </div>
        );
    }
}
