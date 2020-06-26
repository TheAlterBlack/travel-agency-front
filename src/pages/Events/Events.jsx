/**
 * Events component script class
 *
 * @package    Common
 */

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import WidgetItem from '../../components/WidgetItem';
import { loadList } from '../../actions/events';

class Events extends PureComponent {
    componentDidMount () {
        this.props.loadEvents();
    }

    render () {
        const { loading, list } = this.props;

        return (
            <>
                <div className="page-top" id="templatemo_events"/>
                <div className="middle-content">
                    <div className="container">
                        <div className="row">
                            { !loading && list.map((widgetItem) => (
                                <WidgetItem key={ widgetItem.id } widgetItem={ widgetItem }/>
                            )) }
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default connect(
    (store) => ({
        list: store.events.list,
        loading: store.events.loading,
    }),
    (dispatch) => ({
        loadEvents: () => dispatch(loadList()),
    })
)(Events);
