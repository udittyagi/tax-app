import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class DIR extends Component{

    state = {
        selectedMenu: 'About',
    }

    DIRMenu = [
        "About",
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.DIRMenu.map((item,index) => {  
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
                            <h2>Introduction</h2>
                            <p>
                            A LLP winding up can be initiated voluntarily or by striking off or by a 
                            Tribunal. If a LLP is to initiate winding up voluntarily, then the LLP 
                            must pass a resolution to wind up the LLP with approval of at least 
                            three-fourths of the total number of Partners. If the LLP has lender's, 
                            secured or unsecured, then the approval of the lenders 
                            would also be required for winding up of the LLP.
                            </p>
                            <p>
                            To begin the process for winding up of LLP, a resolution for winding up of 
                            LLP must be passed and filed with the Registrar within 30 days of passing of the resolution. On the date of passing of resolution of winding up of LLP, 
                            the voluntary winding up shall be deemed to commence.
                            </p>
                        </article>
                        <article>
                            <h2>Voluntary Winding Up</h2>
                            <p>
                            LLPs can also be wound-up easily with the approval of 3/4th of 
                            the partners. To start the liquidation process for a LLP, a greater 
                            part of the designated partners, will have to make a declaration that 
                            the LLP has no debt or that it will be competent to pay the debts in 
                            full within a period of not more than 1 year from the start of winding 
                            up. Further, the LLP partners must declare that the LLP is not being 
                            wound up to defraud any person or persons. This declaration for winding 
                            up of the LLP must be prepared along with a statement of assets and liabilities 
                            until the most recent practicable date right before the making of declaration 
                            for winding up. A valuation of the assets related to the LLP prepared by a 
                            valued must also be submitted, if there are assets in LLP. Voluntary winding 
                            up will be deemed to start on the date of passing of 
                            resolution for the reason of voluntary winding up.  
                            </p>
                        </article>
                        <article>
                            <h2>Striking Off</h2>
                            <p>
                            The Ministry of Corporate Affairs has recently amended Limited 
                            Liability Partnership Rules, 2009 by introducing the Limited Liability 
                            Partnership (Amendment) Rules, 2017 with effect from 20th May, 2017. 
                            With this amendment, LLP Form 24 has been introduced by the MCA and 
                            it is now possible to easily close a LLP by making an application to the 
                            Registrar for striking off name of LLP. Before the introduction of the Limited 
                            Liability Partnership (Amendment) Rules, 2017, the procedure for winding up a 
                            LLP used to be long and cumbersome. However, with the introduction of 
                            LLP Form 24, the procedure has been made easy and simple. 
                            </p>
                        </article>
                        <article>
                            <h2>Winding Up by Tribunal</h2>
                            <p>
                            Winding up of LLP can be initiated by a Tribunal for the following reasons:
                            </p>
                            <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>The LLP wants to be wound up.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>There are less than two Partners in the LLP for a period of more than 6 months.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>The LLP is not in a position to pay its debts.</li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>The LLP has acted against the interests of the sovereignty and integrity of India, the security of State or public order. </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>The LLP has not filed with the Registrar Statement of Accounts and Solvency or LLP Annual Returns for any five consecutive financial years. </li>
                                <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>The Tribunal is of the opinion that it is just and equitable that the LLP should be wound up. </li>
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
                <h2> LLP Winding Up </h2>
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

export default DIR;