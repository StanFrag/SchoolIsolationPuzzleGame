import React from 'react';

import { SvgHandler } from '../../../components/svg-handler/SvgHandler';

import styles from './DragZone.module.css';

export function DragZone(props) {

    const renderedDraggable = props.puzzlePieceList.map( (el, i) => {
        return (
            <SvgHandler key={i} src={el} dragRef={i} onDragCallback={props.onDragCallback}/>
        );
    });

    return (
        <div className={styles.zone}>
            {renderedDraggable}
        </div>
    )
}