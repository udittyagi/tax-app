import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class Compliances extends Component{

    state = {
        selectedMenu: 'About',
    }

    CompliancesMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.CompliancesMenu.map((item,index) => {  
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
                            <h2>Reserve Bank Of India</h2>
                            <hr></hr>
                            <p>
                            Reserve Bank of India (RBI) is a supreme 
                            Banking authority of the country. It regulates the banking 
                            and financial system of India. It formulates, implements and 
                            monitors the monetary  policies and Global transactions.
                            </p>
                            <p>A Non Banking Financial Company (NBFC) is a company registered 
                                under the laws applicable in India, engaged in the business of 
                                loans, advances, acquisition of shares, debentures, stock, 
                                bonds, hire-purchase, insurance business or chit-fund business 
                                etc but does not include any institution whose principal 
                                business includes agriculture, industrial activity or the sale, 
                                purchase or construction of immovable property . The working and 
                                operations of NBFCs are regulated by the Reserve Bank of India (RBI) 
                                within the framework of the Reserve Bank of India Act, 1934 and other 
                                regulations. No NBFC can commence or carry on business of a non-banking 
                                financial institution without obtaining a certificate of registration 
                                from RBI and compliance of other prescribed norms.
                            </p>
                            <p>Foreign Exchange Management Act, 1999 (FEMA) deals with 
                                provisions relating to procedures, formalities, licences, 
                                approvals dealings, etc. of foreign exchange transactions in 
                                India. The main objective of FEMA is to facilitate external 
                                trade and payments and for promoting the orderly development 
                                and maintenance of foreign exchange market in India. 
                            </p>
                            
                        </article>
                        <article>
                        <h2>What we do</h2>
                            <hr></hr>
                            <ul style={{listStyleType:"square"}}>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Registration of NBFCs with the Reserve Bank of India.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Appeals to the Appellate Authority against rejection of NBFC Applications by the RBI.</h3>                                  
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Arranging RBI approval for takeover, change in management and change in shareholding of NBFCs.</h3>                           
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Turn key Compliance Services to existing NBFCs.</h3>                                   
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Online filing of return/ certificates and other documents with COSMOS.</h3> 
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Drafting and Approval of Foreign Collaboration and Joint Venture Agreements and representation of Domestic/Foreign Partners.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Arranging Government approvals for Foreign Direct Investment in India.</h3> 
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Establishing Wholly Owned Subsidiaries/Place of Business Abroad and vice versa.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Establishing Branch office/ Liaison Office and project office.</h3> 
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Filing and Certification of Various Forms and Returns related to Foreign Direct Investment in India (FDI), Overseas Direct Investment by Indian Party (ODI) and External Commercial Borrowings (ECB).</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Foreign Portfolio Investment.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Acquisition and Transfer of Indian Immovable Property.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Assisting foreign clients in complying with the RBI regulations for Wholly Owned subsidiaries, Joint ventures, Opening and operating of Branch and Liaison offices, Project Offices etc.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Foreign Technology Transfer Agreements in India.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Setting up Partnership / Partnership by NRI'S or persons of Indian origin.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Non Resident Indians (NRI)/Persons of Indian origin (PIO) - Privileges and obligations under FEMA related matters & consultancy.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Plan the matters/ transactions/ projects/ agreements involving FEMA and implementation thereof.</h3>
                                </li>
                            </ul>
                        </article>  
                        <article>
                        <h2>REGULAR APPROVALS :</h2>
                            <hr></hr>
                            <ul style={{listStyleType:"square"}}>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Filling Forms and Disclosures for regular Compliances.</h3>
                                </li>
                                <li>
                                    <h3 style={{textAlign: "left", fontWeight: "300"}}>Submission of returns and timely disclosures.</h3>
                                </li>
                            </ul>
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
                <h2> NBFC Compliances </h2>
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

export default Compliances;