import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import {
    getDropped,
    dropPiece
} from '../puzzleSlice';

import { SvgHandler } from '../../../components/svg-handler/SvgHandler';

import styles from './DropZone.module.css';

export function DropZone(props) {

    const dispatch = useDispatch();
    const dropped = useSelector(getDropped);
    const {t} = useTranslation('modal');

    function dragOverHandler(ev) {
        ev.preventDefault();
        ev.dataTransfer.dropEffect = "move";
    }
    
    function dropHandler(ev) {
        ev.preventDefault();

        var ref = ev.dataTransfer.getData("application/dragRef");
        if(ref) {
            dispatch(dropPiece({ id: parseInt(ev.target.id), ref: ref}));
        }
    }

    function checkPuzzleValidity(key = 0, error = false) {
        if(key === dropped.length) {
            return {error};
        }
        
        if(dropped[key].ref === null) {
            return null;
        } else if(dropped[key].ref !== props.targetResult[key]) {
            error = true;
        }

        return checkPuzzleValidity(key + 1, error);
    }

    const renderedDropped = dropped.map(el => {
        if(el.ref) {
            return (
                <SvgHandler
                    src={props.puzzlePieceList[el.ref]}
                    id={el.id}
                    key={el.id}
                    dragRef={el.ref}
                    onDropCallback={dropHandler}
                    onDragOverCallback={dragOverHandler}
                    onDragCallback={props.onDragCallback}/>
            );
        } else {
            return <div className={styles.empty} key={el.id} id={el.id} onDrop={dropHandler} onDragOver={dragOverHandler}></div>;
        }
    });

    const puzzleValidityState = checkPuzzleValidity();
    var puzzleValidityMessage;
    var puzzleValidityStyle;

    if(puzzleValidityState) {
        if(puzzleValidityState.error) {
            puzzleValidityMessage = <p className={styles.puzzleMessageError}>{t('ink_sheet.puzzle.invalidPuzzle')}</p>
            puzzleValidityStyle = styles.puzzleError;
        } else {
            puzzleValidityMessage = <p className={styles.puzzleMessageSuccess}>{t('ink_sheet.puzzle.validPuzzle')}</p>
            puzzleValidityStyle = styles.puzzleSuccess;
            // Callback puzzle is complete
            props.puzzleCompleteCallback();
        }
    }

    return(
        <div className={styles.zone}>
            <div className={`${styles.puzzle} ${puzzleValidityStyle}`}>
                {renderedDropped}
            </div>
            {puzzleValidityMessage}
        </div>
    )
}