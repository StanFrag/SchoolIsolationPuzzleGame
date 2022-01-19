import React from 'react';

import Locker1 from '../../assets/svg/casier_1.svg';
import Locker2 from '../../assets/svg/casier_2.svg';
import Locker3 from '../../assets/svg/casier_3.svg';
import Locker4 from '../../assets/svg/casier_4.svg';
import Locker5 from '../../assets/svg/casier_5.svg';
import Locker6 from '../../assets/svg/casier_6.svg';
import Locker7 from '../../assets/svg/casier_7.svg';
import UpperLocker from '../../assets/svg/haut_casier.svg';

import { SvgHandler } from '../svg-handler/SvgHandler';

import styles from './Locker.module.css';

export function Locker() {
  return (
        <div>
            <div className={styles.lockerUp}>
                <SvgHandler src={UpperLocker} dialog="locker.upper_locker" />
            </div>
            <div className={styles.locker}>
                <div>
                    <div>
                        <div className={styles.lockerName}>1 - Anna</div>
                        <SvgHandler src={Locker1} dialog="locker.default_locker" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>2 - Jean</div>
                        <SvgHandler src={Locker2} dialog="locker.default_locker" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>3 - Sarah</div>
                        <SvgHandler src={Locker3} dialog="locker.sarah_locker" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>4 - Medhi</div>
                        <SvgHandler src={Locker4} dialog="locker.default_locker" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>5 - Hugo</div>
                        <SvgHandler src={Locker5} dialog="locker.default_locker" />
                    </div>
                </div>
                <div>
                    <div>
                        <div className={styles.lockerName}>6 - Lucas</div>
                        <SvgHandler src={Locker6} dialog="locker.default_locker" />
                    </div>
                </div>
                <div>
                    <div>
                        <SvgHandler src={Locker7} dialog="locker.lower_locker" />
                    </div>
                </div>
            </div>
        </div>
  );
}