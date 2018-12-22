import React, { Component }from 'react';
import '../GST/GST.css';
import ServiceSideMenu from '../../UI/ServiceSideMenu/ServiceSideMenu';
import PrivateLimited from './PrivateLimited/PrivateLimited';
import PublicLimited from './PublicLimited/PublicLimited';
import LimitedLiability from './LimitedLiability/LimitedLiability';
import OnePerson from './OnePerson/OnePerson';
import Subsidiary from './Subsidiary/Subsidiary';
import Partnership from './Partnership/Partnership';
import Proprietorship from './Proprietorship/Proprietorship';
import NonProfit from './NonProfit/NonProfit';
import Ionicon from 'react-ionicons';
import sumImage from '../../assets/img.jpg';
import Overlay from '../../UI/Overlay/Overlay';
import Backdrop from '../../UI/Backdrop/Backdrop';

class StartBusiness extends Component {
   
    state = {
        selectedService : 'Private_Limited_Company', 
        showMobileSideDrawer : false,
        showOverlay: true,
    }
    services = [
            "Private_Limited_Company",
            "Public_Limited_Company",
            "Limited_Liability_Partnership",
            "One_Person_Company",
            "Indian_Subsidiary",
            "Partnership_Firm",
            "Proprietorship",
            "Non_Profit_Organisations"
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

    hideOverlayHandler = () => {
        let showOverlay = false;
        this.setState({showOverlay : showOverlay}); 
    }

    showOverlayHandler = () => {
        let showOverlay = true;
        this.setState({showOverlay : showOverlay}); 
    }

    render() {
        let activeService = null ;
        switch(this.state.selectedService){
            case this.services[0]:
                activeService = (<PrivateLimited />);
                break;
            case this.services[1]:
                activeService = (<PublicLimited />);
                break;
            case this.services[2]:
                activeService = (<LimitedLiability />);
                break;
            case this.services[3]:
                activeService = (<OnePerson />);
                break;
            case this.services[4]:
                activeService = (<Subsidiary />);
                break;
            case this.services[5]:
                activeService = (<Partnership />);
                break;
            case this.services[6]:
                activeService = (<Proprietorship />);
                break;
                case this.services[7]:
            activeService = (<NonProfit/>);
                break;
             
            default:
                activeService=(<PrivateLimited />);
        }
        let sideDrawerIconClass = "HideIonIcon";
        if(this.state.showMobileSideDrawer){
            sideDrawerIconClass = "IonIcon";
        }
        return (
            <section className="Service" id="start">
                {this.state.showOverlay ? (
                    <div>
                     <Overlay >
                     <img src={sumImage} alt="Summary" style={{width:"100%", height: "90%"}}/>
                     </Overlay>
                     <Backdrop click={this.hideOverlayHandler}/>
                    </div>         
                ): null}
               
                <ServiceSideMenu services={this.services} 
                                title="Start Business" clicked={this.changeServiceHandler}
                                activeService={this.state.selectedService}
                                showMobileSideDrawer={this.state.showMobileSideDrawer}
                                showSummary={this.showOverlayHandler}
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

export default StartBusiness;