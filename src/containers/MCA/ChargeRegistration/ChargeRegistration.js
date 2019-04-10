import React, { Component } from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class ChargeRegistration extends Component {

    state = {
        selectedMenu: 'Introduction',
    }

    ChargeRegistrationMenu = [
        "Introduction"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        let activeMenu = '';
        let menu = this.ChargeRegistrationMenu.map((item, index) => {
            let activeClass = '';
            if (this.state.selectedMenu === item) {
                activeClass = classes.activeMark;
                activeMenu = item;
            }
            return (<div key={index} className={activeClass} onClick={() => this.changeMenuHandler(item)}>{item}</div>)
        })

        let MenuDetails = null
        switch (activeMenu) {
            case "Introduction":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Increase In Authorise Capital of the Company</h2>
                            <p>
                                The authorised capital of a Company determines the number of shares a
                                Company can issue to its shareholders. An increase in authorized capital
                                might be required for issuing new shares and/or inducting more capital into
                                the Company. The initial authorised capital of the Company is mentioned in
                                the Memorandum of Association of the Company and is usually Rs. 1 lakh.
                                The authorised capital can be increased by the company at anytime with
                                shareholders approval and by
                                paying additional fee to the Registrar of Companies.
                            </p>
                            <p>
                                To begin the process for increasing authorized capital a resolution must
                                be passed by the Board of Directors. In the Board Resolution, authorization
                                must be provided for increasing the authorised capital of the company and
                                making the necessary changes to the MOA and AOA of the company. Privy Corporate
                                Consulting can help you easily increase the authorised capital of your company.
                            </p>
                        </article>
                    </div>
                )
                break;
            default:
                MenuDetails = (
                    <div>Something Went Wrong</div>
                )
        }

        return (
            <section className={classes.ServiceDescription}>
                <h2> Increase In Authorise Capital of the Company </h2>
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

export default ChargeRegistration;