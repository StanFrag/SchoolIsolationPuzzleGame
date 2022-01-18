import React from 'react';

import { Clue } from '../../features/clue/Clue';
import { Counter } from '../../features/counter/Counter';
import { Dialog } from '../../features/dialog/Dialog';

import { Locker } from '../locker/Locker';

import {ReactComponent as MainDesk} from '../../assets/svg/bureau_1.svg';
import {ReactComponent as Desk1} from '../../assets/svg/bureau_2.svg';
import {ReactComponent as Desk2} from '../../assets/svg/bureau_3.svg';
import {ReactComponent as Desk3} from '../../assets/svg/bureau_4.svg';

import {ReactComponent as Clock} from '../../assets/svg/horloge.svg';
import {ReactComponent as InformationBoard1} from '../../assets/svg/information_1.svg';
import {ReactComponent as InformationBoard2} from '../../assets/svg/information_2.svg';
import {ReactComponent as LeftBoard} from '../../assets/svg/tableau_gauche.svg';
import {ReactComponent as RightBoard} from '../../assets/svg/tableau_droite.svg';
import {ReactComponent as Window} from '../../assets/svg/fenetre.svg';

import styles from './Game.module.css';

export function Game() {
  return (
    <div className={styles.verticalRow}>
      <header className={styles.header}>
        <Clue />
        <Counter />
      </header>
      <div className={styles.body}>
        <section className={styles.primaryZone}>
            <div className={styles.upPrimaryZone}>
                <div className={styles.clockInformation}>
                    <div className={styles.clock}>
                        <Clock className={styles.svg} />
                    </div>
                    <InformationBoard1 className={styles.svg} />
                </div>
                <div className={styles.classroomBoard}>
                    <div className={styles.leftClassroomBoard}>
                        <LeftBoard className={styles.svg} />
                    </div>
                    <div className={styles.rightClassroomBoard}>
                        <RightBoard className={styles.svg} />
                    </div>
                </div>
                <InformationBoard2 className={styles.svg} />
                <div className={styles.window}>
                    <Window className={styles.svg} />
                </div>
            </div>
            <div className={styles.downPrimaryZone}>
                <MainDesk className={styles.svg} />
                <Desk1 className={styles.svg} onClick={(e) => {alert("Hello!"); console.log(e)}} />
                <Desk2 className={styles.svg} />
                <Desk3 className={styles.svg} />
            </div>
        </section>
        <section className={styles.secondaryZone}>
            <Locker />
        </section>
      </div>
      <footer className={styles.footer}>
        <Dialog />
      </footer>
    </div>
  );
}