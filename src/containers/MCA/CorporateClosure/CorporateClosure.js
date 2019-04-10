import React, { Component } from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class CorporateClosure extends Component {

    state = {
        selectedMenu: 'About',
    }

    CorporateClosureMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        let activeMenu = '';
        let menu = this.CorporateClosureMenu.map((item, index) => {
            let activeClass = '';
            if (this.state.selectedMenu === item) {
                activeClass = classes.activeMark;
                activeMenu = item;
            }
            return (<div key={index} className={activeClass} onClick={() => this.changeMenuHandler(item)}>{item}</div>)
        })

        let MenuDetails = null
        switch (activeMenu) {
            case "About":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Winding Up of a Company</h2>
                            <p>
                                A private limited company is an artificial judicial person
                                and requires various compliances like appointment of Auditor,
                                regular filing of income tax return, annual return filing and more.
                                Failing to maintain compliance for a Company could result in fines
                                and/or disqualification of the Directors from incorporating another
                                Company. Therefore, if a private limited company has become inactive and there are no
                                transactions in the company, then it is best to wind up the Company.
                            </p>
                            <p>
                                Voluntary winding up of a company can be initiated at anytime by the
                                shareholders of the company. In case there are any secured or unsecured
                                creditors or employees on-roll, the outstanding dues must be settled.
                                Once all the dues are settled, the bank accounts of the company must be
                                closed. Finally, the company must regularise any overdue compliance like
                                income tax return or annual filing and surrender the GST registration.
                                Once, all activities are stopped and the registrations are surrendered,
                                the winding up application
                                petition can be filed with the Ministry of Corporate Affairs.
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
                <h2> Winding Up of a Company </h2>
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

export default CorporateClosure;