import React, { Component }from 'react';
import classes from './Layout.module.css';
import Main from '../../containers/Main/Main';
import Sidebar from '../../UI/Sidebar/Sidebar';

class Layout extends Component{
    // const SidebarStyles = {
    //         width: '100%',
    // }
    // const SidebarStylesUl={
    //         listStyle: "none",
    //         color:"#1e1e15",
        
    // }
    state = {
        show:false
    }

    sidebarHandler=() => {
        const shown = !this.state.show;
        this.setState({show:shown});
    }

    render(){
        let navStyles = null;
        if(this.state.show){
            navStyles={
                position:"fixed",
            }
        }
    return (
        
        <div className={classes.Layout}>
            <header >
                <nav className={classes.Nav} style={navStyles}>
                <p>logo</p>
                <div className={classes.Sidebar} onClick={this.sidebarHandler}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li></li>
                    <li><a href="/">About</a></li>
                    <li></li>
                    <li><a href="/">Services</a></li>
                    <li></li>
                    <li><a href="/">Knowledge Portal</a></li>
                </ul>
                </nav>
            </header>
            <Sidebar visible={this.state.show}>
                <div className={classes.SidebarMenu}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Services</a></li>
                    <li><a href="/">Knowledge Portal</a></li>
                </ul>
                </div> 
            </Sidebar>
            <Main />
            <div className={classes.Contact}>Contact Us</div>
            <footer>
                
            </footer>
        </div>
        
    );
    }
}

export default Layout;