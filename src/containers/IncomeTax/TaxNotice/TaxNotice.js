import React, { Component } from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class TaxNotice extends Component {

    state = {
        selectedMenu: 'About',
    }

    TaxNoticeMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        let activeMenu = '';
        let menu = this.TaxNoticeMenu.map((item, index) => {
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
                            <h2>Introduction</h2>
                            <p>
                                Income tax notices are sent by the Income Tax Department for various
                                reasons like not filing income tax return, defect in filing of tax
                                return or other instances where the tax department requires additional
                                information or documents. On receiving an income tax notice, there is no
                                reason to be alarmed or frightened. However, the taxpayer must take steps
                                to understand the nature of notice,
                                the request or order in the notice and take steps to comply.
                            </p>
                            <p>
                                Privy Corporate Consulting offers a comprehensive suite of services for
                                families and businesses to help them maintain their tax compliance. In case
                                you receive an income tax notice, get in touch with a Tax Expert at Privy
                                Corporate Consulting to better
                                understand the income tax notice and determine a course of action.
                            </p>
                        </article>
                        <article>
                            <h2>Notice u/s 143(1) - Intimation</h2>
                            <p>
                                This is one of the most commonly received income tax notice.
                                The income tax department sends this notice seeking a response
                                to the errors/ incorrect claims/ inconsistencies in an income tax
                                return that was filed. If you want to revise the return after
                                receiving this notice, it must be done within 15 days. Else, the
                                tax return will be processed after making
                                necessary adjustments mentioned in the 143(1) tax notice.
                            </p>
                        </article>
                        <article>
                            <h2>Notice u/s 142(1) - Inquiry</h2>
                            <p>
                                This notice is addressed to the assessee when the return is
                                already filed and further details and documents are required
                                from the assessee to complete the process. This notice can also
                                be sent to necessitate a taxpayer to
                                provide additional documents and information.
                            </p>
                        </article>
                        <article>
                            <h2>Notice u/s 143(2) - Scrutiny</h2>
                            <p>
                                An income tax notice under Section 143(2) is issued if the tax officer
                                was not satisfied with the documents and information that was submitted
                                by the taxpayer. Taxpayers who receive notice under Section 142(2) have
                                been selected for a detailed scrutiny by the Income Tax
                                department and will have to submit additional information.
                            </p>
                        </article>
                        <article>
                            <h2>Notice u/s 139(1) - Defective Return</h2>
                            <p>
                                An income tax notice under Section 139(1) would be issued if the
                                income tax return filed does not contain all necessary information or
                                incorrect information. If tax notice under Section 139(1) is issued,
                                you should rectify the defect in the return within 15 days.
                            </p>
                        </article>
                        <article>
                            <h2>Notice u/s 156 - Demand Notice</h2>
                            <p>
                                This type of income tax notice is issued by the Income Tax
                                Department when any tax, interest, fine or any other sum is
                                owed by the taxpayer. All demand tax notice will
                                stipulate the sum which is outstanding and due from the taxpayer.
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
                <h2> Income Tax Notice </h2>
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

export default TaxNotice;