/**
 * Events component script class
 *
 * @package    Common
 */

import React, { PureComponent } from 'react';
import axios from 'axios';

export default class Events extends PureComponent {
    state = {
        loading: false,
        list: [],
    };

    componentDidMount () {
        this.loadEvents();
    }

    loadEvents () {
        this.setState({
            loading: true,
        }, () => {
            axios.get('http://localhost:3001/vacations')
                 .then((response) => {
                     console.log(response);
                     this.setState({
                         loading: false,
                         list: response.data,
                     });
                 })
                 .catch((error) => {
                     this.setState({
                         loading: false,
                     });
                 });
            setTimeout(() => {
                this.setState({
                    loading: false,
                });
            }, 2000);
        });
    }

    render () {
        const { loading, list } = this.state;

        console.log(list);

        return (
            <>
                { loading && <p>Loading...</p> }
            </>
        );
    }
}
