import React, { Component }from 'react';
import '../GST/GST.css';
import ServiceSideMenu from '../../UI/ServiceSideMenu/ServiceSideMenu';
import Ionicon from 'react-ionicons';
import StockExchange from './StockExchange/StockExchange';
import Listing from './Listing/Listing';



class ListingCompliances extends Component {
   
    state = {
        selectedService : 'Stock_Exchange_Compliances', 
        showMobileSideDrawer : false,
    }
    services = [
        "Stock_Exchange_Compliances",
        "Listing_of_Securities"
        


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
                activeService = (<StockExchange />);
                break;
            case this.services[1]:
                activeService = (<Listing />);
                break;
            default:
                activeService=(<StockExchange/>);
        }
        let sideDrawerIconClass = "HideIonIcon";
        if(this.state.showMobileSideDrawer){
            sideDrawerIconClass = "IonIcon";
        }
        return (
            <section className="Service">
                <ServiceSideMenu services={this.services} 
                                title="Listing Compliances" clicked={this.changeServiceHandler} 
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

export default ListingCompliances;