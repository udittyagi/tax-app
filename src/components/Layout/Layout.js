import React, { Component } from 'react';
import classes from './Layout.module.css';
import Main from '../Main/Main';
import Sidebar from '../../UI/Sidebar/Sidebar';
import { Route, Switch, NavLink, Link, withRouter } from 'react-router-dom';
import ContactForm from '../../containers/ContactForm/ContactForm';
import About from '../About/About';
import Services from '../../containers/Services/Services';
import Ionicon from 'react-ionicons';
import Gst from '../../containers/GST/GST';
import StartBusiness from '../../containers/StartBusiness/StartBusiness';
import MCA from '../../containers/MCA/MCA';
import IncomeTax from '../../containers/IncomeTax/IncomeTax';
import RBI from '../../containers/RBI/RBI';
// import Finances from '../../containers/Finances/Finances';
import ListingCompliances from '../../containers/ListingCompliances/ListingCompliances';
// import Valuation from '../../containers/Valuation/Valuation';
// import OtherServices from '../../containers/OtherServices/OtherServices';
import logo from '../../assets/logo2.svg';

class Layout extends Component {

    state = {
        show: false,
        showServiceMenu: false,
    }

    sidebarHandler = () => {
        const shown = !this.state.show;
        this.setState({ show: shown });
    }

    serviceMenuHandler = () => {
        const shown = !this.state.showServiceMenu;
        this.setState(
            { showServiceMenu: shown }
        )
    }

    routeChangeHandler = (url) => {
        this.props.history.push(url);
    }
    render() {
        let navStyles = null;
        if (this.state.show) {
            navStyles = {
                position: "fixed",
            }
        }
        let switched = null
        if (!this.state.Sidebar) {
            switched = (
                <Switch>
                    <Route path="/contact" component={ContactForm} />
                    <Route path="/about" component={About} />
                    <Route path="/services" component={Services} />
                    <Route path="/gst" component={Gst} />
                    <Route path="/startbusiness" component={StartBusiness} />
                    <Route path="/mca" component={MCA} />
                    <Route path="/incometax" component={IncomeTax} />
                    <Route path="/rbi" component={RBI} />
                    {/* <Route path="/finance" component={Finances} /> */}
                    <Route path="/listingcompliances" component={ListingCompliances} />
                    {/* <Route path="/otherservices" component={OtherServices} />
                    <Route path="/valuation" component={Valuation} /> */}
                    <Route path="/" component={Main} />

                </Switch>
            )
        }

        let serviceClass = classes.ServiceMenuNotDisplay;
        let ionIcon = (<Ionicon icon="ios-add" fontSize="24px" color="#1e1e15" />);
        if (this.state.showServiceMenu) {
            serviceClass = classes.ServiceMenuDisplay;
            ionIcon = (<Ionicon icon="ios-remove" fontSize="24px" color="#1e1e15" />);
        }

        return (

            <div className={classes.Layout}>
                <header >
                    <nav className={classes.Nav} style={navStyles}>
                        <div style={{ height: "50px", width: "120px", backgroundColor: 'white'}}><img src={logo} alt="Privy Corp" style={{ height: "50px", width: "120px" }} /></div>
                        <div className={classes.Sidebar} onClick={this.sidebarHandler}>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                        <ul className={classes.MenuList}>
                            <li><NavLink to={{ pathname: "/" }}>Home</NavLink></li>
                            <li></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li></li>
                            <li>{/* eslint-disable-next-line*/}
                                <a href="#" style={{ position: "relative" }}>
                                    <div className={classes.ListStyle}>
                                        <div>Services</div>
                                        <div style={{ marginTop: "10px" }}>
                                            <Ionicon icon="ios-arrow-down" fontSize="20px" color="#f5f5f0" />
                                        </div>
                                    </div>
                                    <div className={classes.ServiceList}>
                                        <div style={{ borderRigth: "1px solid #f5f5f0", width: "40%", paddingRight: "20px" }}>
                                            <div onClick={() => this.routeChangeHandler('/startbusiness')}>Start Business</div>
                                            <hr></hr>
                                            <div onClick={() => this.routeChangeHandler('/mca')}>MCA</div>
                                            <hr></hr>
                                            <div onClick={() => this.routeChangeHandler('/incometax')}>Income Tax</div>
                                            {/* <hr></hr> */}

                                        </div>
                                        <div style={{ width: "40%" }}>
                                            <div onClick={() => this.routeChangeHandler('/listingcompliances')}>Listing Compliances</div>
                                            <hr></hr>
                                            {/* <div onClick={() => this.routeChangeHandler('/finance')}>Finance</div>
                                                <hr></hr>
                                                <div onClick={() => this.routeChangeHandler('/valuation')}>Valuation</div>
                                                <hr></hr>
                                                <div onClick={() => this.routeChangeHandler('/otherservices')}>Other Services</div> */}
                                            <div onClick={() => this.routeChangeHandler('/gst')}>GST</div>
                                            <hr></hr>
                                            <div onClick={() => this.routeChangeHandler('/rbi')}>RBI</div>
                                        </div>

                                    </div>
                                </a>
                            </li>
                            <li></li>
                            <li><NavLink to="/knowledge">Knowledge Portal</NavLink></li>
                        </ul>
                    </nav>
                </header>
                <Sidebar visible={this.state.show}>
                    <div className={classes.SidebarMenu}>
                        <ul>
                            <li onClick={this.sidebarHandler}><NavLink to="/">Home</NavLink></li>
                            <li onClick={this.sidebarHandler}><NavLink to="/about">About</NavLink></li>
                            <li className={classes.ServiceMenu}>{/* eslint-disable-next-line*/}
                                <div onClick={this.serviceMenuHandler} >
                                    <div className={classes.SubListStyle} >
                                        <div>
                                            Services
                                </div>
                                        <div>
                                            {ionIcon}
                                        </div>
                                    </div>
                                </div>
                                <div className={serviceClass}>
                                    <div onClick={() => { this.routeChangeHandler('/startbusiness'); this.sidebarHandler() }}>Start Business</div>
                                    <hr></hr>
                                    <div onClick={() => { this.routeChangeHandler('/mca'); this.sidebarHandler() }}>MCA</div>
                                    <hr></hr>
                                    <div onClick={() => { this.routeChangeHandler('/incometax'); this.sidebarHandler() }}>Income Tax</div>
                                    <hr></hr>
                                    <div onClick={() => { this.routeChangeHandler('/gst'); this.sidebarHandler() }}>GST</div>
                                    <hr></hr>
                                    <div onClick={() => { this.routeChangeHandler('/rbi'); this.sidebarHandler() }}>RBI</div>
                                    <hr></hr>
                                    <div onClick={() => { this.routeChangeHandler('/listingcompliances'); this.sidebarHandler() }}>Listing Compliances</div>
                                    {/* <hr></hr>
                                    <div onClick={() => { this.routeChangeHandler('/finance'); this.sidebarHandler() }}>Finance</div>
                                    <hr></hr>
                                    <div onClick={() => { this.routeChangeHandler('/valuation'); this.sidebarHandler() }}>Valuation</div>
                                    <hr></hr>
                                    <div onClick={() => { this.routeChangeHandler('/otherservices'); this.sidebarHandler() }}>Other Services</div> */}
                                </div>
                            </li>
                            <li onClick={this.sidebarHandler}><NavLink to="/knowledge">Knowledge Portal</NavLink></li>
                            <li onClick={this.sidebarHandler}><NavLink to="/contact">Contact Us</NavLink></li>
                        </ul>
                    </div>
                </Sidebar>

                {switched}

                {/* <Main /> */}
                <div className={classes.Contact}><Link to="/contact">Contact Us</Link></div>
                <footer>
                    <div className={classes.FooterCompany}>
                        <h2>Privy Corp</h2>
                        <p>&copy; Privy Corporate Consulting LLP</p>
                    </div>
                    <div className={classes.FooterSeperator}></div>
                    <div className={classes.ContactInfo}>
                        <div>
                            <p>Contact No(T) : +91 11 2354 9822 / 23</p>
                            <p>Contact No(M) : +91 9711603579</p>
                            <p>Contact No(F) : +91 11 2362 3829</p>
                        </div>
                        <div>
                            <p>Address: 304, Sita Ram Mansion, 718/21, Joshi Road, Karol Bagh, New Delhi-110 005, India</p>
                        </div>

                    </div>

                    <div className={classes.FooterSeperator}></div>

                    <h5>Developed By: Udit Tyagi</h5>
                </footer>
            </div>

        );
    }
}

export default withRouter(Layout);