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
                    <p>
                        With vast experience of rendering specialized services and dealing
                        with various authorities and institutions, Talisman Team has established
                        long lasting and highly valued relationship with clients. These services
                        are provided by our professionals,
                        who possess extensive domain knowledge and experience in his field.
                    </p>
                </AboutCard>
                <AboutCard src={ongoingWorkImg} alt="On Going Work">
                    <h3>ON GOING WORK &amp; CATCH UP</h3>
                    <p>
                        Talisman serves well-reputed organizations as clients. From international
                        enterprises to the dynamic owner managed businesses, our clients cover
                        all sizes and industries. With a view of client oriented values and visions,
                        our one on one based client feedback system enriches our client relationship.
                        With a target of more than 1000 national and international client base by the year
                        2020, Talisman’s high quality, dedicated and result - oriented extensive
                        team is serving all aspects of clients' business growth and development.
                    </p>
                </AboutCard >
            </div>

            <div>
                <AboutCard src={turnaroundImg} alt="Turnaround ">
                    <h3>WHO WE ARE: A QUICK TURNAROUND</h3>
                    <p>
                        Talisman comprises professionals who are setting new standards for
                        professional services in a wide range of Business support.
                        We share a commitment to create innovative, high quality services
                        that are relied on every day by many businesses in India or abroad.
                        These services help in improving the financial efficiency, stability
                        and accuracy of the clients' business. We aim to serve with a high quality,
                        dedicated and result - oriented execution team to the clients and serve as a
                        primary resource and partner in all aspects of clients' business growth
                        and development; further we shall get involved & have a sincere concern with
                        our clients to understand
                        their objectives and meet their expectations from Talisman.
                    </p>
                </AboutCard>
                <AboutCard src={confidentialityImg} alt="Confidentiality">
                    <h3>CONFIDENTIALITY</h3>
                    <p>
                        We place a major emphasis on maintaining confidentiality of
                        Client information and Information Security Management. The following are key
                        features of our Confidentiality Agreement, applicable to all our clients.
                        <ul style={{ marginTop: "10px", marginLeft: "50px" }}>
                            <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>We do not disclose any information pertaining to our Clients to any third parties.</li>
                            <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>We do not use our Clients identity or Clients brand for our marketing purposes, without their written consent.</li>
                            <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>We never provide our Client's name or Client's information to other prospective clients for marketing purposes.</li>
                            <li style={{ marginBottom: "20px", textAlign: "left", fontSize: "15px" }}>We do not sell or disclose our Client list or Client Information to third parties.</li>
                        </ul>
                    </p>

                </AboutCard>
            </div>

            <div>

                <AboutCard src={teamImg} alt="Team">
                    <h3>QUALIFIED TEAM</h3>
                    <p>
                        Talisman currently has a network of professionals including
                        experienced Chartered Accountants, Company Secretaries, Lawyers and Bankers.
                        Our team puts the consumer first and works meticulously to ensure that
                        documents are filled correctly and swiftly.
                    </p>
                </AboutCard>
                <AboutCard src={pricingImg} alt="pricing">
                    <h3>TRANSPARENT PRICING</h3>
                    <p>
                        Transparency is our utmost concern. In Talisman Business Consultancy & Solutions we believe that our customer should 
                        be provided tranparency not only in our work but also in the price which they pay 
                        for our services. 
                    </p>
                </AboutCard>
            </div>
        </div>
    );
}

export default about;