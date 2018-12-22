import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class LimitedLiability extends Component{

    state = {
        selectedMenu: 'About',
    }

    LimitedLiabilityMenu = [
        "About",
        "Prerequisites",
        "Process"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.LimitedLiabilityMenu.map((item,index) => {  
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
                            <h2>What is Limited Liability ?</h2>
                            <hr></hr>
                            <p>
                            Limited Liability Partnership (LLP) was introduced in India 
                            by way of the Limited Liability Partnership Act, 2008. The basic 
                            premise behind the introduction of Limited Liability Partnership 
                            (LLP) is to provide a form of business entity that is simple to 
                            maintain while providing limited liability to the owners. Since, 
                            its introduction in 2010 LLP’s has been well received with over 
                            2 lakh registrations so far until September, 2018. The main 
                            advantage of a Limited Liability Partnership over a traditional 
                            partnership firm is that in a LLP, one partner is not 
                            responsible or liable for another partner's misconduct or 
                            negligence. A LLP also provides limited liability protection 
                            for the owners from the debts of the LLP. Therefore, all partners 
                            in a LLP enjoy a form of limited liability protection for each 
                            individual's protection within the partnership, similar to that 
                            of the shareholders of a private limited company. However, unlike 
                            private limited company shareholder, the partners of a LLP have 
                            the right to manage the business directly. LLP is one of the easiest 
                            form of business to incorporate and manage in India. With an easy 
                            incorporation process and simple compliance formalities, LLP is preferred by 
                            Professionals, Micro and Small businesses that are family owned or closely-held. 
                            Since, LLPs are not capable of issuing equity shares, LLP should be used for any 
                            business that has plans for raising equity funds during its lifecycle.
                            </p>
                        </article>
                        <article>
                            <h2>Benefits of Limited Liability Partnership (LLP) Registration</h2>
                            <hr></hr>
                            <ul style={{listStyleType:"square"}}>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Separate Legal Entity</h3>
                                    <p>
                                    A LLP is a legal entity and a juristic person established under the Act. T
                                    herefore, a LLP has wide legal capacity and can own property and also incur 
                                    debts. However, the Partners of a LLP have no 
                                    liability to the creditors of a LLP for the debts of the LLP.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Uninterrupted Existence</h3>
                                    <p>
                                    A LLP has 'perpetual succession', that is continued or uninterrupted existence 
                                    until it is legally dissolved. A LLP being a separate legal person, is unaffected 
                                    by the death or other departure of any Partner. Hence, a LLP continues to be in 
                                    existence irrespective of the changes in ownership.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Easy Transferability</h3>
                                    <p>
                                    The ownership of a LLP can be easily transferred to another person by inducting 
                                    them as a Partner of the LLP. LLP is a separate legal entity separate from its 
                                    Partners, so by changing the Partners, the ownership of the LLP can be changed.

                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Audit NOT Required</h3>
                                    <p>
                                    A LLP does not require audit if it has less than Rs. 40 lakhs of turnover 
                                    and less than Rs.25 lakhs of capital contribution. Therefore, LLPs are ideal 
                                    for startups and small businesses that are just starting their operations and want to 
                                    have minimal regulatory compliance related formalities.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Owning Property</h3>
                                    <p>
                                    A LLP being an artificial judicial person, can acquire, own, enjoy and sell, 
                                    property in its name. No Partner can make any claim upon the 
                                    property of the LLP - so long as the LLP is a going concern.
                                    </p>
                                </li>
                            </ul>
                        </article>
                    </div>)    
                break; 
                
            case "Prerequisites":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Prerequisites for Registering Public Company</h2>
                            <hr></hr>
                            <ul style={{marginTop: "50px",marginLeft: "50px"}}>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum Two Designated Partners</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Name of the LLP</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>LLP Agreement</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum Capital: No requirement </li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Registered office: Owned/Rented</li>
                            </ul>
                        </article>                  
                    </div>
                )
                break;
            case "Process":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Obtaining DSC & DIN</h2>
                            <hr></hr>
                            <p>
                            Digital Signature Certificate (DSC) and Designated Partner 
                            Identification Number (DPIN) is obtained for the proposed Partners 
                            of the LLP. DPIN and DSC can be 
                            obtained for the proposed Partners within 5 to 7 days.
                            </p>
                        </article>
                        <article>
                            <h2>Name Approval</h2>
                            <hr></hr>
                            <p>
                            A minimum of one and a maximum of six names choices must be submitted 
                            to the MCA. Subject to availability, naming guidelines and MCA processing time, 
                            name approval can be obtained in 5 to 7 working days.
                            </p>
                        </article>
                        <article>
                            <h2>LLP Registration</h2>
                            <hr></hr>
                            <p>
                            Incorporation documents can be submitted to the MCA along with an 
                            application for incorporation. MCA will usually approve the application for incorporation 
                            of LLP in 10 to 12 days, subject to their processing time.
                            </p>
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
                <h2> Limited Liability Partnership </h2>
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

export default LimitedLiability;