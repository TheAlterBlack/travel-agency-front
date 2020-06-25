import React, { Component } from 'react';
import PartnerItem from "./PartnerItem";
import partner1 from '../../styles/images/partners/partner1.png';
import partner2 from '../../styles/images/partners/partner2.png';
import partner3 from '../../styles/images/partners/partner3.png';
const IMAGES = [
    {
        image: partner1,
        name: 'Partner1',
    },
    {
        image: partner2,
        name: 'Partner2',
    },
    {
        image: partner3,
        name: 'Partner3',
    },
    {
        image: partner1,
        name: 'Partner1',
    },
    {
        image: partner2,
        name: 'Partner2',
    },
    {
        image: partner3,
        name: 'Partner3',
    },
];

export default class PartnerList extends Component {
    render() {
        return (
            <div className="partner-list">
                <div className="container">
                    <div className="row">
                        {IMAGES.map((item, index) => (
                            <PartnerItem key={index} image={item.image} name={item.name}/>
                        ))}
                    </div>
                </div>
            </div>
        );
    };
}
