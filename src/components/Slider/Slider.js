import React, { Component } from 'react';

import Slide from './Slide';
import slide1Image from './../../styles/images/templatemo_slide_1.jpg';
import slide2Image from './../../styles/images/templatemo_slide_2.jpg';
import slide3Image from './../../styles/images/templatemo_slide_3.jpg';

const SLIDES = [
    {
        description: 'Travel is a responsive Bootstrap layout from website.',
        image: slide1Image,
        price: '$7,500',
        title: 'Venice, Italy',
    },
    {
        description: 'You may visit Tour Krub for Thai Tour Packages. Duis fermentum nibh sit amet felis mattis, eu convallis risus egestas.',
        image: slide2Image,
        price: '$12,400',
        title: 'Barcelona, Spain',
    },
    {
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis fermentum nibh sit amet felis mattis, eu convallis risus egestas.',
        image: slide3Image,
        price: '$20,800',
        title: 'Basel, Switzerland',
    },
];

export default class Slider extends Component {
    state = {
        active: 0,
    };

    setPrev = () => {
        this.setState(({ active }) => ({
            active: active === 0 ? SLIDES.length - 1 : active - 1,
        }));
    };

    setNext = () => {
        this.setState(({ active }) => ({
            active: active >= SLIDES.length - 1 ? 0 : active + 1,
        }));
    };

    render () {
        const { active } = this.state;

        return (
            <div className="flexslider">
                <ul className="slides">
                    { SLIDES.map((item, index) => (
                        <Slide key={ index } item={ item } isActive={ index === active }/>
                    )) }
                </ul>
                <ul className="flex-direction-nav">
                    <li>
                        <button type="button" className="flex-prev" onClick={ this.setPrev }>←</button>
                    </li>
                    <li>
                        <button type="button" className="flex-next" onClick={ this.setNext }>→</button>
                    </li>
                </ul>
            </div>
        );
    };
}
