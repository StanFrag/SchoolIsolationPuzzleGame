import React from 'react';

import { Clue } from '../../features/clue/Clue';
import { Counter } from '../../features/counter/Counter';
import { Dialog } from '../../features/dialog/Dialog';
import { Modal } from '../../features/modal/Modal';

import { Locker } from '../locker/Locker';
import { SvgHandler } from '../svg-handler/SvgHandler';

import MainDesk from '../../assets/svg/bureau_1.svg';
import Desk1 from '../../assets/svg/bureau_2.svg';
import Desk2 from '../../assets/svg/bureau_3.svg';
import Desk3 from '../../assets/svg/bureau_4.svg';
import Clock from '../../assets/svg/horloge.svg';
import InformationBoard1 from '../../assets/svg/information_1.svg';
import InformationBoard2 from '../../assets/svg/information_2.svg';
import LeftBoard from '../../assets/svg/tableau_gauche.svg';
import RightBoard from '../../assets/svg/tableau_droite.svg';
import Window from '../../assets/svg/fenetre.svg';

import styles from './Game.module.css';

export function Game() {
  return (
    <div className={styles.verticalRow}>
      <header className={styles.header}>
        <Clue />
        <Counter />
      </header>
      <div className={styles.body}>
        <Modal />
        <section className={styles.primaryZone}>
            <div className={styles.upPrimaryZone}>
                <div className={styles.clockInformation}>
                    <div className={styles.clock}>
                        <SvgHandler src={Clock} dialog="clock" />
                    </div>
                    <SvgHandler src={InformationBoard1} dialog="board_information_1" />
                </div>
                <div className={styles.classroomBoard}>
                    <div className={styles.leftClassroomBoard}>
                        <SvgHandler src={LeftBoard} dialog="board_left" completeClue={{id: 1, value: 10}}/>
                    </div>
                    <div className={styles.rightClassroomBoard}>
                        <SvgHandler src={RightBoard} dialog="board_right" />
                    </div>
                </div>
                <SvgHandler src={InformationBoard2} dialog="board_information_2" />
                <div className={styles.window}>
                    <SvgHandler src={Window} dialog="window" />
                </div>
            </div>
            <div className={styles.downPrimaryZone}>
                <SvgHandler src={MainDesk} dialog="desk.desk_main" />
                <SvgHandler src={Desk1} dialog="desk.desk_1"/>
                <SvgHandler src={Desk2} dialog="desk.desk_2" showModal="ink-sheet" />
                <SvgHandler src={Desk3} dialog="desk.desk_3" showModal="unlock-box"/>
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