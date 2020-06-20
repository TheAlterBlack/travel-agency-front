import React, { Component } from "react";
import slide3Image from './../../images/templatemo_slide_3.jpg';

export default class Slide3 extends Component {
    render() {
        return (
            <>
                <div className="overlay"></div>
                <img src={slide3Image} alt="Special 3"/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4">
                            <div className="flex-caption visible-lg">
                                <span className="price">$20,800</span>
                                <h3 className="title">Basel, Switzerland</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum
                                    nibh sit amet felis mattis, eu convallis risus egestas.</p>
                                <a href="#" className="slider-btn">Book Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
}