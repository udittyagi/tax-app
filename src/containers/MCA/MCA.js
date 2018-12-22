import React, { Component }from 'react';
import '../GST/GST.css';
import ServiceSideMenu from '../../UI/ServiceSideMenu/ServiceSideMenu';
import CorporateAnnual from './CorporateAnnual/CorporateAnnual';
import AddRemoveDirector from './AddRemoveDirector/AddRemoveDirector';
import Allotment from './Allotment/Allotment';
import AuthorisedCapital from './AuthorisedCapital/AuthorisedCapital';
import ChangeOfName from './ChangeOfName/ChangeOfName';
import ChangeOfObject from './ChangeOfObject/ChangeOfObject';
import ChargeRegistration from './ChargeRegistration/ChargeRegistration';
import CorporateClosure from './CorporateClosure/CorporateClosure';
import DIR from './DIR/DIR';
import Registered from './Registered/Registered';
import ShareTransfer from './ShareTransfer/ShareTransfer';
import Ionicon from 'react-ionicons';


class MCA extends Component {
   
    state = {
        selectedService : 'Corporate_Annual_Filing', 
        showMobileSideDrawer : false,
    }
    services = [
        "Corporate_Annual_Filing",
        "Add/Remove_Director",
        "Increase_in_Authorised_Capital",
        "Allotment_of_Securities",
        "Registered_Office_Shifting",
        "Charge_Registration",
        "Change_of_Name ",
        "Change_of_Objects",
        "Share_Transfer/Transmission",
        "Corporate_Closure",
        "DIR_3_KYC"
        
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
                activeService = (<CorporateAnnual />);
                break;
            case this.services[1]:
                activeService = (<AddRemoveDirector />);
                break;
            case this.services[2]:
                activeService = (<AuthorisedCapital />);
                break;
            case this.services[3]:
                activeService = (<Allotment />);
                break;
            case this.services[4]:
                activeService = (<Registered />);
                break;
            case this.services[5]:
                activeService = (<ChargeRegistration />);
                break;
            case this.services[6]:
                activeService = (<ChangeOfName />);
                break;
            case this.services[7]:
                activeService = (<ChangeOfObject />);
                break;
            case this.services[8]:
                activeService = (<ShareTransfer />);
                break;
            case this.services[9]:
                activeService = (<CorporateClosure />);
                break;
            case this.services[10]:
                activeService = (<DIR />);
                break;
             
            default:
                activeService=(<CorporateAnnual />);
        }
        let sideDrawerIconClass = "HideIonIcon";
        if(this.state.showMobileSideDrawer){
            sideDrawerIconClass = "IonIcon";
        }
        return (
            <section className="Service" id="start">
                <ServiceSideMenu services={this.services} 
                                title="MCA" clicked={this.changeServiceHandler}
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

export default MCA;