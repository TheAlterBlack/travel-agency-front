import React, { Component } from 'react';
import MainMenu from './MainMenu';
import Logo from '../Logo';

export default class SiteHeader extends Component {
    render () {
        return (
            <div className="site-header">
                <div className="container">
                    <div className="main-header">
                        <div className="row">
                            <div className="col-md-4 col-sm-6 col-xs-10">
                                <Logo className="logo"/>
                            </div>
                            <div className="col-md-8 col-sm-6 col-xs-2">
                                <MainMenu/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}
