import React from 'react';
// import AnchorLink from 'react-anchor-link-smooth-scroll';
import Radium from 'radium';
import classes from './Main.module.css';
import bg1 from '../../assets/image_part_001.jpg';
import bg2 from '../../assets/image_part_002.jpg';
import bg3 from '../../assets/image_part_003.jpg';
import bg4 from '../../assets/image_part_004.jpg';
import qltybgSmall from '../../assets/calc.jpeg';
// import qltybgBig from '../../assets/accounting-analytics-balance-209224.jpg';
// import cntntbgSml from '../../assets/mainImage.jpeg';
import { Link } from 'react-router-dom';

import Modal from '../../UI/Modal/Modal';

// import ContactForm from '../../containers/ContactForm/ContactForm'
import Services from '../../containers/Services/Services';

const main = (props) => {

    const qltyStyles = {
        backgroundImage: "url(" + qltybgSmall + ")",
        //height: "100vh",
        width: "100%",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        '@media(min-width:650px)': {
            // backgroundImage:"url("+qltybgBig+")",
            height: "100vh",
            width: "100%",
            backgroundSize: "cover",
            backgroundAttachment: "fixed"
        }
    }

    const cntntStyles = {
        '@media(max-width: 649px)': {
            backgroundImage: "url(" + bg1 + ")",
            width: '100%',
            'min-height': '100vh',
            backgroundSize: 'cover',

        }
    }

    return (

        <section className={classes.Main} id="start">
            <section className={classes.Content} style={cntntStyles}>
                <div className={classes.img1} style={{
                    '@media(min-width:650px)':
                        { backgroundImage: 'url(' + bg1 + ')' }
                }}>
                    <h3><a href="/incometax#">Income Tax</a></h3>
                </div>
                <div className={classes.img2} style={{
                    '@media(min-width:650px)':
                        { backgroundImage: 'url(' + bg2 + ')' }
                }}>
                    <h3><Link to="/gst#">GST</Link></h3>
                </div>
                <div className={classes.img3} style={{
                    '@media(min-width:650px)':
                        { backgroundImage: 'url(' + bg3 + ')' }
                }}>
                    <h3><a href="/rbi#">RBI</a></h3>
                </div>
                <div className={classes.img4} style={{
                    '@media(min-width:650px)':
                        { backgroundImage: 'url(' + bg4 + ')' }
                }}>
                    <h3><Link to="/startbusiness#" >Start Business</Link></h3>
                </div>
            </section>
            <section className={classes.Description}>
                <div>
                    <h1>Privy Corporate Consulting LLP</h1>
                    <hr></hr>
                    <p>
                        Privy Corporate Consulting LLP is a platform to simplify legal and business-related
                        matters. We are committed to helping Corporate, startups and small business owners in
                        solving legal compliance related to starting and running their business. Our mission is
                        to offer affordable, quick and automated professional services to clients. We bring
                        numerous government/ legal forms in one place and have simplified
                        them to be fully understood by the common man.
                    </p>
                    <p>
                        We are a platform to organize professional services industry in India! Our mission
                        is to provide one-click access to individuals &
                        businesses for all their legal & professional needs…!!!
                    </p>
                </div>

            </section>
            <div className={classes.Seperator}></div>
            {/* <section className={classes.Modals}>
                    {/* <Modal size="2">
                        <h3>Our Vision</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </Modal >
                    <Modal size="2">
                        <h3>Our Mission</h3>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                            exercitatio ullamco laboris nisi ut aliquip ex ea commodo consequat
                        </p>
                    </Modal> }

                </section> */}
            <Services />
            <div className={classes.Seperator}></div>

            <div style={qltyStyles}>
                <section className={classes.Qualities}>
                    <Modal size="3">
                        <h3>Astounding Accuracy</h3>
                        <p>
                            We have a skilled team of consultants who never go wrong in any compliance related matter.
                            Chances of errors are further reduced due to internal
                            quality checks and usage of technologically advanced cloud based products
                        </p>
                    </Modal>
                    <Modal size="3">
                        <h3>Stress-Free Services</h3>
                        <p>
                            You have the power to get any service you want at anytime you want.
                            Our experts will be happy to make complex things simpler for you.
                            Our customer service team ensures that you get the projects delivered on time, every time.
                            And yes, you can track the progress of your order with a few clicks.
                        </p>
                    </Modal>
                    <Modal size="3">
                        <h3>Stupendous Security</h3>
                        <p>
                            You probably don't want to share financial information online.
                            Be assured that we have top level data security measures that are
                            at par with bank level security. Scores of customers trust us and we constantly
                            upgrade the security to retain this trust.
                        </p>
                    </Modal>
                </section>
            </div>
            {/* <div id="contact">
                    <ContactForm />
                </div> */}


        </section>

    );
}

export default Radium(main);