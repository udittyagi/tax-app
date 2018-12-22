import React, { Component }from 'react';
import './GST.css';
import ServiceSideMenu from '../../UI/ServiceSideMenu/ServiceSideMenu';
import GstRegistration from '../GST/GST_Registration/GST_Registration';
import GstFiling from '../GST/GST_Filing/GST_Filing';
import Ionicon from 'react-ionicons';

class Gst extends Component {
   
    state = {
        selectedService : 'GST_Registration', 
        showMobileSideDrawer : false,
    }
    services = [
        "GST_Registration",
        "GST_Filing",
    ];
    // GstRegistrationMenu = [
    //     "Definition",
    //     "Inclusion",
    //     "Procedures",
    //     "Documents",
    //     "Advantages",
    //     "FAQs"
    // ]
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
                activeService = (<GstRegistration/>);
                break;
            case this.services[1]:
                activeService = (<GstFiling />);
                break;
            default:
                activeService=(<GstRegistration />);
        }
        let sideDrawerIconClass = "HideIonIcon";
        if(this.state.showMobileSideDrawer){
            sideDrawerIconClass = "IonIcon";
        }
        return (
            <section className="Service">
                <ServiceSideMenu services={this.services} 
                                title="GST" clicked={this.changeServiceHandler} 
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

export default Gst;