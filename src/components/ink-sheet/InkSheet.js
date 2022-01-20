import React from 'react';

import { SvgHandler } from '../svg-handler/SvgHandler';

import Ink1 from '../../assets/svg/encre_1.svg';
import Ink2 from '../../assets/svg/encre_2.svg';
import Ink3 from '../../assets/svg/encre_3.svg';
import TearSheet from '../../assets/svg/feuille_dechire.svg';

import styles from './InkSheet.module.css';

export function InkSheet(props) {

    return (
        <div className={styles.modal}>
            <div className={styles.close} onClick={props.onCloseButtonClick}>&#10005;</div>
            <div className={styles.container}>
                <div>
                    <div className={styles.ink}>
                        <SvgHandler src={Ink1} dialog="ink_sheet.ink1" completeClue={{id: 2, value: 6}} />
                    </div>
                    <SvgHandler src={TearSheet} dialog="ink_sheet.tear_sheet" />
                </div>
                <div>
                    <div className={styles.ink}>
                        <SvgHandler src={Ink2} dialog="ink_sheet.ink2" />
                    </div>
                    <div className={styles.ink}>
                        <SvgHandler src={Ink3} dialog="ink_sheet.ink3" />
                    </div>
                </div>
            </div>
        </div>
    );
}