import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Dialog.module.css';

import {ReactComponent as DialogLeft} from '../../assets/svg/dialogue_gauche.svg';
import {ReactComponent as DialogRight} from '../../assets/svg/dialogue_droit.svg';

export function Dialog() {
  const dialog = useSelector(state =>
    state.dialog.value
  )

  if(!dialog) {
    return null;
  }else {
    return (
        <section className={styles.row}>
            <DialogLeft className={styles.leftDialog} />
            <div className={styles.dialogBody}>
                {dialog}
            </div>
            <DialogRight className={styles.rightDialog} />
        </section>
      );
  }
}
