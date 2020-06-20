import React, {Component} from "react";
import slide1Image from './../../images/templatemo_slide_1.jpg';

export default class Slide1 extends Component {
    render() {
        return (
            <>
                <div className="overlay"></div>
                <img src={slide1Image} alt="Special 1"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4">
                            <div className="flex-caption visible-lg">
                                <span className="price">$7,500</span>
                                <h3 className="title">Venice, Italy</h3>
                                <p>Travel is a responsive Bootstrap layout from
                                    <span className="blue">template</span><span
                                        className="green">mo</span> website.
                                    All images used in this template are from
                                    <a rel="nofollow" href="http://unsplash.com"
                                       target="_parent">Unsplash</a>.</p>
                                <a href="#" className="slider-btn">Pre-booking</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}