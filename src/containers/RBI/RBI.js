import React, { Component }from 'react';
import '../GST/GST.css';
import ServiceSideMenu from '../../UI/ServiceSideMenu/ServiceSideMenu';
import Ionicon from 'react-ionicons';
import Compliances from './Compliances/Compliances';

class IncomeTax extends Component {
   
    state = {
        selectedService : "NBFC_Compliances",
        showMobileSideDrawer : false,
    }
    services = [
        "NBFC_Compliances",
    ];

    changeServiceHandler = (service) => {
        this.setState({
            selectedService:service
        })
    }

    mobileSideDrawerHandler = () => {
        const show = !this.state.showMobileSideDrawer;
        console.log(show);
        this.setState({showMobileSideDrawer:show});
    }
    componentDidMount(){
        const query = new URLSearchParams(this.props.location.search);
        const service = query.get('service');
        if(service){
            this.setState({selectedService:service})
        }
    }
    
    render() {
        let activeService = null ;
        switch(this.state.selectedService){
            case this.services[0]:
                activeService = (<Compliances/>);
                break;
            default:
                activeService=(<Compliances />);
        }
        let sideDrawerIconClass = "HideIonIcon";
        if(this.state.showMobileSideDrawer){
            sideDrawerIconClass = "IonIcon";
        }
        return (
            <section className="Service">
                <ServiceSideMenu services={this.services} 
                                title="RBI" clicked={this.changeServiceHandler} 
                                activeService={this.state.selectedService}
                                showMobileSideDrawer={this.state.showMobileSideDrawer}
                />
                <section className={sideDrawerIconClass}>
                    <Ionicon icon="ios-arrow-dropright-circle" 
                            fontSize="35px" 
                            onClick={this.mobileSideDrawerHandler} color=" #333333"
                    />
                </section>
                <div className="ServiceDescription">
                    {activeService}
                </div>
            </section>
        );
    }
   
}

export default IncomeTax;