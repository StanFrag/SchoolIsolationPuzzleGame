import { useDispatch } from 'react-redux';
import { showModal } from '../../features/modal/modalSlice';
import { add } from '../../features/dialog/dialogSlice';
import { complete } from '../../features/clue/clueSlice';
import { increment } from '../../features/counter/counterSlice';

import styles from './SvgHandler.module.css';

export function SvgHandler(props) {
    const dispatch = useDispatch();

    function HandleClick() {
        // increment counter each click on game element
        dispatch(increment());

        if(props.dialog) {
            dispatch(add(props.dialog));
        }

        if(props.completeClue?.value) {
            dispatch(complete(props.completeClue));
        }

        if(props.showModal) {
            dispatch(showModal(props.showModal));
        }
    }
      
    return(
        <img
            src={props.src}
            id={props.id}
            alt=""

            draggable={ props.onDragCallback ? true : false}
            onDragStart={props.onDragCallback}
            data-ref={props.dragRef}
            onDrop={props.onDropCallback}
            onDragOver={props.onDragOverCallback}
            
            onClick={ HandleClick }
            className={props.dialog ? styles.svg : null}/>
    );
}