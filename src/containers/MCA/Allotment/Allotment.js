import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class Allotment extends Component{

    state = {
        selectedMenu: 'About',
    }

    AllotmentMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.AllotmentMenu.map((item,index) => {  
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
                            <h2>Memorandum of Association Amendment</h2>
                            <p>
                            Memorandum of Association of a Company sets down the constitution 
                            of a company including the permitted range of activities of the company, 
                            state of incorporation, type of company, capital clause, liability clause 
                            and more. Changes to Memorandum of Association of a company can be required 
                            while changing name of a company, changing registered office from state to state. 
                            Alteration of objects clause, alteration of capital clause or increase of authorised 
                            capital, Changes to the Memorandum of Association of a company would require 
                            the passing of a special resolution and shareholders consent.
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
                <h2> Memorandum of Association Amendment </h2>
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

export default Allotment;