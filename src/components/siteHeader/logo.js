import React, {Component} from 'react';
import styles from "../../css/main.css"

export default class Logo extends Component {
    render() {
        return (
            <div className={styles.logo}>
                <a href="#">
                    <img src="../../images/logo.png" alt="travel html5 template"
                         title="travel html5 template" />
                </a>
            </div>
        );
    };
}