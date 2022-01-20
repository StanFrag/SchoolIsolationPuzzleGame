import React from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { add } from '../../features/dialog/dialogSlice';
import { hideModal } from '../../features/modal/modalSlice';

import styles from './Introduction.module.css';

export function Introduction(props) {
    const dispatch = useDispatch();
    const {t} = useTranslation('modal');
    
    function handleClick() {
        dispatch(add('introduction_after'));

        props.onCloseButtonClick();
    }

    return (
        <div className={styles.container}>
            <p>{t('introduction.text_1')}</p>
            <p>{t('introduction.text_2')}</p>
            <p>{t('introduction.text_3')}</p>
            <button onClick={handleClick}>{t('introduction.button')}</button>
        </div>
    );
}