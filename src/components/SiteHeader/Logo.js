import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from './../../styles/images/logo.png';

export default class Logo extends Component {
    render () {
        return (
            <div className={this.props.className}>
                <Link to="/">
                    <img
                        src={ logo }
                        alt="Travel agency"
                        title="Travel agency"
                    />
                </Link>
            </div>
        );
    };
}
