import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';


class PublicLimited extends Component{

    state = {
        selectedMenu: 'Definition',
    }

    PublicLimitedMenu = [
        "Definition",
        "Prerequisites",
        "Process",
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.PublicLimitedMenu.map((item,index) => {  
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
                            <h2>What is Public Limited ?</h2>
                            <hr></hr>
                            <p>
                            A limited company grants limited liability to its owners and 
                            management. Being a public company allows a firm to sell shares 
                            to investors this is beneficial in raising capital. A minimum 
                            of three Directors are required for establishing a Public Limited 
                            Company and it has more stringent regulatory requirements compared 
                            to a Private Limited Company.
                            Public Limited Companies are those types of companies where 
                            minimum number of members is seven and there is no cap on the 
                            maximum number of members. A public limited company has most of 
                            the characteristics of a private limited company. A public limited 
                            company has all the advantages of private limited company and the ability 
                            to have any number of members, ease in transfer of shareholding and more 
                            transparency. Identifying marks of a public limited company are name, number 
                            of members, shares, formation, management, directors and meetings, etc.
                            </p>
                        </article>
                        <article>
                            <h2>Benefits of Registering as Public Company</h2>
                            <hr></hr>
                            <ul style={{listStyleType:"square"}}>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Separate Legal Entity</h3>
                                    <p>
                                    A company is a legal entity and a juristic person established under the Act. 
                                    Therefore a company form of organization has wide legal capacity and can own property 
                                    and also incur debts. The members (Shareholders/Directors) of a company have 
                                    no liability to the creditors of a company for such debts. 
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Uninterrupted Existence</h3>
                                    <p>
                                    A company has 'perpetual succession', that is continued or uninterrupted 
                                    existence until it is legally dissolved. A company, being a separate legal person, 
                                    is unaffected by the death or other departure of any member but 
                                    continues to be in existence irrespective of the changes in membership.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Easy Transferability</h3>
                                    <p>
                                    Shares of a company limited by shares are transferable by a shareholder to 
                                    any other person. Filing and signing a share transfer form and handing over the 
                                    buyer of the shares along with share certificate can easily transfer shares.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Borrowing Capacity</h3>
                                    <p>
                                    A company enjoys better avenues for borrowing of funds. It can issue 
                                    debentures, secured as well as unsecured and can also accept deposits from the 
                                    public, etc. Even banking and financial institutions prefer to render large financial 
                                    assistance to a company rather than partnership firms or proprietary concerns.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Owning Property</h3>
                                    <p>
                                    A company being a juristic person, can acquire, own, enjoy and alienate, 
                                    property in its own name. No shareholder can make any claim upon the 
                                    property of the company so long as the company is a going concern.
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
                            <h2>Prerequisites for Registering Public Company</h2>
                            <hr></hr>
                            <ul style={{marginTop: "50px",marginLeft: "50px"}}>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum Three Directors</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum Seven Shareholders</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Name of the Company</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Objects of the Company</li>
                                <li style={{marginBottom: "20px", textAlign:"left", fontSize:"20px"}}>Minimum Capital: 5 Lac</li>
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
                <h2> Public Limited Company </h2>
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

export default PublicLimited;