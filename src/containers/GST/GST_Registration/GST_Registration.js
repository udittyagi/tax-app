import React, { Component } from 'react';
import classes from './GST_Registration.module.css';


class GstRegistration extends Component {

    state = {
        selectedMenu: 'About',
    }

    GstRegistrationMenu = [
        "About",
        "Documents",
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        let activeMenu = '';
        let menu = this.GstRegistrationMenu.map((item, index) => {
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
                            <h2>Eligibility, Process and Expert Help</h2>
                            <hr></hr>
                            <p>
                                GST is the biggest tax reform in India, tremendously improving ease of doing business
                                and increasing the taxpayer base in India by bringing in millions of small businesses in
                                India. By abolishing and subsuming multiple taxes into a single system, tax
                                complexities would be reduced while tax base is increased substantially. Under the
                                new GST regime, all entities involved in buying or selling goods or providing services or
                                both are required to register for GST. Entities without GST registration would not be
                                allowed to collect GST from a customer or claim input tax credit of GST paid or could be
                                penalised. Further, registration under GST is mandatory once an entity crosses the
                                minimum threshold turnover of starts a new business that is expected to cross the
                                prescribed turnover.

                                As per the GST Council, entities in special category states with an annual turnover of
                                Rs.10 lakhs and above would be required to register under GST. All other entities in
                                rest of India would be required to register for GST if annual turnover exceeds Rs.20
                                lakhs. There are also various other criteria&#39;s, that could make an entity liable for
                                obtaining GST registration - irrespective of annual sales turnover. Entities required to
                                register for GST as per regulations must file for GST application within 30 days from the
                                date on which the entity became liable for registration under GST.

                                Talisman Business Consultancy & Solutions is the leading business services platform in India, offering a
                                variety of services like income tax filing, GST return filing, private limited company

                                registration, trademark filing and more. Talisman Business Consultancy & Solutions can help you obtain
                                GST registration in India and maintain GST compliance through Opto tax GST
                                accounting software. The average time taken to obtain GST Certificate is about 5 - 10
                                working days, subject to government processing time and client document submission.
                            </p>
                        </article>
                        <article>
                            <h2>What is GST Return?</h2>
                            <hr />
                            <p>Every person registered under the GST Act has to periodically furnish
                                the details of sales and purchases along with tax collected and paid
                                thereon, respectively, by filing online returns. Before filing the return,
                                payment of tax due is compulsory otherwise such return will be invalid.
                            </p>
                            <p>
                                Steps for filing GST return:
                            </p>
                            <p>
                                GST return can be filed in different forms depending upon the nature of
                                transaction and registration.
                                Return Forms that are applicable for Normal Tax payers and their due dates are:
                            </p>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Monthly Details of outward supplies in FORM GSTR-1 by the 10th of next month.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Monthly Details of inward supplies in FORM GSTR-2 by the 15th of next month.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Monthly Filing of Return along with payment of tax due in FORM GSTR-3 by the 20th of next month.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Annual Filing of Return in FORM GSTR-9 by 31st December of next financial year.</li>
                            </ul>
                        </article>
                        <article>
                            <h2>Cancel GST Registration</h2>
                            <hr />
                            <p>
                                Most persons or entities who supply goods and/or services in India have a
                                GST registration. After obtaining GST registration, sometimes a GST
                                registration may need to be cancelled. Some of the most common reasons for
                                cancellation of GST registration are closure of business, no requirement
                                to pay GST, transfer of business, change in constitution and no business
                                activity. Surrendering a GST registration will reduce the compliance
                                requirement for the taxpayer, as GST returns would not longer have to
                                be filed monthly. To cancel a GST registration, application must be
                                submitted on the GST Common Portal in FORM GST REG-16 along with the required
                                information. On submission of an application for cancellation of GST registration,
                                the GST officer is required to verify the application and issue an order in
                                FORM GST REG-19, within 30 days from the date of application.
                            </p>
                        </article>
                    </div>
                )
                break;

            case "Documents":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Documents Required</h2>
                            <hr></hr>
                            <ul style={{ listStyleType: "square" }}>
                                <li>
                                    <h3 style={{ textAlign: "left", textDecoration: "underline", fontWeight: "300" }}>PAN Card of the Business or Applicant</h3>
                                    <p>
                                        GSTIN is linked to the PAN of the business. Hence, PAN is required to obtain GST certificate.

                                    </p>
                                </li>
                                <li>
                                    <h3 style={{ textAlign: "left", textDecoration: "underline", fontWeight: "300" }}>Identity and Address Proof of Promoters</h3>
                                    <p>
                                        Identity proof and address proof documents like PAN, passport, driving license,
                                        aadhaar card or voters identity card must be submitted for all the promoters.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{ textAlign: "left", textDecoration: "underline", fontWeight: "300" }}>Business Registration Document</h3>
                                    <p>
                                        Proof of business registration like incorporation certificate or partnership
                                        deed or registration certificate must be submitted for all types of registered entities.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{ textAlign: "left", textDecoration: "underline", fontWeight: "300" }}>Address Proof for Place of Business</h3>
                                    <p>
                                        Documents like rental agreement or sale deed along with copies of electricity bill or
                                        latest property tax receipt or municipal khata copy must be submitted for the address
                                        mentioned in the GST application.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{ textAlign: "left", textDecoration: "underline", fontWeight: "300" }}>Bank Account Proof</h3>
                                    <p>
                                        Scanned copy of the first page of bank passbook showing a few transaction and address of
                                        the business must be submitted for the bank account mentioned in the registration
                                        application.
                                    </p>
                                </li>
                                <li>
                                    <h3 style={{ textAlign: "left", textDecoration: "underline", fontWeight: "300" }}>Digital Signature</h3>
                                    <p>
                                        Class 2 or class 3 digital signature is required for the authorised signatory to
                                        sign and submit the GST application.
                                        In case of proprietorship, there is no requirement for digital signature.
                                    </p>
                                </li>
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
                <h2> GST Registration </h2>
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

export default GstRegistration;