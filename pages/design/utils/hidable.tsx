import {default as React, useState} from 'react';
import  styles from './utils.module.scss';

const Hidable = ({name, children}) => {
    const [showing, setShowing] = useState(true);
    return <div className={showing && styles.hidable}>
        <h2>{name} &nbsp; <span className={styles.toggle} onClick={() => setShowing((prevState => !prevState))}>Toggle</span></h2>
        {showing && children}
    </div>
};
export default Hidable
