import React from 'react';
import { useSelector } from 'react-redux';
import {
    getClues
  } from './clueSlice';
import styles from './Clue.module.css';

export function Clue() {
  const clues = useSelector(getClues);

  const renderedClues = clues.map(clue => (
    <div className={styles.clue} key={clue.id}>
      <p className={clue.value ? styles.addedClue : null}>{clue.value ? clue.value : "?"}</p>
    </div>
  ))

  return (
    <section className={styles.row}>
      <h3>Indices</h3>
      {renderedClues}
    </section>
  );
}
