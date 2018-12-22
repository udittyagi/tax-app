import React, { Component }from 'react';
import '../GST/GST.css';
import ServiceSideMenu from '../../UI/ServiceSideMenu/ServiceSideMenu';
import Ionicon from 'react-ionicons';
import ITRFiling from './ITRFiling/ITRFiling';
import TDSReturn from './TDSReturn/TDSReturn';
import Registration from './Registration/Registration';
import TaxNotice from './TaxNotice/TaxNotice';

class IncomeTax extends Component {
   
    state = {
        selectedService : 'ITR_Filing', 
        showMobileSideDrawer : false,
    }
    services = [
        "ITR_Filing",
        "TDS_Return_Filing",
        "Registration",
        "Tax_Notice_Management"

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
                activeService = (<ITRFiling/>);
                break;
            case this.services[1]:
                activeService = (<TDSReturn />);
                break;
            case this.services[2]:
                activeService = (<Registration />);
                break;
            case this.services[3]:
                activeService = (<TaxNotice />);
                break;
            default:
                activeService=(<ITRFiling />);
        }
        let sideDrawerIconClass = "HideIonIcon";
        if(this.state.showMobileSideDrawer){
            sideDrawerIconClass = "IonIcon";
        }
        return (
            <section className="Service">
                <ServiceSideMenu services={this.services} 
                                title="Income Tax" clicked={this.changeServiceHandler} 
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