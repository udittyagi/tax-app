import React, { Component }from 'react';
import '../GST/GST.css';
import ServiceSideMenu from '../../UI/ServiceSideMenu/ServiceSideMenu';
import Ionicon from 'react-ionicons';
import BookKeeping from './BookKeeping/BookKeeping';
import DueDiligence from './DueDiligence/DueDiligence';
import LegalDrafting from './LegalDrafting/LegalDrafting';
import Retainership from './Retainership/Retainership';
import SearchReport from './SearchReport/SearchReport';


class OtherServices extends Component {
   
    state = {
        selectedService : 'Book_Keeping', 
        showMobileSideDrawer : false,
    }
    services = [
        "Book_Keeping",
        "Legal_Drafting",
        "Retainership",
        "Due_Diligence",
        "Search_Reports"


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
                activeService = (<BookKeeping />);
                break;
            case this.services[1]:
                activeService = (<LegalDrafting />);
                break;
            case this.services[2]:
                activeService = (<Retainership />);
                break;
            case this.services[3]:
                activeService = (<DueDiligence />);
                break;
            case this.services[4]:
                activeService = (<SearchReport />);
                break;
            default:
                activeService=(<BookKeeping />);
        }
        let sideDrawerIconClass = "HideIonIcon";
        if(this.state.showMobileSideDrawer){
            sideDrawerIconClass = "IonIcon";
        }
        return (
            <section className="Service">
                <ServiceSideMenu services={this.services} 
                                title="Other Services" clicked={this.changeServiceHandler} 
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

export default OtherServices;