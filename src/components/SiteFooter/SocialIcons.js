import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class SocialIcons extends Component {
    render() {
        return (
            <ul className="social-icons">
                <li><Link to="/" className="fa fa-facebook"/></li>
                <li><Link to="/" className="fa fa-twitter"/></li>
                <li><Link to="/" className="fa fa-linkedin"/></li>
                <li><Link to="/" className="fa fa-flickr"/></li>
                <li><Link to="/" className="fa fa-rss"/></li>
            </ul>
        );
    }
}