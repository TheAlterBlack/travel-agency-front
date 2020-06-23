import React, { PureComponent } from 'react';
import Slider from '../../components/Slider';
import ListItems from '../../components/ListItems';
import MiddleContent from "../../components/MiddleContent";

export default class Home extends PureComponent {
    render () {
        return (
            <>
                <Slider/>
                <ListItems/>
                <MiddleContent/>
            </>
        );
    }
}
