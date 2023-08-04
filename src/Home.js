import React, {useEffect, useState} from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import './Home.scss';
import homeimage1 from "./assets/home-image1.png";
import homeimage2 from "./assets/home-image2.png";
import corporateanchor from './assets/corporate-anchor.png';
import digitalmarketplace from './assets/digital-marketplace.png';
import saasprovider from './assets/saas-provider.png';
import vk from './assets/vendorkredit.png';
import mk from './assets/marketkredit.png';
import nk from './assets/novakredit.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import vikram from './assets/vikram.png';
import saif from './assets/saif.png';
import bharat from './assets/bharat.png';
import prajit from './assets/prajit.png';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Home = () => {

    const [selectedTitle, setSelectedTitle] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [currentIndex, setCurrentIndex] = useState(0);

    const next = () => {
        setCurrentIndex((currentIndex + 1) % photos.length);
    };

    const prev = () => {
        setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
    };


    useEffect(() => {
        setSelectedTitle('Supply Chain and Financial Expertise');
        console.log(selectedTitle)
    }, [dropdownOpen]);

    const diamondShape = () => (
        <div className="diamond-shape" />
    );

    const angleDown = <FontAwesomeIcon icon={faAngleDown} />;
    const linkedin = <FontAwesomeIcon icon={faLinkedinIn} />;


    // const userDropdownMenu = () => (
        {/*<div className="drop-down">*/}

        {/*    <>*/}
        {/*        <Link to={} className="dropdown-menu-item">*/}
        {/*            Dashboard*/}
        {/*        </Link>*/}
        {/*        <span onClick={ () => {*/}
        {/*            logout(() => handleLogOut());*/}
        {/*            // setDropdownOpen(false);*/}
        {/*        }*/}
        {/*        } className="dropdown-menu-item" >Logout</span>*/}
        {/*    </>*/}
        {/*    */}
        {/*</div>*/}
    // );


    return(
        <div className="Home">
            <Navbar/>

            <div>
                <div className="banner-section">
                    <div className='slider-container'>
                        {photos.map((photo) => (
                            <div
                                key={photo.id}

                                // if the photo is the current photo, show it
                                className={
                                    photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
                                }
                            >
                                <img src={photo.url} alt={photo.title} className='photo' />
                                <div className='caption'>{photo.title}</div>
                            </div>
                        ))}

                        {/* Previous button */}
                        <button onClick={prev} className='prev'>
                            &lt;
                        </button>

                        {/* Next button */}
                        <button onClick={next} className='next'>
                            &gt;
                        </button>
                    </div>

                    {/* Render dots indicator */}
                    <div className='dots'>
                        {photos.map((photo) => (
                            <span
                                key={photo.id}
                                // highlight the dot that corresponds to the current photo
                                className={
                                    photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
                                }
                                // when the user clicks on a dot, go to the corresponding photo
                                onClick={() => setCurrentIndex(photos.indexOf(photo))}
                            />
                        ))}
                    </div>
                </div>


                <div className="intro">
                    <div className="image-container">
                        <img src={homeimage1} />
                    </div>
                    <div className="text-container">
                        <div>Kreditserve’s suite of products help successful businesses and B2B marketplaces in strengthening and leveraging their ecosystems and deepening the partnership with their supply chain partners.</div>
                        <br/><br/>
                        <div>Our goal is to provide platforms for established businesses and B2B marketplaces (‘Anchors’) to leverage the strength of their supply chain ecosystems. The products empower the small and medium businesses in the Anchor’s ecosystem with data and capital, while using the smartest and most innovative technology enabled financial solutions. In doing so, Kreditserve help Anchors deepen their relationship with their ecosystem partners, gain important insights into their partner’s capabilities and needs while at the same time enhancing their margins.</div>
                    </div>
                </div>

                <div className="our-edge">
                    <div className="text-container">
                        <div className="title-container">
                            <div className="titles">
                                {ourEdgeSectionItems.map((jy,i) => (
                                    <button key={i} onClick={() => setSelectedTitle(jy.title)} className="title-button">{jy.title}</button>
                                ))}
                            </div>
                        </div>

                        {ourEdgeSectionItems.map((j,i) => (
                            <div key={i} className="our-edge-content-container">
                                {j.title === selectedTitle ?
                                    <div className="content-item-container">
                                        <ul>
                                            {j.content.map((jitem, idx) => (
                                            <li key={idx} className="item-content">{jitem}</li>
                                        ))}
                                        </ul>
                                    </div>
                                    :
                                    null}
                            </div>
                        ))}
                    </div>

                    <div className="image-container">
                        <img src={homeimage2} />
                    </div>
                </div>

                <div className="solutions">
                    <h1 className="title">Solutions</h1>

                    <div className="solutions-container">
                        <div className="solution-item vendorkredit">
                            <div className="title">Corporate Anchor</div>
                            <div className="img-container"><img src={corporateanchor} /></div>
                            <div className="text">
                                <div className="diamond-bullet">{diamondShape()} Integration with the anchor's payable platform</div>
                                <div className="diamond-bullet">{diamondShape()} Vendor portal to digitise vendor/anchor interactions</div>
                                <div className="diamond-bullet">{diamondShape()} Offer early payment solutions to vendors</div>
                                <div className="diamond-bullet">{diamondShape()} Enhance anchor profitability</div>
                            </div>
                            <div className="logo-container"><img src={vk} /></div>
                            <div className="button-container"><button>Know More</button></div>
                        </div>
                        <div className="solution-item marketkredit">
                            <div className="title">Digital Marketplace</div>
                            <div className="img-container"><img src={digitalmarketplace} /></div>
                            <div className="text">
                                <div className="diamond-bullet">{diamondShape()} Integrate with the marketplace frontend</div>
                                <div className="diamond-bullet">{diamondShape()} Provide credit solutions to both buyers and sellers</div>
                                <div className="diamond-bullet">{diamondShape()} Exclusive digital credit provider to participants in the marketplace</div>
                            </div>
                            <div className="logo-container"><img src={mk} /></div>
                            <div className="button-container"><button>Know More</button></div>
                        </div>
                        <div className="solution-item novakredit">
                            <div className="title">Saas Provider</div>
                            <div className="img-container"><img src={saasprovider} /></div>
                            <div className="text">
                                <div className="diamond-bullet">{diamondShape()} Source data from Saas providers</div>
                                <div className="diamond-bullet">{diamondShape()} Build credit models using this data</div>
                                <div className="diamond-bullet">{diamondShape()} Offer credit solutions to MSMEs based on this data</div>
                                <div className="diamond-bullet">{diamondShape()} Help Saas provider in monetizing this data</div>
                            </div>
                            <div className="logo-container"><img src={nk} /></div>
                            <div className="button-container"><button>Know More</button></div>
                        </div>
                    </div>
                </div>

                <div className="quote-container">
                    <h1><i>The best way to predict your future is to create it.</i></h1>
                    <p>Abraham Lincoln</p>
                </div>

                <div className="our-approach-container">
                    <h1 className="title">Our Approach</h1>
                    <p>A platform solution that creates an Efficient (low cost), Calibrated (risk controlled) and Scalable methodology to deliver tech-enabled credit solutions to small businesses (MSMEs). The technology first approach enables Anchors to leverage their existing supply chain data to offer competitive and innovative financial solutions to their ecosystem partners while optimising their margins.</p>

                    <div className="expandable-section">
                        <div className="approach-item-container">
                            <div className="expand-button">
                                {angleDown}
                                <span onClick={() => setDropdownOpen(!dropdownOpen)}>Efficient</span>
                            </div>
                            {/*{dropdownOpen && userDropdownMenu()}*/}

                        </div>
                        <div className="approach-item-container">
                            <div className="expand-button">
                                {angleDown}
                                <span>Calibrated</span>
                            </div>
                        </div>
                        <div className="approach-item-container">
                            <div className="expand-button">
                                {angleDown}
                                <span>Scalable</span>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="our-team-container">
                    <h1 className="title">Our Team</h1>

                    <div className="team-members">
                    <div className="team-member">
                        <img src={vikram} />
                        <div className="info-section">
                            <div className="name-container">
                                <h3 className="name">Vikram Nirula</h3>
                                <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                            </div>
                            <div className="designation">Co-Founder, KreditServe</div>
                            <div className="info">Vikram Nirula has over 20 years of underwriting and investing experience in India. He has been a founding team member of a private equity fund called True North (earlier called India Value Fund) and MD at The Carlyle Group. Vikram has invested in and managed a portfolio of several financial services, consumer and manufacturing companies. Vikram is an MBA from the Indian institute of Management – Bangalore and an engineer (computer science) from the Birla Institute of Technology.</div>
                        </div>
                    </div>

                    <div className="team-member">
                        <img src={saif} />
                        <div className="info-section">
                            <div className="name-container">
                                <h3 className="name">Saif Hasan</h3>
                                <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                            </div>
                            <div className="designation">Co-Founder, KreditServe</div>
                            <div className="info">Saif Hasan has more than 15 years of Sales and Strategic Alliances experience With Consumer Banks and Private Wealth Firm He was Director with IIFL Wealth . Prior to IIFL, he used to head Citibank consumer branches in Mumbai, leading teams on Liabilities, Assets, Insurance, Wealth and Operations. Saif is a Post Graduate in Business Economics( MBE) from University of Delhi and a Graduate in Commerce from BHU.</div>
                        </div>
                    </div>


                    <div className="team-member">
                        <img src={bharat} />
                        <div className="info-section">
                            <div className="name-container">
                                <h3 className="name">Bharat Khemka</h3>
                                <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                            </div>
                            <div className="designation">Founding member, KreditServe</div>
                            <div className="info">Presently Founder, CEO of a software solutions company based in Mumbai. Greater than 17 years of experience in consulting developing and operating end to end solutions for the alternative asset management industry. He holds a MBA and BS in Computer Science from a leading university in United States.</div>
                        </div>
                    </div>


                    <div className="team-member">
                        <img src={prajit} />
                        <div className="info-section">
                            <div className="name-container">
                                <h3 className="name">Prajit Chandrasekhar</h3>
                                <div className="icon"><a href="http://linkedin.com/in/rohitarora2">{linkedin}</a></div>
                            </div>
                            <div className="designation">Head of Operations</div>
                            <div className="info">Prajit has over 20 years of experience in the corporate bank, Investment Bank and Fintech platforms. He was the COO of Morgan Stanley’s Global Research Operations team based in Mumbai. Before joining KreditServe, Prajit headed the Operations at RXIL (TReDS platform). Prajit holds the PGPMAX (Global MBA) degree from Indian School of Business (ISB).</div>
                        </div>
                    </div>
                    </div>

                </div>

            </div>

            <Footer/>
        </div>
    )
};

export default Home;

const ourEdgeSectionItems = [
    {
        title: 'Supply Chain and Financial Expertise',
        content: [
            "Deep understanding of supply chain practices",
            "Experience of underwriting credit and structuring risk",
            "Sound understanding of the needs of institutional risk",
            "Experience of creating financial products for family offices and wealth tech firms"
        ]
    },
    {
        title: 'Technology',
        content: [
            "Customisable digital workflows for speed of implementation",
            "API integrations to access real time transaction data",
            "Proprietary models for automated underwriting",
            "Cloud native designs and micro services architecture",
            "Layered security for database, network and compute resources"
        ]
    }
];

const photos = [
    {
        id: 'p1',
        url: 'https://res.cloudinary.com/dishaa-pratishthaan/image/upload/v1691107668/ktqivlolyemkgwkb8uuy.png'
    },
    {
        id: 'p2',
        url: 'https://res.cloudinary.com/dishaa-pratishthaan/image/upload/v1691107667/jrouso3lreo9jfz7agbr.png',
    },
    {
        id: 'p3',
        url: 'https://res.cloudinary.com/dishaa-pratishthaan/image/upload/v1691107668/yppqus24ct8pnna0uhrk.png',
    },
    {
        id: 'p4',
        url: 'https://res.cloudinary.com/dishaa-pratishthaan/image/upload/v1691107669/brjjqiczlgeqr8ggbzs1.png',
    },
];

