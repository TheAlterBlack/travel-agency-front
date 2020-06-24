import React, { Component } from 'react';
import SocialIcons from "./SocialIcons";
import Logo from '../Logo';
export default class PartnerList extends Component {
    render() {
        return (
            <div className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 col-sm-4">
                            <Logo className="footer-logo"/>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <div className="copyright">
                            <span>
                                Copyright &copy; 2014 <a href="#">Travel Agency by Dmitry Tishchenko</a>
                            </span>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4">
                            <SocialIcons/>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
