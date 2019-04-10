import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class Registered extends Component{

    state = {
        selectedMenu: 'Introduction',
    }

    RegisteredMenu = [
        "Introduction"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.RegisteredMenu.map((item,index) => {  
            let activeClass = '';
            if(this.state.selectedMenu === item){
                activeClass=classes.activeMark;
                activeMenu = item;
            }
            return(<div key={index} className={activeClass} onClick={()=>this.changeMenuHandler(item)}>{item}</div>)
        })

        let MenuDetails = null 
        switch(activeMenu){
            case "Introduction":
                MenuDetails = (
                    <div>
                       <article>
                            <h2>Change of Registered Office</h2>
                            <p>
                            The registered office of a Company or LLP is the principle 
                            place of business for a private / public limited company 
                            and all official correspondence from the Ministry of Corporate 
                            Affairs is sent to this location. The registered office of a 
                            Company or LLP can be changed within the local limits of any city, 
                            town or village where such office is situated by just giving a notice 
                            to the concerned Registrar within 30 days after the date of the change. But a 
                            special resolution will be required if the change of the registered office is 
                            from one village, town, etc., in the same state. Where the place of registered 
                            offices is to be altered from one State to another State, the Company or LLP may 
                            do so by passing special resolution and getting confirmation of the Company Law 
                            Board. The Company or LLP is also required to give an advertisement in the 
                            newspapers indicating the change proposed to be made and also a notice is to 
                            be given to the State Government when it is proposed to 
                            transfer the registered office from one State to another.
                            </p>
                            <p>
                            A change to the registered business office address can be 
                            required due to various reasons. Further, the formalities and process for 
                            changing the Registered Office of the Company or LLP will depend on if the Company 
                            or LLP is changing address within the same city/town/village or if the Company 
                            is changing address between city/town/village of if the Company is changing the 
                            Registered Office between States. Privy Corporate Consulting can help you change 
                            the Registered 
                            Office in all three scenarios, talk to our Business Advisors today.
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
                <h2> Registered Office Shifting </h2>
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

export default Registered;