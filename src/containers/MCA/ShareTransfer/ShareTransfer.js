import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class ShareTransfer extends Component{

    state = {
        selectedMenu: 'About',
    }

    ShareTransferMenu = [
        "About"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.ShareTransferMenu.map((item,index) => {  
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
                            <h2>Company Share Transfer</h2>
                            <p>
                            The ownership of a company limited by shares is held by the shareholders 
                            of the Company. The shareholders in turn appoint Directors to manage the 
                            affairs of the Company. Hence, ownership of a company rests with the shareholders 
                            and not the Directors. Transfer of ownership of a company can therefore be 
                            accomplished by transferring shares of the company from one person or entity 
                            to another. Share transfer in a private limited company is usually more 
                            restricted when compared to a listed company that is publicly traded. The 
                            entire shares of a private limited company are usually owned by a family or a 
                            small group of persons or entities. Hence, most of the Articles of Association 
                            of a Private Limited Company limit the right of a shareholder to transfer 
                            the company's shares to an outsider. Therefore, it is important to review 
                            the Articles of Association of the Company prior to affecting a share transfer. 
                            Talisman Business Consultancy & Solutions can help you transfer shares of a private limited company by 
                            completing the necessary procedures as per Companies Act, 2013.
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
                <h2> Share Transfer/Transmission </h2>
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

export default ShareTransfer;