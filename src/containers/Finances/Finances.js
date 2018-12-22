import React, { Component }from 'react';
import '../GST/GST.css';
import ServiceSideMenu from '../../UI/ServiceSideMenu/ServiceSideMenu';
import Ionicon from 'react-ionicons';
import ProjectFinancing from './ProjectFinancing/ProjectFinancing';
import  TermLoan from './TermLoan/TermLoan';
import WorkingCapital from './WorkingCapital/WorkingCapital';
import HousingFinance from './HousingFinance/HousingFinance';
import ProjectReport from './ProjectReport/ProjectReport';

class Finances extends Component {
   
    state = {
        selectedService : 'Project_Financing', 
        showMobileSideDrawer : false,
    }
    services = [
        "Project_Financing",
        "Term_Loan",
        "Working_Capital",
        "Housing_Finance",
        "Project_Report_Prepration"


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
                activeService = (<ProjectFinancing/>);
                break;
            case this.services[1]:
                activeService = (<TermLoan />);
                break;
            case this.services[2]:
                activeService = (<WorkingCapital />);
                break;
            case this.services[3]:
                activeService = (<HousingFinance />);
                break;
            case this.services[4]:
                activeService = (<ProjectReport />);
                break;
            default:
                activeService=(<ProjectFinancing />);
        }
        let sideDrawerIconClass = "HideIonIcon";
        if(this.state.showMobileSideDrawer){
            sideDrawerIconClass = "IonIcon";
        }
        return (
            <section className="Service">
                <ServiceSideMenu services={this.services} 
                                title="Finances" clicked={this.changeServiceHandler} 
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

export default Finances;