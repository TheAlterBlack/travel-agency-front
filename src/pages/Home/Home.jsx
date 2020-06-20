/**
 * Home component script class
 *
 * @package    Common
 */

import React, { PureComponent } from 'react';

import Slider from '../../components/Slider';
// TODO #2
// import ListItems from '../../components/ListItems';

export default class Home extends PureComponent {
    render () {
        return (
            <>
                <Slider/>
            </>
        );
    }
}
