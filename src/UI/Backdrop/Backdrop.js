import React from 'react';
import classes from './Backdrop.module.css';
import Ionicon from 'react-ionicons';

const backdrop = (props) => {
    return (
        <div className={classes.Backdrop}>
            <div className={classes.CloseIcon}>
                <Ionicon icon="md-close" fontSize="30px"  color="#f5f5f0" onClick={props.click}/>
            </div>        
        </div>
    );
}

export default backdrop;