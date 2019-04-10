import React, { Component } from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class StockExchange extends Component {

    state = {
        selectedMenu: 'About',
    }

    StockExchangeMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render() {
        let activeMenu = '';
        let menu = this.StockExchangeMenu.map((item, index) => {
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
                            <h2>SEBI</h2>
                            <p>
                                The Securities and Exchange Board of India (SEBI) is the dominant
                                and governed organization which regulate the capital market in India.
                                SEBI was set up with the main idea to keep a check on malpractices
                                and protect the interest of investors. Every listed entities is
                                required to comply with legal framework,
                                rules and regulations set up by SEBI form time to time.
                            </p>
                        </article>
                        <article>
                            <h2>LISTED COMPANIES:</h2>
                            <p>
                                Listing means the admission of securities of a company to trading
                                on a stock exchange. Listing is not compulsory under the Companies Act.
                                It becomes necessary when a public limited company desires to issue shares
                                or debentures to the public. When securities are listed in a stock exchange, the company
                                has to comply with the requirements of the exchange.
                            </p>
                            <p style={{ marginTop: '30px' }}>The major objectives of listing are : </p>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>To provide ready marketability and liquidity of a company’s securities.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>To provide free negotiability to stocks.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>To protect shareholders and investors interests.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>To provide a mechanism for effective control and supervision of trading. </li>
                            </ul>
                        </article>
                        <article>
                            <h2>SME</h2>
                            <p>
                                SME exchange is a stock exchange dedicated for trading the shares
                                of small and medium scale enterprises (SMEs) who, otherwise, find
                                it difficult to get listed in the main exchanges. The companies
                                listed on the SME exchange are allowed to migrate to the Main Board as
                                and when they meet the listing requirements of the Main Board and there
                                shall be compulsory migration of the SMEs from the SME exchange, in case
                                the post issue paid up
                                capital is likely to go beyond the prescribed limit.
                            </p>
                        </article>
                        <article>
                            <h2>FUND RAISING ADVISORY SERVICES :</h2>
                            <p>
                                We provide you the Professional Advisory services in raising
                                Capital through both the ways by following methods :
                            </p>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Issue of Equity shares as Initial Public Offering (IPO)/ Further Public Offering (FPO).</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Issue of Right shares</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Issue of Bonus Shares.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Preferential allotment of Equity Shares. </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Issue of Sweat Equity Shares (ESOS/ESPS).</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Issue of Convertible / Non convertible Debentures & Bonds.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Private Equity Placements.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Joint Venture/ Financial Collaboration.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Financial Restructuring of Securities. </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Listing of Securities. </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Delisting of Securities. </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Takeover Code Compliances. </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Stock Exchange / SEBI Regular Compliances. </li>
                            </ul>
                        </article>
                        <article>
                            <h2>IPO’S ADVISORY SERVICES :</h2>
                            <p>
                                We provide complete support in matters related to the formation
                                and listing of an IPO. We analyses risks, review advantages, and prepare
                                a report that assesses a company’s investment
                                potential and other fund raising options. Services include:
                            </p>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Reviewing the company’s structure and operations.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Financial due diligence.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Tax and legal restructuring in preparation for IPO.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Meeting the requirements of the Stock Exchanges.</li>
                            </ul>
                        </article>
                        <article>
                            <h2>LISTED COMPANIES ADVISORY SERVICES</h2>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Postal Ballot Assignments.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Board meetings and AGM Proceedings and related issues.</li>
                            </ul>
                        </article>
                        <article>
                            <h2>REPRESENTATIONS BEFORE THE AUTHORITIES</h2>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Securities & Exchange Board of India (SEBI).</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Stock Exchanges (NSE / BSE / RSEs).</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Multi-Commodity Exchanges (NCDEX, MCX etc.).</li>
                            </ul>
                        </article>
                        <article>
                            <h2>UNDER LISTING AGREEMENT AND SEBI (LISTING OBLIGATIONS AND DISCLOSURE REQUIREMENTS) REGULATIONS, 2015</h2>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Assisting in compliance of various Listing Clauses under the
                                    Listing Agreement and SEBI (LODR) Regulations.
                                </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Guiding on compliance of Corporate Governance.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>Quarterly/Half-Yearly/Yearly conducting Secretarial
                                    Audit of Listed Companies for ensuring Listing/SEBI compliances.
                                </li>
                            </ul>
                        </article>
                        <article>
                            <h2>OTHER UNDER SEBI</h2>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>
                                    Assisting in filing of various forms under Securities and Exchange Board of India
                                    (Substantial Acquisition of Shares and Takeovers) Regulations, 1997.
                                </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>
                                    Assisting in filing of various forms under Securities and Exchange Board of
                                    India (Prohibition of Insider Trading) Regulations, 1992.
                                </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>
                                    Advising on various SEBI Regulations like SEBI Takeover Code, SEBI
                                    Insider Trading Regulations, SEBI (ICDR) Regulations, 2009, SEBI Portfolio
                                    Managers Regulations, SEBI Broker Regulations with respect to IPO, Public Issue,
                                    Right Issue, Bonus Issue, Preferential Allotment, QIP, Delisting Buy Back of shares, Open Offer- Takeover, Delisting, Dematerialization of Shares, Advisory on Public/Right/Bonus/ Preferential Issue, Insider Trading Compliances, Providing Advisory services for the matters relating to Security Law, SEBI Guidelines, and ICDR Regulations, Portfolio Management Services (Rules and Regulations), Matters relating to Brokers’ Registration Fee, Multiple Membership
                                    fee Consent orders and Appeals before Securities Appellate Tribunal (SAT)
                                </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>
                                    Assisting in obtaining various regulatory approvals from SEBI/BSE/NSE.
                                </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>
                                    Assisting in Delisting of Companies from Stock Exchanges under SEBI (Delisting of Equity Shares) Regulations, 2009.
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
                <h2>Listing Compliances</h2>
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

export default StockExchange;