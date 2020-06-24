import React, { Component } from 'react';
import ListItem from "./ListItem";
import destination1 from './../../styles/images/destination_1.jpg'
import destination2 from './../../styles/images/destination_2.jpg'
import destination3 from './../../styles/images/destination_3.jpg'
import destination4 from './../../styles/images/destination_4.jpg'

const ITEMS = [
    {
        title: 'Italy',
        image: destination1,
        alt: 'destination1',
        contentTitle: 'Rome, Milan, Naples',
        contentDescription: 'SILVER HOTEL, 4 NIGHTS, 5 STARS',
        price: '$1,700',
    },
    {
        title: 'France',
        image: destination2,
        alt: destination2,
        contentTitle: 'Paris, Marseille, Lyon',
        contentDescription: 'NEW PALACE, 5 NIGHTS, 5 STARS',
        price: '$2,200',
    },
    {
        title: 'Germany',
        image: destination3,
        alt: 'destination3',
        contentTitle: 'Berlin, Hamburg, Munich',
        contentDescription: 'LUXE HOTEL, 5 NIGHTS, 6 STARS',
        price: '$3,300',
    },
    {
        title: 'Spain',
        image: destination4,
        alt: 'destination4',
        contentTitle: 'Madrid, Bercelona, Valencia',
        contentDescription: 'GOOD HOTEL, 4 NIGHTS, 6 STARS',
        price: '$4,400',
    },
];

export default class ListItems extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="our-listing owl-carousel">
                        {
                            ITEMS.map((item)=>(
                                <ListItem item={item}/>
                            ))
                        }
                    </div>
                </div>
            </div>
        );
    };
}
