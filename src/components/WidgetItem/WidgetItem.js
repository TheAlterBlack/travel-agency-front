import React, { Component } from "react";
import image from '../../styles/images/event_1.jpg'
import { Link } from "react-router-dom";

export default class WidgetItem extends Component {
    render() {
        const { widgetItem } = this.props;

        return (
            <div className="widget-item">
                <h3 className="widget-title">{widgetItem.title}</h3>
                <div className="sample-thumb">
                    <img src={image} alt="New Event" title="New Event"/>
                </div>
                <h4 className="consult-title">{widgetItem.title}</h4>
                <p>{widgetItem.description}<br/><br/>Price: {widgetItem.price}<br/><br/>
                    <Link to={"/events/" + widgetItem.id}>Click here to see more!</Link>
                </p>
            </div>
        )
    }
}