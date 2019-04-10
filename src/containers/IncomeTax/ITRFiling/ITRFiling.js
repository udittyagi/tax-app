import React, { Component } from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class ITRFiling extends Component {

    state = {
        selectedMenu: 'About',
    }

    ITRFilingMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        let activeMenu = '';
        let menu = this.ITRFilingMenu.map((item, index) => {
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
                            <h2>ITR 1</h2>
                            <p>
                                ITR-1 SAHAJ form is the most widely used form by Individuals to
                                file their Tax Returns with the Income Tax Department of India.
                                Individuals who have their income within 50 Lakh and have earned
                                their Income for the Financial Year through Salary or Pension,
                                only one House Property and other sources excluding lottery, racehorses,
                                legal gambling etc are eligible to file their IT Return using ITR-1.
                            </p>
                            <p>
                                Assessees who have income from foreign assets, agricultural income that
                                exceeds Rs. 5000, Income from Business or Profession and Income from
                                more than one house property are not eligible to file using ITR-1 Form.
                            </p>
                        </article>
                        <article>
                            <h2>ITR 2</h2>
                            <p>
                                The ITR-2 Form is an important Income Tax Return form used by
                                Indian citizens, as well as Non Residents to file their Tax Returns with
                                the Income Tax Department of India.
                                Individuals who are not eligible to use ITR-1 can use the ITR-2 Form.
                            </p>
                            <p>
                                Individuals and Hindu Undivided Families who have their Income for
                                the Financial Year through Salary or Pension, more than House Property,
                                Income from Capital Gains, Income from foreign assets/Income, Income
                                from business or profession as a partner (not proprietor) and other
                                sources including lottery, racehorses, legal gambling are eligible to
                                file their IT Return using ITR-2. Individuals who are not eligible to file using ITR-1,
                                because of their income exceeding  50 Lakh, also need to file using ITR-2.
                            </p>
                        </article>
                        <article>
                            <h2>ITR 3</h2>
                            <p>
                                The ITR-3 Form applies particularly to those Individuals and Hindu
                                Undivided Families who have income from carrying on a profession or
                                from Proprietary business. If an Individual/HUF is having income as a
                                partner of a partnership firm that is carrying out business/profession,
                                he cannot file ITR-3. In such case, he is required to file ITR 2.
                            </p>
                        </article>
                        <article>
                            <h2>ITR 4</h2>
                            <p>
                                The ITR-4 Form can be used by Individuals, Hindu Undivided
                                Families who are running a business with turnover of less than 2
                                Crore and Professionals with gross receipts exceeding 50 Lakhs,
                                provided they have opted for the presumptive income
                                scheme as per Section 44AD, Sec 44ADA and Section 44AE of the Income Tax Act.
                            </p>
                        </article>
                        <article>
                            <h2>ITR 5</h2>
                            <p>
                                ITR-5 Form can be used by Firms, Limited Liability Partnerships(LLPs),
                                Association of persons(AOPs) and Body of Individuals(BOIs), Artificial
                                Juridical Person, Cooperative society and Local authority, provided they
                                are not required to file the return of income under section 139(4A) or 139(4B) or 139(4C)
                                or 139(4D) (i.e., Trusts, Political party, Institutions, Colleges, etc.).
                            </p>
                            <p><em>Individuals, HUFs (Hindu Undivided Families), Companies cannot use the ITR-5 Form.</em></p>
                        </article>
                        <article>
                            <h2>ITR 6</h2>
                            <p>
                            ITR-6 Form can be used only by Companies. Only companies that are not 
                            claiming exemption under section 11 (Income from property held for charitable 
                            or religious purposes) can use the 
                            form to file their Tax Returns with the Income Tax Department of India.
                            </p>
                        </article>
                        <article>
                            <h2>ITR 7</h2>
                            <p>
                            ITR-7 Form can be used by Companies, Firms, Local authority, Association of Person 
                            (AOP) and 
                            Artificial Judiciary Person that are claiming exemption as one the following :
                            </p>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Charitable /Religious trust under Section 139 (4A).</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Political party under Section 139 (4B).</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Scientific research institutions under Section 139 (4C).</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>University or Colleges or Institutions or Khadi and Village industries under Section 139 (4D). </li>
                            </ul>
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
                <h2> ITR Filing </h2>
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

export default ITRFiling;