import React from 'react';
import { useDispatch } from 'react-redux';

import Puzzle1 from '../../assets/svg/puzzle_1.svg';
import Puzzle2 from '../../assets/svg/puzzle_2.svg';
import Puzzle3 from '../../assets/svg/puzzle_3.svg';
import Puzzle4 from '../../assets/svg/puzzle_4.svg';
import Puzzle5 from '../../assets/svg/puzzle_5.svg';
import Puzzle6 from '../../assets/svg/puzzle_6.svg';
import Puzzle7 from '../../assets/svg/puzzle_7.svg';
import Puzzle8 from '../../assets/svg/puzzle_8.svg';
import Puzzle9 from '../../assets/svg/puzzle_9.svg';

import { DropZone } from './drop-zone/DropZone';
import { DragZone } from './drag-zone/DragZone';

import { complete } from '../clue/clueSlice';

import styles from './Puzzle.module.css';

export function Puzzle() {
    const dispatch = useDispatch();

    function dragStartHandler(ev) {
        // On ajoute l'identifiant de l'élément cible à l'objet de transfert
        ev.dataTransfer.setData("application/dragRef", parseInt(ev.target.getAttribute('data-ref')));
        ev.dataTransfer.dropEffect = "move";
    }

    function puzzleComplete() {
        dispatch(complete({id: 2, value: 6}));
    }

    const targetResultPuzzle = [5, 2, 3, 4, 7, 1, 0, 6, 8];
    const svgPieceList = [ Puzzle1, Puzzle2, Puzzle3, Puzzle4, Puzzle5, Puzzle6, Puzzle7, Puzzle8, Puzzle9 ];

    return (
        <div className={styles.container}>
            <DropZone targetResult={targetResultPuzzle} puzzlePieceList={svgPieceList} onDragCallback={dragStartHandler} puzzleCompleteCallback={puzzleComplete} />
            <DragZone puzzlePieceList={svgPieceList} onDragCallback={dragStartHandler}/>
        </div>
    );
}
