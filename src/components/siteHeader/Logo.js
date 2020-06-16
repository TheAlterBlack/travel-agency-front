import React, {Component} from 'react';
import logo from './../../images/logo.png'

export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <a href="#">
                    <img src={logo} alt="Travel agency"
                         title="Travel agency" />
                </a>
            </div>
        );
    };
}