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
import {phoneCheck} from "./browserCheck";

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

            {phoneCheck() ?

                <div className="who-we-are-mobile">
                    <div className="image-container">
                        <img src={image1} />
                    </div>

                    <div className="text-container">
                        <h1 className="title">Who are we</h1>

                        <ul>
                            <li><span>A highly experienced team of professionals with background in financial services, investing and technology</span></li>
                            <li><span>Extensive experience in working with mid-market companies and influencing and advising entrepreneurs and management teams</span></li>
                            <li><span> Passionate about creating a positive impact in the MSME eco-system</span></li>
                            <li> <span>String belief that banking and credit solutions can be significantly optimised and reengineered by leveraging technology</span></li>
                            <li> <span>Shared belief in integrity and governance</span></li>
                            <li><span> Experience that the best work environments are made up people with diverse backgrounds, ideas and beliefs. We actively work towards maintaining a diverse workforce, promoting individuality and ensuring an inclusive work environment</span></li>
                            <li> <span>Focus on building a scalable and enduring business</span></li>
                        </ul>
                    </div>
                </div>
                :
                <div className="who-we-are">
                    <div className="text-container">
                        <h1 className="title">Who are we</h1>
                        <ul>
                            <li> <span>A highly experienced team of professionals with background in financial services, investing and technology</span></li>
                            <li> <span>Extensive experience in working with mid-market companies and influencing and advising entrepreneurs and management teams</span></li>
                            <li> <span>Passionate about creating a positive impact in the MSME eco-system</span></li>
                            <li> <span>String belief that banking and credit solutions can be significantly optimised and reengineered by leveraging technology</span></li>
                            <li> <span>Shared belief in integrity and governance</span></li>
                            <li> <span>Experience that the best work environments are made up people with diverse backgrounds, ideas and beliefs. We actively work towards maintaining a diverse workforce, promoting individuality and ensuring an inclusive work environment</span></li>
                            <li> <span>Focus on building a scalable and enduring business</span></li>
                        </ul>
                    </div>

                    <div className="image-container">
                        <img src={image1} />
                    </div>
                </div>
            }

            {phoneCheck() ?
                <div className="vision-mobile">
                    <div className="image-container">
                        <img src={image2} />
                    </div>
                    <div className="text-container">
                        <h1 className="title">Vision</h1>
                        <ul>
                            <li><span>Be the leading B2B finance platform offering innovative technology led credit solutions to the MSME eco-system of corporates, marketplaces and SaaS companies</span></li>
                            <li><span>Offer risk optimised products to lending partners</span></li>
                        </ul>
                        <h1 className="title">Kreditserve's 3T framework</h1>
                        <p>Kreditserve products reflect our core belief that sustainable business eco-sytems are built through 3Ts – Trust, Transparency and Technology</p>
                        <ul>
                            <li><span><i>Trust</i> is the bedrock of a sustainable business ecosystem</span></li>
                            <li><span><i>Trust</i> is based on <i>Transparency</i></span></li>
                            <li><span><i>Technology</i> enables <i>Transparency</i> in a seamless and efficient manner</span></li>
                        </ul>
                    </div>
                </div>
            :
                <div className="vision">
                    <div className="image-container">
                        <img src={image2} />
                    </div>
                    <div className="text-container">
                        <h1 className="title">Vision</h1>
                        <ul>
                            <li> <span>Be the leading B2B finance platform offering innovative technology led credit solutions to the MSME eco-system of corporates, marketplaces and SaaS companies</span></li>
                            <li><span>Offer risk optimised products to lending partners</span></li>
                        </ul>
                        <h1 className="title">Kreditserve's 3T framework</h1>
                        <p>Kreditserve products reflect our core belief that sustainable business eco-sytems are built through 3Ts – Trust, Transparency and Technology</p>
                        <ul>
                            <li><span><i>Trust</i> is the bedrock of a sustainable business ecosystem</span></li>
                            <li><span><i>Trust</i> is based on <i>Transparency</i></span></li>
                            <li><span><i>Technology</i> enables <i>Transparency</i> in a seamless and efficient manner</span></li>
                        </ul>
                    </div>
                </div>}


            {phoneCheck() ?
                <div className="our-team-container-mobile">
                    <h1 className="title">Our Advisors</h1>

                    <div className="team-members">
                        <div className="team-member">
                            <div className="img_name_title">
                                <img src={rohit} />
                                <div className="info-section">
                                    <div className="name-container">
                                        <div className="name">Rohit Arora</div>
                                        <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                                    </div>
                                    <div className="designation">CEO & Co-Founder, Biz2Credit</div>
                                </div>
                            </div>
                            <div className="info">Rohit Arora is one of America's top experts in small business lending and a FinTech pioneer. He is an economist and among the Top 50 Financial Technology CEOs of 2022 by Financial Technology Report. He was named 2011 Top Entrepreneur by Crain’s NY Business, which has listed Biz2Credit among NYC’s Fast 50 multiple times. Biz2Credit has processed loans of more than $7 billion. He has advised the President's Council of Economic Advisors on small business finance and meets regularly with leaders of the Small Business Administration.</div>
                        </div>

                        <div className="team-member">
                            <div className="img_name_title">
                                <img src={abidali} />
                                <div className="info-section">
                                    <div className="name-container">
                                        <div className="name">Abidali Neemuchwala</div>
                                        <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                                    </div>
                                    <div className="designation">Co-Founder DVC and ex CEO Wipro</div>
                                </div>
                            </div>
                            <div className="info">Abid has established himself with a remarkable career spanning multiple countries and organizations. Prior to taking up venture capital investing, Abid was Chief Executive Officer and Managing Director of Wipro Limited, overseeing $8 billion in revenue and more than 180,000 employees serving clients across six continents. His passion for celebrating entrepreneurship was lit during his stewarding Wipro Ventures, the strategic investment arm of Wipro Limited that raised $100 million in 2015 and $150 million in 2020 to deploy in technology startups.</div>
                        </div>

                    </div>
                </div>
            :
                <div className="our-team-container">
                    <h1 className="title">Our Advisors</h1>

                    <div className="team-members">
                        <div className="team-member">
                            <img src={rohit} />
                            <div className="info-section">
                                <div className="name-container">
                                    <h3 className="name">Rohit Arora</h3>
                                    <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                                </div>
                                <div className="designation">CEO & Co-Founder, Biz2Credit</div>
                                <div className="info">Rohit Arora is one of America's top experts in small business lending and a FinTech pioneer. He is an economist and among the Top 50 Financial Technology CEOs of 2022 by Financial Technology Report. He was named 2011 Top Entrepreneur by Crain’s NY Business, which has listed Biz2Credit among NYC’s Fast 50 multiple times. Biz2Credit has processed loans of more than $7 billion. He has advised the President's Council of Economic Advisors on small business finance and meets regularly with leaders of the Small Business Administration.</div>
                            </div>
                        </div>

                        <div className="team-member">
                            <img src={abidali} />
                            <div className="info-section">
                                <div className="name-container">
                                    <h3 className="name">Abidali Neemuchwala</h3>&nbsp;
                                    <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                                </div>
                                <div className="designation">Co-Founder DVC and ex CEO Wipro</div>
                                <div className="info">Abid has established himself with a remarkable career spanning multiple countries and organizations. Prior to taking up venture capital investing, Abid was Chief Executive Officer and Managing Director of Wipro Limited, overseeing $8 billion in revenue and more than 180,000 employees serving clients across six continents. His passion for celebrating entrepreneurship was lit during his stewarding Wipro Ventures, the strategic investment arm of Wipro Limited that raised $100 million in 2015 and $150 million in 2020 to deploy in technology startups.</div>
                            </div>
                        </div>

                    </div>
                </div>}

            <Footer/>
        </div>
    )
};

export default About;
