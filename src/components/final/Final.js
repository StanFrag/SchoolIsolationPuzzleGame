import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from './Final.module.css';

export function Final() {
    const {t} = useTranslation('modal');
    
    return (
        <div className={styles.container}>
            <h2>{t('final.title')}</h2>
            <p>{t('final.text_1')}</p>
            <p>{t('final.text_2')}</p>
            <p>{t('final.list.title')}</p>
            <ul>
                <li>{t('final.list.text_1')}</li>
                <li>{t('final.list.text_2')}</li>
                <li>{t('final.list.text_3')}</li>
                <li>{t('final.list.text_4')}</li>
            </ul>
            <p>{t('final.text_3')}</p>
        </div>
    );
}