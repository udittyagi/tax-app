import React from 'react';
import classes from './Sidebar.module.css';

const sidebar = (props) => {
    return (
        props.visible?(<div className={classes.Sidebar}>{props.children}</div>):null
    );
}

export default sidebar;