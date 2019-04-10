import React, { Component } from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class CorporateAnnual extends Component {

    state = {
        selectedMenu: 'About',
    }

    CorporateAnnualMenu = [
        "About",
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        let activeMenu = '';
        let menu = this.CorporateAnnualMenu.map((item, index) => {
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
                            <h2>Annual Filing</h2>
                            <p>
                                All companies registered in India like private limited company,
                                one Person Company, limited company, and section 8 companies must
                                file MCA annual return and income tax return each year. Companies must
                                conduct an Annual General Meeting at the end of each financial year and
                                file an annual return with the Ministry of Corporate Affair to maintain
                                compliance. For newly incorporated Companies, the Annual General Meeting
                                should be held within 18 months from date of incorporation or 9 months
                                from the date of closing of financial year, whichever is earlier.
                                Subsequent Annual General Meetings should be held within 6 months
                                from the end of that financial year. In India, normally the financial
                                year starts on April 1st and end on 31st March. So a Company's annual
                                return would be due on or before September 30th.
                            </p>
                            <p>
                                Annual return consists of information and documents that include the
                                Balance Sheet of the Company, Profit & Loss Account, Compliance Certificate,
                                Registered Office Address, Register of Member, Shares and Debentures details,
                                Debt details and information about the Management of the Company. The annual
                                return would also disclose the shareholding structure of the Company,
                                changes in Directorship and details of transfers of securities.
                            </p>
                            <p>
                                In addition to MCA annual return, companies must also file income
                                tax return irrespective of income, profit or loss. Hence, even dormant
                                companies with no transactions are required to file income tax return each year.
                                Private limited companies, limited companies and one person companies would be
                                required to file Form ITR -6. The due date for filing income
                                tax return for a company is on or before the 30th of September.
                            </p>
                        </article>
                    </div>)
                    break;
                default:
                MenuDetails = (
                    <div>Something Went Wrong</div>
                )
        }

        return (
            <section className={classes.ServiceDescription}>
                <h2> Corporate Annual Filing </h2>
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

export default CorporateAnnual;