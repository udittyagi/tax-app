import React, { Component } from 'react';
import classes from './Services.module.css';
import ServiceCard from '../../UI/ServiceCard/ServiceCard';

class Services extends Component{
    services = {
        "Start Business":[
            "Private Limited Company",
            "Public Limited Company",
            "Limited Liability Partnership",
            "One Person Company",
            "Indian Subsidiary",
            "Partnership Firm",
            "Proprietorship",
            "Non Profit Organisations"
        ],
        "MCA":[
            "Corporate Annual Filing",
            "Add/Remove Director",
            "Increase in Authorised Capital",
            "Memorandum of Association Amendment", //Allotment
            "Registered Office Shifting",
            "Increase In Authorise Capital of the Company", //Charge Registration
            "Change of Name ",
            // "Change of Objects",
            "Share Transfer/Transmission",
            "Winding Up of a Company", //Corporate Closure
            "LLP Winding Up" //DIR 3 kYC
        ],
        "Income Tax":[
            "ITR Filing",
            // "TDS Return Filing",
            // "Registration",
            "Tax Notice"
        ],
        "GST":[
            "GST Registration",
            "GST Filing"
        ],
        "RBI":[
            "NBFC Compliances"
        ],
        "Listing Compliances":[
            "Listing Compliances",
            // "Listing of Securities"
        ],
        // "Finance":[
        //     "Project Financing",
        //     "Term Loan",
        //     "Working Capital",
        //     "Housing Finance",
        //     "Project Report Prepration"
        // ],
        // "Valuation":[
        //     "Valuation of Enterprise",
        //     "Valuation of Equity"
        // ],
        // "Other Services":[
        //     "Book Keeping",
        //     "Legal Drafting",
        //     "Retainership",
        //     "Due Diligence", 
        //     "Search Reports"

        // ]

        }
    render(){
        return ( 
            <section className={classes.Services}>
                <h2>Services</h2>
                <hr></hr>
                <section>
                    <ServiceCard title="Start Business" services={this.services["Start Business"]} />
                    <ServiceCard title="MCA" services={this.services["MCA"]} />
                </section>
                <section>
                    <ServiceCard title="Income Tax" services={this.services["Income Tax"]} />
                    <ServiceCard title="GST" services={this.services["GST"]} />
                </section>
                <section>
                    <ServiceCard title="RBI" services={this.services["RBI"]} />
                    <ServiceCard title="Listing Compliances" services={this.services["Listing Compliances"]} />
                </section>
                {/* <section>
                    <ServiceCard title="Finance" services={this.services["Finance"]} />
                    <ServiceCard title="Valuation" services={this.services["Valuation"]} />
                </section> */}
                {/* <section>
                    <ServiceCard title="Other Services" services={this.services["Other Services"]} />
                </section> */}
            </section>
        );
    }
    
}

export default Services;