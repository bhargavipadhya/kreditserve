import React from'react';
import './About.scss';
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from '../src/assets/about1.png';
import image2 from '../src/assets/about2.png';
import rohit from '../src/assets/rohit.png';
import abidali from '../src/assets/abidali.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const About = () => {

    const diamondShape = () => (
        <div className="diamond-shape" />
    );


    const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />

    return(
        <div className="About">
            <Navbar/>
            <div className="about-section">
                <h1>ABOUT US</h1>
            </div>

            <div className="who-we-are">
                <div className="text-container">
                    <h1 className="title">Who we are</h1>
                    <ul>
                        {diamondShape()} <li> A highly experienced team of professionals with background in financial services, investing and technology</li>
                        <li>Extensive experience in working with mid-market companies and influencing and advising entrepreneurs and management teams</li>
                        <li>Passionate about creating a positive impact in the MSME eco-system</li>
                        <li>String belief that banking and credit solutions can be significantly optimised and reengineered by leveraging technology</li>
                        <li>Shared belief in integrity and governance</li>
                        <li>Experience that the best work environments are made up people with diverse backgrounds, ideas and beliefs. We actively work towards maintaining a diverse workforce, promoting individuality and ensuring an inclusive work environment</li>
                        <li>Focus on building a scalable and enduring business</li>
                    </ul>

                </div>
                <div className="image-container">
                    <img src={image1} />
                </div>
            </div>

            <div className="vision">
                <div className="image-container">
                    <img src={image2} />
                </div>
                <div className="text-container">
                    <h1 className="title">Vision</h1>
                    <ul>
                        <li> Be the leading B2B finance platform offering innovative technology led credit solutions to the MSME eco-system of corporates, marketplaces and SaaS companies</li>
                        <li>Offer risk optimised products to lending partners</li>
                    </ul>
                    <h1 className="title">Kreditserve's 3T framework</h1>
                    <p>Kreditserve products reflect our core belief that sustainable business eco-sytems are built through 3Ts – Trust, Transparency and Technology</p>
                    <ul>
                        <li><i>Trust</i> is the bedrock of a sustainable business ecosystem</li>
                        <li><i>Trust</i> is based on <i>Transparency</i></li>
                        <li><i>Technology</i> enables <i>Transparency</i> in a seamless and efficient manner</li>
                    </ul>
                </div>
            </div>

            <div className="our-advisors">
                <h1 className="title">Our Advisors</h1>
                <div className="advisor-container">

                    <div className="main-container">
                        <div className="section1">
                            <img src={rohit} />
                        </div>
                        <div className="section2">
                            <div className="name_linkedin">
                                <div className="name">Rohit Arora</div>
                                <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                            </div>
                            <div className="designation">CEO & Co-Founder Biz2Credit</div>
                        </div>
                        <div className="section3">
                            <div className="about">lorem</div>
                        </div>
                    </div>

                    <div className="main-container">
                        <div className="section1">
                            <img src={abidali} />
                        </div>
                        <div className="section2">
                            <div className="name_linkedin">
                                <div className="name">Abidali Neemuchwala</div>
                                <div className="icon"><a href="http://linkedin.com/in/abidali-neemuchwala">{linkedin}</a></div>
                            </div>
                            <div className="designation">Co-Founder DVC & ex CEO Wipro</div>
                        </div>
                        <div className="section3">
                            <div className="about">lorem</div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer/>
        </div>
    )
};

export default About;

// Rohit Arora is one of America's top experts in small business lending and a FinTech pioneer. He is an economist and among the Top 50 Financial Technology CEOs of 2022 by Financial Technology Report. He was named 2011 Top Entrepreneur by Crain’s NY Business, which has listed Biz2Credit among NYC’s Fast 50 multiple times. Biz2Credit has processed loans of more than $7 billion. He has advised the President's Council of Economic Advisors on small business finance and meets regularly with leaders of the Small Business Administration.

