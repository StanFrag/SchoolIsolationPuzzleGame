import { useDispatch } from 'react-redux';
import { add } from '../../features/dialog/dialogSlice';
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
    }
      
    return(
        <img src={props.src} onClick={HandleClick} alt="" className={styles.svg}/>
    );
}