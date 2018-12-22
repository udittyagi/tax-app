import React from 'react';
import classes from './ServiceSideMenu.module.css';



const serviceSideMenu = (props) => {
    const links = props.services.map((service, index) => {
        const modifiedName = service.replaceAll("_"," ");
        let activeClass = ' ';
        if(service === props.activeService){
            activeClass=classes.activeMark;
        }
        return (<div key={index}  onClick={() => props.clicked(service)} className={activeClass}>{modifiedName}</div>)
    })
    let showServiceClass = classes.HideServiceSideMenu;
    if(props.showMobileSideDrawer){
        showServiceClass = classes.ServiceSideMenu
    }
    return (
        <div className={showServiceClass}>
            <h2>{props.title}</h2>
            {props.showSummary ? <div className={classes.button} onClick={props.showSummary}>Summary</div> : null}
            <hr></hr>
            {links}
        </div>
    );
}

export default serviceSideMenu;