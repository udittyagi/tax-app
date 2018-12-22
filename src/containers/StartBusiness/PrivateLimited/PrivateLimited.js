import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';


class PrivateLimited extends Component{

    state = {
        selectedMenu: 'Definition',
    }

    PrivateLimitedMenu = [
        "Definition",
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
        let menu = this.PrivateLimitedMenu.map((item,index) => {  
            let activeClass = '';
            if(this.state.selectedMenu === item){
                activeClass=classes.activeMark;
                activeMenu = item;
            }
            return(<div key={index} className={activeClass} onClick={()=>this.changeMenuHandler(item)}>{item}</div>)
        })

        let MenuDetails = null 
        switch(activeMenu){
            case "Definition":
                MenuDetails = (
                    <div>
                       <article>
                            <h2>What is Private Limited ?</h2>
                            <hr></hr>
                            <p>
                            Private Limited Company is the most prevalent and popular type of 
                            corporate legal entity in India. Private limited company registration is governed 
                            by the Ministry of Corporate Affairs, 
                            Companies Act, 2013 and the Companies Incorporation Rules, 2014.
                            </p>
                        </article>
                        <article>
                            <h2>Benefits of Registering as Private Company</h2>
                            <hr></hr>
                            <ul style={{listStyleType:"square"}}>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Separate Legal Entity</h3>
                                    <p>
                                    Private Limited Company is a legal entity and a juristic person 
                                    established under the Companies Act. Hence, a company has a range of 
                                    legal capacities including opening of a bank account, hiring of employees, 
                                    taking on equity or obtaining licenses and more as an independent corporate entity. 
                                    The members (Shareholders/Directors) of a company have no personal 
                                    liability to the creditors of a company for company's debts. 
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Uninterrupted Existence</h3>
                                    <p>
                                    Private Limited Company has 'perpetual succession', meaning uninterrupted 
                                    existence until it is legally dissolved. A company being a separate 
                                    legal person, is unaffected by the death or other departure of any member and 
                                    continues to be in existence irrespective of the changes in ownership.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Easy Transferability</h3>
                                    <p>
                                    Ownership of a business can be easily transferred in a company by
                                     transferring shares. The signing, filing and transfer of share transfer 
                                     form and share certificates are sufficient to transfer ownership of a company. 
                                     In a private limited company, the consent of 
                                    other shareholders may be required to effect share transfers.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Borrowing Capacity</h3>
                                    <p>
                                    Private Limited Companies can raise equity funds in India. Companies 
                                    can also issue equity shares, preference shares, debentures and accept deposits 
                                    with RBI permission. Banks and Financial Institutions prefer to provide funding to a 
                                    company rather than partnership firms or proprietary concerns. 
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Owning Property</h3>
                                    <p>
                                    Private Limited Company being an artificial person, can acquire, own,
                                     enjoy and alienate property in its name. The property owned by a 
                                     company could be machinery, building, intangible assets, land, residential 
                                     property, factory, etc., No shareholder can make a claim upon the property of the 
                                    company - as long as the company is a going concern.
                                    </p>
                                </li>
                            </ul>
                        </article>
    
                    </div>
                )
                break;
            case "Prerequisites":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Prerequisites for Registering Private Company</h2>
                            <hr></hr>
                            <ul style={{marginTop: "50px",marginLeft: "50px"}}>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum Two Director</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum Two Shareholders</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Name of the Company</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Objects of the Company</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum Capital: Not Required</li>
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
                            Digital Signature Certificate (DSC) and Director Identification Number (DIN)
                             is required for the proposed Directors of the Private Limited Company.
                             DIN and DSC can be obtained for the proposed Directors within 2 to 3 days.
                            </p>
                        </article>
                        <article>
                            <h2>Name Approval</h2>
                            <hr></hr>
                            <p>
                            A minimum of one and a maximum of two proposed names must be 
                            submitted to the MCA. Subject to availability, naming guidelines and MCA processing time,
                             Name Approval can be obtained in 2 to 3 working days.
                            </p>
                        </article>
                        <article>
                            <h2>Company Registration</h2>
                            <hr></hr>
                            <p>
                            Registration documents can be submitted to the MCA along with an 
                            application for registration. MCA will usually approve the application 
                            for incorporation in 5 to 
                            7 days, subject to their processing time.
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
                <h2> Private Limited Company </h2>
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

export default PrivateLimited;