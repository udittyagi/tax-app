import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';

class NonProfit extends Component{

    state = {
        selectedMenu: 'About',
    }

    NonProfitMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.NonProfitMenu.map((item,index) => {  
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
                            <h2>What is Section 8 Company Registration ?</h2>
                            <hr></hr>
                            <p>
                            Section 8 Company is named Section 8 of the Companies Act, 2013, 
                            which pertains to a established 'for promoting commerce, art, science, 
                            sports, education, research, social welfare, religion, charity, protection
                             of environment or any such other object', provided the profits, if any, or 
                             other income is applied for promoting only the objects of the company and no 
                             dividend is paid to its members. Therefore, Section 8 Company or Section 25 
                             Company is a company registered under the Companies Act, 2013 for charitable 
                             or not-for-profit purposes. A Section 8 Company is similar to a Trust or Society; 
                             expect a section 8 Company is registered under the Central Government's 
                             Ministry of Corporate Affairs. Trusts and Societies are registered under 
                             State Government regulations. A section 8 company has various advantages 
                             when compared to Trust or Society like improved recognition and better legal 
                             standing. Section 8 company also has higher credibility amongst donors, Government 
                             departments and other stakeholders.
                            </p>
                        </article>
                        <article>
                            <h2>Reasons to Register a Section 8 Company</h2>
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
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Registration</h3>
                                    <p>
                                    Section 8 Companies are registered under the Companies Act, 2013. Hence, 
                                    the process for registration and certificate of incorporation for a Section 
                                    8 Company is issued 
                                    by the Ministry of Corporate Affairs, Government of India.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Name</h3>
                                    <p>
                                    Section 8 Companies can be registered with names that contain words like 
                                    Association, Foundation, Society, Council, Club, Charities, Institute, Academy, 
                                    Organisation, Federation, Chamber of Commerce, Development and more.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Profits</h3>
                                    <p>
                                    Like a private limited company, a Section 8 Company will also have revenue, 
                                    expenses, profits and losses. However, in a Section 8 Company the profits can 
                                    be used only for the charitable or 
                                    not-for-profit purposes mentioned in the MOA.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Management</h3>
                                    <p>
                                    Trusts are managed by Trustees as per a Trust Deed. Section 8 Company does not 
                                    have the concept of Trustees. Hence, Section 8 Companies are managed by the Board of 
                                    Directors based on the MOA and AOA of the Section 8 Company.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", textDecoration:"underline", fontWeight: "300"}}>Transferability</h3>
                                    <p>
                                    The management of a Section 8 Company can be easily transferred from one person to 
                                    another by altering the changing the composition of Board of 
                                    Directors. Section 8 Company can also be controlled by shareholders.
                                    </p>
                                </li>
                            </ul>
                        </article>
    
                    </div>
                )
                break;
            case "Inclusion":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>What’s included in our package?</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>                  
                    </div>
                )
                break;
            case "Procedures":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>GST Registration Process (on Government Portal)</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                    </div>
                )
                break;
            case "Documents":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Documents for Registration</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                    </div>
                )
                break;
            case "Advantages":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Advantages</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                    </div>
                )
                break;
            case "FAQs":
            default:
                    MenuDetails=(
                        <div>Something Went Wrong</div>
                    )
        }

        return (
            <section className={classes.ServiceDescription}>
                <h2> Non Profit Organisations </h2>
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

export default NonProfit;