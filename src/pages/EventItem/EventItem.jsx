/**
 * Events component script class
 *
 * @package    Common
 */

import React, { PureComponent } from 'react';
import axios from 'axios';

export default class EventItem extends PureComponent {
    state = {
        loading: false,
        item: {},
    };

    componentDidMount () {
        this.loadEvent();
    }

    loadEvent () {
        const { match: { params: { id } } } = this.props;
        // axios.get(`http://localhost:3001/vacations/${id}`);
    }

    render () {


        return (
            <>
            </>
        );
    }
}
