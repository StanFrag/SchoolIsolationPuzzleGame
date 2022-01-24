import React from 'react';

import { Puzzle } from '../../features/puzzle/Puzzle';

import styles from './InkSheet.module.css';

export function InkSheet(props) {

    return (
        <div className={styles.modal}>
            <div className={styles.close} onClick={props.onCloseButtonClick}>&#10005;</div>
            <Puzzle />
        </div>
    );
}