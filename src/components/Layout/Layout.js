import React from 'react';
import classes from './Layout.module.css';
import Main from '../../containers/Main/Main';

const layout = (props) => {
    return (
        <div className={classes.Layout}>
            <header >
                <nav className={classes.Nav}>
                <p>logo</p>
                <div className={classes.Sidebar}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li></li>
                    <li><a href="/">About</a></li>
                    <li></li>
                    <li><a href="/">Services</a></li>
                    <li></li>
                    <li><a href="/">Knowledge Portal</a></li>
                </ul>
                </nav>
            </header>
            <Main />
            <div className={classes.Contact}>Contact Us</div>
            <footer>
                
            </footer>
        </div>
        
    );
}

export default layout;