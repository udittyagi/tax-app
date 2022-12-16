import React, {Component} from 'react';

import classes from './ContactForm.module.css';
import building from '../../assets/building.jpeg';
import Ionicon from 'react-ionicons';
import Radium from 'radium';

class ContactForm extends Component{
    submitFormHandler = (e) => {
        e.preventDefault();
        window.alert("Service Coming Soon.....")
    }
    render(){
        const imgStyles = {
            '@media(min-width:650px)':{
                backgroundImage: 'url('+building+')',
            }
        }
        return (
            <div className={classes.ContactForm}>
                <div className={classes.FormImage} style={imgStyles}>
                    <div className={classes.icons}>
                      <div className={classes.icon}>
                        <Ionicon icon="ios-pin-outline" fontSize="25px" color="white"/>
                        <div>
                            <h3 style={{color:'rgb(248, 244, 238)'}}>Address</h3>
                            <p style={{color:'rgb(248, 244, 238)'}}>Uninav Heights, Raj Nagar Extension, Ghaziabad, Uttar Pradesh - 201017</p>
                        </div> 
                      </div>
                      
                      <div className={classes.icon}>
                        <Ionicon icon="ios-call-outline" fontSize="25px" color="white"/>
                        <div>
                            <h3 style={{color:'rgb(248, 244, 238)'}}>Lets Talk</h3>
                            <p style={{color:"#2eb82e", fontWeight:'bold'}}>+91 9711603579</p>
                        </div>
                      </div>
                      
                      <div className={classes.icon}>
                        <Ionicon icon="ios-mail-outline" fontSize="25px" color="white"/>
                        <div>
                            <h3 style={{color:'rgb(248, 244, 238)'}}>General Support</h3>
                            <p style={{color:"#2eb82e", fontWeight:'bold'}}>csmukultyagi@gmail.com</p>
                        </div>
                      </div>
                     
                    </div>
                </div>
                <div className={classes.FormData}>
                    <h3>Send Us A Message</h3>
                    <hr></hr>
                    <form>
                        <section className={classes.FormDetails}>
                            <div>
                                <label>Tell Us Your Name *</label>
                                <input type="text" id="firstName" placeholder="First Name" />
                                <input type="text" id="lastName" placeholder="LastName" />
                            </div>
                            <div>
                                <label>Enter Your Email</label>
                                <input type="text" id="emailAddress" placeholder="example@email.com" />
                            </div>
                            <div>
                                <label>Enter Phone Number</label>
                                <input type="text" id="firstName" placeholder="+910000000000" />
                            </div>
                            <div>
                                <label>Enter Your Query</label>
                                <textarea name="query" style={{width:"100%",
                                                                height: '56px',
                                                                border: '1px solid  rgb(30, 30, 21, 0.7)'}}/>
                            </div>
                            <a href="/" onClick={this.submitFormHandler}>Submit</a>
                        </section>
                        
                    </form>
                </div>
            </div>
        )
    }


}

export default Radium(ContactForm);