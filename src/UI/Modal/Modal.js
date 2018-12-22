import React from 'react';
import classes from './Modal.module.css';
import Radium from 'radium';

const modal = (props) => {
    const styles={
        width:"80%",
        '@media(min-width: 650px)':{
            width:80/props.size+"%"},
    }
    return (<div className={classes.Modal} style={styles}>
        <div>{props.children[0]}</div>
        <hr></hr>
        <div>{props.children[1]}</div>
    </div>);
}

export default Radium(modal);