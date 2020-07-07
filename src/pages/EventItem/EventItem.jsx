/**
 * Events component script class
 *
 * @package    Common
 */

import React, { PureComponent } from 'react';
import {connect} from "react-redux";

import image from "../../styles/images/event_2.jpg";
import {loadItem} from "../../actions/event";

class EventItem extends PureComponent {
    componentDidMount() {
        const { match: { params: { id } } } = this.props;
        this.props.loadItem(id);
    }

    render() {
        const {loading, item} = this.props;

        return (
            <>
                <div className="page-top" id="templatemo_events"/>
                <div className="middle-content">
                    <div className="container">
                        <div className="row">
                            {!loading &&
                                <div className="widget-item">
                                    <h3 className="widget-title">{item.title}</h3>
                                    <div className="sample-thumb">
                                        <img src={image} alt="New Event" title="New Event"/>
                                    </div>
                                    <h4 className="consult-title">{item.title}</h4>
                                    <p>{item.description}<br/><br/>
                                        Price: {item.price}<br/><br/>
                                        Date Start: {item.date_start}<br/><br/>
                                        Date End: {item.date_end}<br/><br/>
                                    </p>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(
    (store) => ({
        item: store.event.item,
        loading: store.event.loading,
    }),
    (dispatch) => ({
        loadItem: (id) => dispatch(loadItem(id)),
    })
)(EventItem);
