import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Introduction } from '../../components/introduction/Introduction';
import { InkSheet } from '../../components/ink-sheet/InkSheet';
import { Final } from '../../components/final/Final';
import { UnlockBox } from '../unlock-box/UnlockBox';

import { hideModal } from './modalSlice';

import styles from './Modal.module.css';

export function Modal() {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal);

    if(!modal?.show) {
        return null;
    }

    var modalToShow;

    switch (modal.type) {
        case 'intro':
            modalToShow = <Introduction onCloseButtonClick={() => {dispatch(hideModal());}}/>;
            break;
        case 'unlock-box':
            modalToShow = <UnlockBox onCloseButtonClick={() => {dispatch(hideModal());}}/>;
            break;
        case 'ink-sheet':
            modalToShow = <InkSheet onCloseButtonClick={() => {dispatch(hideModal());}}/>;
            break;
        case 'final':
            modalToShow = <Final />;
            break;
        default:
            break;
    }

    return (
        <div className={styles.overlay}>
            {modalToShow}
        </div>
    );
}