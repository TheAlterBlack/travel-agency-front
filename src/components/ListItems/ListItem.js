import React, { Component } from 'react';

export default class ListItem extends Component {
    render() {
        return (
            <div className="list-item">
                <div className="list-thumb">
                    <div className="title">
                        <h4>{this.props.item.title}</h4>
                    </div>
                    <img src={this.props.item.image} alt={this.props.item.alt}/>
                </div>
                <div className="list-content">
                    <h5>{this.props.item.contentTitle}</h5>
                    <span>{this.props.item.contentDescription}</span>
                    <button type="button" className="price-btn">{this.props.item.price} Book Now</button>
                </div>
            </div>
        );
    };
}
