import React from 'react';
import { useSelector } from 'react-redux';
import {
  selectCount,
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  const count = useSelector(selectCount);

  return (
    <section className={styles.row}>
      <h3>Coups joués</h3>
      <p className={styles.value}>{count}</p>
    </section>
  );
}
