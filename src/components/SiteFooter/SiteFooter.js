import React, { Component } from 'react';
import Logo from './../SiteHeader/Logo';
export default class PartnerList extends Component {
    render() {
        return (
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <div className="footer-logo">
                                <Logo/>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="copyright">
                            <span>
                                Copyright &copy; 2014 <a href="#">Company Name</a>
                            </span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <ul className="social-icons">
                                <li><a href="#" className="fa fa-facebook"/></li>
                                <li><a href="#" className="fa fa-twitter"/></li>
                                <li><a href="#" className="fa fa-linkedin"/></li>
                                <li><a href="#" className="fa fa-flickr"/></li>
                                <li><a href="#" className="fa fa-rss"/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
