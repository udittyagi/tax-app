import React, { Component } from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class AddRemoveDirector extends Component {

    state = {
        selectedMenu: 'Introduction',
    }

    AddRemoveDirectorMenu = [
        "Introduction"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        let activeMenu = '';
        let menu = this.AddRemoveDirectorMenu.map((item, index) => {
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
                            <h2>Appointment of Director</h2>
                            <p>
                                Director of a company is a person elected by the shareholders
                                for managing the affairs of the company as per the Memorandum of
                                Association and Articles of Association of the company. Since a
                                company is an artificial judicial person created by law,
                                it can only act through the agency of natural persons. Thus,
                                only living persons can be Directors of a company and the management
                                of a company is entrusted to the Board of Directors. Appointment of
                                Directors can be required for a company from time to time based
                                on the requirements of the shareholders of the business.
                            </p>
                            <p>
                                To appoint a director, the person proposing to become a Director must
                                obtain a digital signature certificate (DSC) and director identification
                                number (DIN). DIN can be obtained for any person who is above the age of 18.
                                The nationality or residency status of the DIN applicant does not matters.
                                Hence, Indian Nationals, Non-Resident Indians and Foreign Nationals can obtain
                                DIN and be appointed as Director of a company in India.
                            </p>
                        </article>
                        <article>
                            <h2>Resignation of Director</h2>
                            <p>
                                Director of a company is a person elected by the shareholders for
                                managing the affairs of the company as per the Memorandum of Association
                                and Articles of Association of the company. Director in a company may need
                                to resign or the Board of Directors or Shareholders may want to remove a
                                Director for any reasons. In such cases, a Director can resign or be
                                removed by filing the intimation of change of Director with MCA.
                            </p>
                            <p>
                                The procedure for resignation of director and removal of Director by
                                the Board or Shareholders vary. A Director can resign from a company by
                                giving a notice in writing to the company and the Board is required to file
                                the necessary filings with MCA within 30 days. A Director can also send a
                                copy of the resignation
                                letter to the ROC directly by filing a different set of forms.
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
                <h2> Add/Remove Director </h2>
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

export default AddRemoveDirector;