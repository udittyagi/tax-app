import React from 'react';
import classes from './AboutCard.module.css';

const aboutCard = (props) => {

    return (
        <section className={classes.AboutCard}>
            <section className={classes.Image} >
                <img src={props.src} alt={props.alt} />
            </section>
            <section className={classes.Data}>
                <div>{props.children[0]}</div>
                <hr></hr>
                <div>{props.children[1]}</div>
            </section>
        </section>
    );
}

export default aboutCard;