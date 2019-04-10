import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class ChangeOfName extends Component{

    state = {
        selectedMenu: 'About',
    }

    ChangeOfNameMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.ChangeOfNameMenu.map((item,index) => {  
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
                            <h2>Company Name Change</h2>
                            <p>
                            The name of a company or LLP can be changed by the promoters 
                            at anytime after incorporation. Some of the major reasons for 
                            change of company name are business model change, change of promoters, 
                            rebranding, etc., To change the name of a company, shareholders approval 
                            is required along with approval from the Ministry of Corporate Affairs. 
                            The change of name of a company or LLP however has no impact on the legal 
                            entity or its existence. Hence, all assets and liabilities of the entity would continue, 
                            while only the name of the company would have been changed.
                            </p>
                            <p>
                            Change of company name requires passing of a board resolution, obtaining name approval 
                            from MCA, passing of a special resolution and applying for approval of new 
                            company name to the MCA. If the MCA accepts the application, a new certificate of 
                            incorporation is issued. After obtaining the new certificate of incorporation, 
                            changes must be made to incorporate and change the MOA and AOA of the company as well.
                            </p>
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
                <h2> Change of Name </h2>
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

export default ChangeOfName;