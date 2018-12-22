import React from 'react';
import classes from './Overlay.module.css';

const overlay = (props) => {
    return (
        <div className={classes.Overlay}>
            <h3>Summary</h3>       
            {props.children}
        </div>
    );
}

export default overlay;