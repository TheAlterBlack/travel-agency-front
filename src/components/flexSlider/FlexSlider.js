import React, {Component} from 'react';
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";

export default class FlexSlider extends Component {
    render() {
        return (
            <div className="flexslider">
                <ul className="slides">
                    <li>
                        <Slide1 />
                    </li>
                    <li>
                        <Slide2 />
                    </li>
                    <li>
                        <Slide3 />
                    </li>
                </ul>
            </div>
        );
    };
}