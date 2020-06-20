import React, {Component} from "react";

export default class MenuResponsive extends Component {
    render() {
        return (
            <div className="menu-responsive">
                <ul>
                    <li className="active"><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>
        );
    };
}