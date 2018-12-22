import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';


class Proprietorship extends Component{

    state = {
        selectedMenu: 'About',
    }

    ProprietorshipMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.ProprietorshipMenu.map((item,index) => {  
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
                            <h2>What is Proprietorship Registration ?</h2>
                            <hr></hr>
                            <p>
                            A sole proprietorship is a type of unregistered business entity that is owned, 
                            managed and controlled by one person. Sole proprietorship's are one of the most 
                            common forms of business in India, used by most micro and small businesses 
                            operating in the unorganized sectors. Proprietorships are very easy to start 
                            and have very minimal regulatory compliance requirement for started and operating. 
                            However, after the startup phase, proprietorship's do not offer the promoter a 
                            host of benefits such as limited liability proprietorship, corporate status, 
                            separate legal entity, independent existence, transferability, perpetual existence - 
                            which are desirable features for any business. Therefore, proprietorship registration 
                            is suited only for unorganized, small businesses that will 
                            remain small and/or have a limited period of existence. There is no mechanism 
                            provided by the Government of India for the registration of a Proprietorship. 
                            Therefore, the existence of a proprietorship must be established through tax 
                            registrations and other business registrations that a business is required to 
                            have as per the rules and regulations. For instance, GST Registration can be 
                            obtained in the name of the Proprietor to establish that the Proprietor is operating 
                            a business as a sole proprietorship. Thus, all the registrations for a proprietorship 
                            would be in the name of the Proprietor, making the Proprietor personally liable for 
                            all the liabilities of the Proprietorship.
                            </p>
                        </article>
                        <article>
                            <h2>Benefits of Proprietorship Registration</h2>
                            <hr></hr>
                            <ul style={{listStyleType:"square"}}>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Easy to Start</h3>
                                    <p>
                                    Proprietorship needs minimal registration. Therefore, it is one of the easiest 
                                    form of business entity to start with minimal formalities. However, after starting 
                                    up a Proprietorship, it is relatively harder to open a bank account or obtain a 
                                    payment gateway in the name of the business - 
                                    since more registrations like GST Registration may be required. 
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Business Name</h3>
                                    <p>
                                    Since the name of a proprietorship is not registered, a proprietorship can 
                                    choose to have any name - as long as it does not infringe on a registered 
                                    trademark. However, since the name is not registered, any other person can 
                                    also use the same business name 
                                    unless trademark registration is obtained.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Single Promoter</h3>
                                    <p>
                                    Proprietorship is the only type of business entity that can be registered and 
                                    operated by one person. To register a one person company, a nominee Director 
                                    is required and for all other types of entities like company or LLP or 
                                    partnership firm, two or more promoters are required
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Lower Taxes</h3>
                                    <p>
                                    Proprietorship with less than Rs. 3 lakh of income is not required to pay any 
                                    income tax, as proprietorship's are taxed as the individual owing the business. 
                                    However, unlike a company or LLP, a proprietorship cannot enjoy some of the tax 
                                    deductions, 
                                    which could potentially increase the tax liability.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Easy to Close</h3>
                                    <p>
                                    The Proprietor and the proprietorship are one and the same for all legal purposes. 
                                    Hence, there is no formality for winding up or closing a proprietorship. In most 
                                    cases, to close a proprietorship, only the tax registrations 
                                    obtained in the name of the proprietor must be cancelled.
                                    </p>
                                </li>
                            </ul>
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
                <h2> Proprietorship </h2>
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

export default Proprietorship;