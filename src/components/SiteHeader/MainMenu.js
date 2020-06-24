import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class MainMenu extends Component {
    render () {
        return (
            <div className="main-menu">
                <ul className="visible-lg visible-md">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/services">Services</NavLink></li>
                    <li><NavLink to="/events">Events</NavLink></li>
                    <li><NavLink to="/about">About Us</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
        );
    };
}
