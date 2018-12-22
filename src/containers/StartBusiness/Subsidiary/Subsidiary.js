import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';


class Subsidiary extends Component{

    state = {
        selectedMenu: 'About',
    }

    SubsidiaryMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.SubsidiaryMenu.map((item,index) => {  
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
                            <h2>What is Subsidiary ?</h2>
                            <hr></hr>
                            <p>
                            There is a lot of interest among foreign companies to start their operations in India 
                            and tap into one of the largest and fast growing market, and have access to some 
                            of the best human resources in the world. A Foreign National (other than a citizen 
                            of Pakistan or Bangladesh) or an entity incorporated outside India (other than entity 
                            incorporated in Pakistan or Bangladesh) can invest and own a Company in India by 
                            acquiring shares of the company, subject to the FDI Policy of India. 
                            In addition, a minimum of one Indian Director who is a Indian Director and Indian 
                            Resident is required for incorporation of an Indian Company along with an address 
                            in India. Investment and acquisition of equity shares of a Company can 
                            be broadly divided into two categories: investment under automatic route and 
                            investment under Government approval route. The automatic route requires no 
                            requirement of any prior regulatory approval for investment in equity shares of an 
                            Indian business and only post facto filing/intimation with the Reserve Bank of India 
                            within 30 days of receipt of investment money in India and filing of prescribed 
                            documents and particulars of allotment of shares within 30 days of allotment of
                            shares to foreign investors. Foreign Direct Investment of upto 100% is allowed 
                            under the automatic route in most activities/sectors in India. Investment in 
                            activities / industries where automatic route is not available can be made with 
                            the approval of the Government under the Government Approved FDI method. Privy 
                            Corporate Consulting can be your legal and professional partner in India to get 
                            your New Company / 
                            Subsidiary in India started quickly and cost-effectively.
                            </p>
                        </article>
                        <article>
                            <h3>Separate Legal Entity</h3>
                            <p>
                            A company is a legal entity and a juristic person established under the Act. 
                            Therefore a company form of organization has wide legal capacity and can 
                            own property and also incur debts. The members (Shareholders/Directors) of a 
                            company have no 
                            liability to the creditors of a company for such debts.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Easy Transferability</h3>
                            <p>
                            Shares of a company limited by shares are transferable by a shareholder 
                            to any other person. Filing and signing a share transfer form and handing 
                            over the buyer of the shares along with 
                            share certificate can easily transfer shares.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Owning Property</h3>
                            <p>
                            A company being a juristic person, can acquire, own, enjoy and alienate, 
                            property in its own name. No shareholder can make any claim upon the property 
                            of the company 
                            so long as the company is a going concern.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Uninterrupted Existence</h3>
                            <p>
                            A company has 'perpetual succession', that is continued or uninterrupted 
                            existence until it is legally dissolved. A company, being a separate legal 
                            person, is unaffected by the death or other departure of any member but continues to be 
                            in existence irrespective of the changes in membership.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Foreign Direct Investment</h3>
                            <p>
                            100% Foreign Direct Investment (FDI) is allowed in many of the sectors 
                            through Company type business entity without any prior Government approval. 
                            FDI is not allowed in Proprietorship or 
                            Partnership, LLP requires prior Government approval.
                            </p>
                            <hr></hr>
                            
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
                <h2>Indian Subsidiary</h2>
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

export default Subsidiary;