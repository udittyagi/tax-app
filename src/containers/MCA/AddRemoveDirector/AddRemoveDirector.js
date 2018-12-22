import React, {Component} from 'react';
import classes from '../../GST/GST_Registration/GST_Registration.module.css';



class AddRemoveDirector extends Component{

    state = {
        selectedMenu: 'Definition',
    }

    AddRemoveDirectorMenu = [
        "Definition",
        "Inclusion",
        "Procedures",
        "Documents",
        "Advantages",
        "FAQs"
    ]

    changeMenuHandler = (menu) => {
        this.setState({
            selectedMenu: menu
        })
    }

    render(){
        let activeMenu = '';
        let menu = this.AddRemoveDirectorMenu.map((item,index) => {  
            let activeClass = '';
            if(this.state.selectedMenu === item){
                activeClass=classes.activeMark;
                activeMenu = item;
            }
            return(<div key={index} className={activeClass} onClick={()=>this.changeMenuHandler(item)}>{item}</div>)
        })

        let MenuDetails = null 
        switch(activeMenu){
            case "Definition":
                MenuDetails = (
                    <div>
                       <article>
                            <h2>What is Limited Liability ?</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                        <article>
                            <h2>Who All Need GST Registration ?</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                        <article>
                            <h2>Benefits Of Registration Under GST</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                        
                    </div>
                )
                break;
            case "Inclusion":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>What’s included in our package?</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>                  
                    </div>
                )
                break;
            case "Procedures":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>GST Registration Process (on Government Portal)</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                    </div>
                )
                break;
            case "Documents":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Documents for Registration</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                    </div>
                )
                break;
            case "Advantages":
                MenuDetails = (
                    <div>
                        <article>
                            <h2>Advantages</h2>
                            <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt 
                            ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud 
                            exercitation ullamco laboris nisi 
                            ut aliquip ex ea commodo consequat. Duis 
                            aute irure dolor in reprehenderit
                            in voluptate velit esse cillum dolore eu 
                            fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                            non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </article>
                    </div>
                )
                break;
            case "FAQs":
            default:
                    MenuDetails=(
                        <div>Something Went Wrong</div>
                    )
        }

        return (
            <section className={classes.ServiceDescription}>
                <h2> Add/Remove Director </h2>
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

export default AddRemoveDirector;