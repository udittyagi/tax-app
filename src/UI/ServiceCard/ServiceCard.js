import React, { Component } from 'react';
import classes from './ServiceCard.module.css';
import Ionicon from 'react-ionicons';
import { withRouter } from 'react-router-dom';

class ServiceCard extends Component{

    state={
        display: false,
    }

    toggleDisplayHandler = () => {
        const disp = !this.state.display;
        this.setState({display:disp});
    }

    directToHandler =(service) => {
        const menu = service.replaceAll(" ","_");
        const path = this.props.title.toLowerCase().replace(" ","");
        this.props.history.push({
            pathname:"/"+path,
            search:"?service="+menu,
            hash:"#start"
        })
    }

    render(){

        const list = this.props.services.map((service,index) => {
            return (<li key={index} onClick={() => this.directToHandler(service)}>{service}</li>);
        })

        let displayClass = classes.NoDisplay;
        let serviceCardClass=[classes.ServiceCard];
        let ionIcon = (<Ionicon icon="ios-arrow-dropdown" fontSize="35px" color="#f5f5f0"/>);
        if(this.state.display){
            displayClass = classes.Display;
            ionIcon = (<Ionicon icon="ios-arrow-dropup" fontSize="35px" color="#f5f5f0"/>);
        }
        if(!this.state.display){
            serviceCardClass = serviceCardClass.concat(classes.NoShowServiceCard);
        }

        return (
            <div className={serviceCardClass.join(' ')}>
                <div className={classes.Heading} onClick={this.toggleDisplayHandler}>
                    <div>{this.props.title}</div>
                    {ionIcon}
                </div>   
                <hr></hr>   
                <div  style={{marginTop:'0px'}} className={displayClass}>
                    <ul >
                        {list}
                    </ul>
                </div> 
                
            </div>
        );
    }
    
}

export default withRouter(ServiceCard);