import React, { Component } from "react";
import slide2Image from './../../images/templatemo_slide_2.jpg';

export default class Slide2 extends Component {
    render() {
        return (
            <>
                <div className="overlay"></div>
                <img src={slide2Image} alt="Special 2"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4">
                            <div className="flex-caption visible-lg">
                                <span className="price">$12,400</span>
                                <h3 className="title">Bercelona, Spain</h3>
                                <p>You may visit <a href="http://tourkrub.co" target="_parent">Tour
                                    Krub</a> for Thai Tour Packages. Duis fermentum nibh sit amet felis
                                    mattis, eu convallis risus egestas.</p>
                                <a href="#" className="slider-btn">Reserve Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}