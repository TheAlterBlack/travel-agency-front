import React, { Component } from 'react';

export default class PartnerItem extends Component {
    render() {
        return (
            <div className="col-md-2 col-sm-4 col-xs-6">
                <div className="partner-item">
                    <img src={this.props.image} alt={this.props.name}/>
                </div>
            </div>
        );
    };
}
