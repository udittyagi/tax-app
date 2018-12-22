import React from 'react';
import classes from './About.module.css';
import AboutCard from '../../UI/AboutCard/AboutCard';
import confidentialityImg from '../../assets/confidentiality.jpg';
import teamImg from '../../assets/team.jpg';
import pricingImg from '../../assets/pricing.jpg';
import experienceImg from '../../assets/experience.jpg';
import turnaroundImg from '../../assets/turnaround.jpg';
import ongoingWorkImg from '../../assets/ongoingWork.jpg';

const about = (props) => {
    return (
        <div className={classes.About}>
            <h2>About Us</h2>
            <hr></hr>
            <div>
                <AboutCard src={experienceImg} alt="Experience">
                    <h3>YEARS OF EXPERIENCE</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat
                    </p>
                </AboutCard>
                <AboutCard src={ongoingWorkImg} alt="On Going Work">
                    <h3>ON GOING WORK &amp; CATCH UP WORK</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat
                    </p>
                </AboutCard >
            </div>

            <div>
                <AboutCard src={turnaroundImg} alt="Turnaround ">
                    <h3>QUICK TURNAROUND</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat
                    </p>
                </AboutCard>
                <AboutCard src={teamImg} alt="Team">
                    <h3>QUALIFIED TEAM</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat
                    </p>
                </AboutCard>
            </div>

            <div>
                <AboutCard src={confidentialityImg} alt="Confidentiality">
                    <h3>CONFIDENTIALITY</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat
                    </p>
                </AboutCard>
                <AboutCard src={pricingImg} alt="pricing"> 
                    <h3>TRANSPARENT PRICING</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut
                         aliquip ex ea commodo consequat
                         
                    </p>
                </AboutCard>
            </div>
        </div>
    );
}

export default about;