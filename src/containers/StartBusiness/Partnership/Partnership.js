import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';

class Partnership extends Component{

    state = {
        selectedMenu: 'About',
    }

    PartnershipMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.PartnershipMenu.map((item,index) => {  
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
                            <h2>What is Partnership ?</h2>
                            <hr></hr>
                            <p>
                            A Partnership Firm is a popular form of business constitution for businesses that are 
                            owned, managed and controlled by an Association of People for profit. Partnership firms 
                            are relatively easy to start are is prevalent amongst small and medium sized businesses 
                            in the unorganized sectors. With the introduction of Limited Liability Partnerships in 
                            India, Partnership Firms are fast losing their prevalence due to the added advantages 
                            offered by a Limited Liability Partnership.
                            There are two types of Partnership firms, registered and un-registered 
                            Partnership firm. It is not compulsory to register a Partnership firm; however, 
                            it is advisable to register a Partnership firm due to the added advantages. 
                            Partnership firms are created by drafting a Partnership deed amongst the Partners 
                            and Privy Corporate Consulting LLP can help start a registered or un-registered 
                            Partnership firm in India.
                            </p>
                        </article>
                        <article>
                            <h3>Easy to Start</h3>
                            <p>
                            A Partnership is easy to form as no cumbersome legal formalities are involved. 
                            Its registration is also not essential. However, if the firm is not registered, 
                            it will be deprived of certain legal benefits. The 
                            Registrar of Firms is responsible for registering partnership firms.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Business Name</h3>
                            <p>
                            Since the name of a Partnership firm is not registered, a Partnership firm 
                            can choose to have any name - as long as it does not infringe on a registered 
                            trademark. However, since the name is not registered, any other person can also use 
                            the same business name unless trademark registration is obtained.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Partnership Deed</h3>
                            <p>
                            In a Partnership firm, the partnership deed will determine the ownership of the 
                            firm, profit sharing ratio, rights and responsibilities of each of the Partner. 
                            A partnership deed can be registered with the Registrar.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Annual Filing NOT Required</h3>
                            <p>
                            A Partnership firm is not required to file its annual accounts with the 
                            Registrar each year unlike a Limited Liability Partnership or Company. Limited 
                            Liability Partnership's and Company's are required to file their 
                            annual accounts with Registrar of Companies each year.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Bank Account</h3>
                            <p>
                            Bank account can be opened in the name of a Partnership firm. To 
                            open bank account, the partnership deed copy and KYC documents of the Partner 
                            must be submitted along with 
                            any other document as required by the Bank.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Partnership Deed Drafting</h3>
                            <p>
                            An Privy Corporate Consulting Expert will first understand your business, 
                            Partners, Partnership structure and other relevant details to draft a 
                            Partnership Deed that is acceptable to all Partners.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Partnership Deed Registration</h3>
                            <p>
                            Based on your requirements and the service level you have requested from 
                            Privy Corporate Consulting, we will help you register the Partnership 
                            Deed with the relevant 
                            authorities to make the Partnership a Registered Partnership Firm.
                            </p>
                            <hr></hr>
                            <h3 style={{marginTop:"50px"}}>Obtaining PAN & TAN</h3>
                            <p>
                            Based on the package you had selected, we will help you obtain PAN and TAN 
                            registration for your Partnership Firm from the relevant 
                            Authorities once the Partnership Firm is registered.
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
                <h2> Partnership Firm </h2>
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

export default Partnership;