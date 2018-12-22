import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';

class OnePerson extends Component{

    state = {
        selectedMenu: 'Definition',
    }

    OnePersonMenu = [
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
        let menu = this.OnePersonMenu.map((item,index) => {  
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
                            <h2>What is One Person Company?</h2>
                            <p>
                            The concept of One Person Company in India was introduced 
                            through the Companies Act, 2013 to support entrepreneurs who 
                            on their own are capable of starting a venture by allowing them 
                            to create a single person economic entity. One of the biggest 
                            advantages of a One Person Company (OPC) is that there can be 
                            only one member in a OPC, while a minimum of two members are 
                            required for incorporating and maintaining a Private Limited 
                            Company or a Limited Liability Partnership (LLP). Similar to a 
                            Company, a One Person Company is a separate legal entity from its 
                            promoter, offering limited liability protection to its sole 
                            shareholder, while having continuity of business and being easy 
                            to incorporate. Though a One Person Company allows a lone 
                            Entrepreneur to operate a corporate entity with limited liability 
                            protection, a OPC does have a few limitations. For instance, 
                            every One Person Company (OPC) must nominate a nominee Director 
                            in the MOA and AOA of the company - who will become the owner of 
                            the OPC in case the sole Director is disabled. Also, a One 
                            Person Company must be converted into a Private Limited Company 
                            if it crosses an annual turnover of Rs.2 crores and must file 
                            audited financial statements with the Ministry of Corporate 
                            Affairs at the end of each Financial Year like all types of 
                            Companies. Therefore, it is important for the Entrepreneur to 
                            carefully consider the features of a One Person Company prior to incorporation.
                            </p>
                        </article>
                        <article>
                            <h2>Reasons to Register a One Person Company</h2>
                            <hr></hr>
                            <ul style={{listStyleType:"square"}}>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Single Promoter</h3>
                                    <p>
                                    One Person Company is the only type of corporate entity that can be 
                                    started and operated by a single promoter with limited liability 
                                    protection in India. A corporate form of legal entity in One Person 
                                    Company ensures that the business has 
                                    perpetual existence and easy ownership transferability.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Uninterrupted Existence</h3>
                                    <p>
                                    A company has 'perpetual succession', meaning uninterrupted existence 
                                    until it is legally dissolved. A company being a separate legal person, 
                                    is unaffected by the death or other departure of any member and continues 
                                    to be in existence irrespective of the changes in ownership.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Easy Transferability</h3>
                                    <p>
                                    Ownership of a business can be easily transferred in a company by 
                                    transferring shares. The signing, filing and transfer of share transfer 
                                    form and share certificates is sufficient to transfer ownership of a company. 
                                    In a one person company, the ownership can be transferred by altering 
                                    the shareholding, directorship and nominee director information.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Borrowing Capacity</h3>
                                    <p>
                                    Banks and Financial Institutions prefer to provide funding to a company rather than 
                                    partnership firms or proprietary concerns. However, a one person company cannot 
                                    issue different types of equity security, 
                                    as it can only be owned by one person at all times.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Owning Property</h3>
                                    <p>
                                    A company being an artificial person, can acquire, own, enjoy and alienate property 
                                    in its name. The property owned by a company could be machinery, building, 
                                    intangible assets, land, residential property, factory, etc., Further, 
                                    the nominee director cannot claim any ownership 
                                    of the company while serving as a nominee director.
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
                        <h2>Prerequisites for Registering One Person Company</h2>
                        <hr></hr>
                        <ul style={{marginTop: "50px",marginLeft: "50px"}}>
                            <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum One Director</li>
                            <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>One Nominee</li>
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
                            A minimum of one and a maximum of two proposed names must be submitted to 
                            the MCA. Subject to availability, naming guidelines and MCA processing time, 
                            Name Approval can be obtained in 2 to 3 working days.
                            </p>
                        </article>
                        <article>
                            <h2>Company Registration</h2>
                            <hr></hr>
                            <p>
                            Registration documents can be submitted to the MCA along with an 
                            application for registration. MCA will usually approve the application for incorporation 
                            in 5 to 7 days, subject to their processing time.
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
                <h2> One Person Company </h2>
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

export default OnePerson;