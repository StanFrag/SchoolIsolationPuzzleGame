import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
    getLockCode,
    addNumberToLock,
    reinitLock
} from './unlockSlice';

import { add } from '../dialog/dialogSlice';

import { showModal } from '../modal/modalSlice';

import { SvgHandler } from '../../components/svg-handler/SvgHandler';
import Cake from '../../assets/svg/cake.svg';

import styles from './UnlockBox.module.css';

export function UnlockBox(props) {
    const dispatch = useDispatch();
    const {t} = useTranslation('modal');

    const lockCode = useSelector(getLockCode);
    const codeToUnlock = "3106"; // target code

    var isUnlock = false;
    var errorMessage;
    var lockInformation = <div className={styles.lockInformationLock}>{t('unlock_box.lock')}</div>;

    // if code reach max code number
    if(lockCode.length === codeToUnlock.length) {
        // code is valid
        if(lockCode === codeToUnlock) {
            isUnlock = true;
            // show box is unlock
            lockInformation = <div className={styles.lockInformationUnlock}>{t('unlock_box.unlock')}</div>;
        } else {
            // display error message
            errorMessage = <p className={styles.lockErrorMessage}>{t('unlock_box.wrong_code')}</p>;
        }
    }

    function addCode(n) {
        if(isUnlock) return; // If already unlock dont do anything
        errorMessage = null; // reinit error message
        // if code reach max value we reinit code
        if(lockCode.length === codeToUnlock.length) {
            dispatch(reinitLock());
        }
        // add choose number to code lock
        dispatch(addNumberToLock(n));
    }

    function openBox() {
        if(!isUnlock) return; // if code dont unlock we cant open box
        dispatch(add('unlock_box'));
        dispatch(showModal('final')); // show final modal
    }

    return (
        <div className={styles.modal}>
            <div className={styles.close} onClick={props.onCloseButtonClick}>&#10005;</div>
            <div className={styles.container}>
                <div>
                    <div className={styles.boxLeft}></div>
                    <div className={styles.boxRight}>
                        <div className={styles.titleBox}>
                            <h3 className={styles.cakeBox}>{t('unlock_box.cake_box')}</h3>
                            <div className={styles.openButtonContainer}>
                                <button className={isUnlock ? styles.openButton : styles.closedButton} onClick={openBox}>{t('unlock_box.open_box')}</button>
                            </div>
                        </div>
                        <div>
                            <SvgHandler src={Cake} />
                        </div>
                    </div>
                </div>
                <div className={styles.separator}></div>
                <div>
                    <div className={styles.boxLeft}></div>
                    <div className={styles.boxRight}>
                        <div className={styles.lockContainer}>
                            <div className={styles.lockNumber} onClick={() => addCode(1)}>1</div>
                            <div className={styles.lockNumber} onClick={() => addCode(2)}>2</div>
                            <div className={styles.lockNumber} onClick={() => addCode(3)}>3</div>
                            <div className={styles.lockNumber} onClick={() => addCode(4)}>4</div>
                            <div className={styles.lockNumber} onClick={() => addCode(5)}>5</div>
                            <div className={styles.lockNumber} onClick={() => addCode(6)}>6</div>
                            <div className={styles.lockNumber} onClick={() => addCode(7)}>7</div>
                            <div className={styles.lockNumber} onClick={() => addCode(8)}>8</div>
                            <div className={styles.lockNumber} onClick={() => addCode(9)}>9</div>
                            <div className={styles.lockNumber} onClick={() => addCode(0)}>0</div>
                        </div>
                        <div>
                            <div className={styles.lockInformation}>
                                <div className={styles.lockInformationCode}>Code {lockCode.length > 0 ? lockCode : '----' }</div>
                                {lockInformation}
                            </div>
                            {errorMessage}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}