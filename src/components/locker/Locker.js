import React from 'react';

import {ReactComponent as Locker1} from '../../assets/svg/casier_1.svg';
import {ReactComponent as Locker2} from '../../assets/svg/casier_2.svg';
import {ReactComponent as Locker3} from '../../assets/svg/casier_3.svg';
import {ReactComponent as Locker4} from '../../assets/svg/casier_4.svg';
import {ReactComponent as Locker5} from '../../assets/svg/casier_5.svg';
import {ReactComponent as Locker6} from '../../assets/svg/casier_6.svg';
import {ReactComponent as Locker7} from '../../assets/svg/casier_7.svg';

import {ReactComponent as UpperLocker} from '../../assets/svg/haut_casier.svg';

import styles from './Locker.module.css';

export function Locker() {
  return (
        <div>
            <div className={styles.lockerUp}>
                <UpperLocker className={styles.svg} />
            </div>
            <div className={styles.locker}>
                <div>
                    <div>
                        <div className={styles.lockerName}>1 - Anna</div>
                        <Locker1 className={styles.svg} />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>2 - Jean</div>
                        <Locker2 className={styles.svg} />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>3 - Jean</div>
                        <Locker3 className={styles.svg} />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>4 - Jean</div>
                        <Locker4 className={styles.svg} />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>5 - Jean</div>
                        <Locker5 className={styles.svg} />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>6 - Jean</div>
                        <Locker6 className={styles.svg} />
                    </div>
                </div>
                <div>
                    <div>
                        <Locker7 className={styles.svg} />
                    </div>
                </div>
            </div>
        </div>
  );
}