import React, {Component} from 'react';
import mainMenu from "./mainMenu";
import logo from "./logo";
import menuResponsive from "./menuResponsive";
import styles from "../../css/main.css"

export default class SiteHeader extends Component {
    render() {
        return (
            <div className={styles.siteHeader}>
                <div className={styles.container}>
                    <div className={styles.mainHeader}>
                        <div className={styles.row}>
                            <div className={styles.colMd4+" "+styles.colSm6+" "+styles.colXs10}>
                                <logo />
                            </div>
                            <div className={styles.colMd8+" "+styles.colSm6+" "+styles.colXs2}>
                                <mainMenu />
                            </div>
                        </div>
                        <div className={styles.row}>
                            <div className={styles.colMd12+" "+styles.visibleSm+" "+styles.visibleXs}>
                                <menuResponsive />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}