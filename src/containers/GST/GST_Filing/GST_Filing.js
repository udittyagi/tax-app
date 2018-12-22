import React, {Component} from 'react';
import classes from '../GST_Registration/GST_Registration.module.css';
import img from '../../../assets/gst.png';


class GstRegistration extends Component{

    state = {
        selectedMenu: 'About',
    }

    GstFilingMenu = [
        "About",
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.GstFilingMenu.map((item,index) => {  
            let activeClass = '';
            if(this.state.selectedMenu === item){
                activeClass=classes.activeMark;
                activeMenu = item;
            }
            return(<div key={index} className={activeClass} onClick={()=>this.changeMenuHandler(item)}>{item}</div>)
        })

        let MenuDetails = null 
        switch(activeMenu){
            case "About":
                MenuDetails = (
                    <div>
                       <article>
                            <h2>About GST Return Filing</h2>
                            <hr></hr>
                            <p>
                            After obtaining GST registration, the entity will be required to file GST 
                            returns periodically. Failure to file GST returns will attract penalty. 
                            Entities with an annual turnover of more than Rs.1.5 crores (INR 15 Million) 
                            will have to file monthly GST returns. The three returns to be filed by normal 
                            taxpayers are GSTR-1 (details of outward supplies) on the 10th of each month, 
                            GSTR-2 (details of inward supplies) on the 15th of each month and GSTR-3 
                            (monthly return) on the 25th of each month. The reduce the compliance burden 
                            of small businesses with a turnover of less than Rs.1.5 crores, the Government 
                            has announced quarterly returns commencing from the quarter starting in October.
                            </p>
                        </article>
                            <img src={img} alt="Gst Return Filing Data" style={{width:"70%"}}/>
                        <article>

                        </article>
                        
                        
                    </div>
                )
                break;
            default:
                    MenuDetails=(
                        <div>Something Went Wrong</div>
                    )
        }

        return (
            <section className={classes.ServiceDescription}>
                <h2> GST Filing </h2>
                <hr></hr>
                <div className={classes.ServiceDescriptionMenu}>
                    {menu}
                </div>
                <div className={classes.MenuDetails}> 
                    {MenuDetails}
                </div>
            </section>
        );
    }
        
    
    
}

export default GstRegistration;