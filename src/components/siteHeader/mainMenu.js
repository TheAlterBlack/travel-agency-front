import React, {Component} from 'react';
import styles from "../../css/main.css"

export default class MainMenu extends Component {
    render() {
        return (
            <div className={styles.mainHeader}>
                <ul className={styles.visibleLg+" "+styles.visibleMd}>
                    <li className={styles.active}><a href="index.html">Home</a></li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="events.html">Events</a></li>
                    <li><a href="about.html">About Us</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
                <a href="#" className={styles.toggleMenu+" "+styles.visibleSm+" "+styles.visibleXs}>
                    <i className={styles.fa+" "+styles.faBars} />
                </a>
            </div>
        );
    };
}