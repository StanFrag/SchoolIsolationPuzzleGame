import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Introduction } from '../../components/introduction/Introduction';
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
            modalToShow = <Introduction />;
            break;
        case 'unlock-box':
            modalToShow = <UnlockBox onCloseButtonClick={() => {dispatch(hideModal());}}/>;
            break;
    }

    return (
        <div className={styles.overlay}>
            {modalToShow}
        </div>
    );
}