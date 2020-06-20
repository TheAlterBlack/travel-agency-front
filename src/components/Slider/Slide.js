import React, { Component } from 'react';
import cx from 'classnames';

export default class Slide extends Component {
    render () {
        const {
            item: {
                description,
                image,
                price,
                title,
            },
            isActive,
        } = this.props;

        return (
            <li className={cx({
                active: isActive,
            })}>
                <div className="overlay"/>
                <img src={ image } alt={ title }/>
                <div className="container">
                    <div className="row">
                        <div className="col-md-5 col-lg-4">
                            <div className="flex-caption visible-lg">
                                <span className="price">{ price }</span>
                                <h3 className="title">{ title }</h3>
                                <p>{ description }</p>
                                <button type="button" className="slider-btn">Pre-booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        );
    };
}
