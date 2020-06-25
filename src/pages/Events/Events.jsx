/**
 * Events component script class
 *
 * @package    Common
 */

import React, { PureComponent } from 'react';
import axios from 'axios';
import WidgetItem from "../../components/WidgetItem";

export default class Events extends PureComponent {
    state = {
        loading: false,
        list: [],
    };

    componentDidMount() {
        this.loadEvents();
    }

    loadEvents() {
        this.setState({
            loading: true,
        }, () => {
            axios.get('http://localhost:3001/vacations')
                .then((response) => {
                    this.setState({
                        loading: false,
                        list: response.data.data,
                    });
                })
                .catch((error) => {
                    this.setState({
                        loading: false,
                    });
                });
        });
    }

    render() {
        const {loading, list} = this.state;
        return (
            <>
                <div className="page-top" id="templatemo_events"/>
                <div className="middle-content">
                    <div className="container">
                        <div className="row">
                            {!loading && list.map((widgetItem, index) => (
                                <WidgetItem key={index} widgetItem={widgetItem}/>
                            ))}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
