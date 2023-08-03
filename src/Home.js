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

const Home = () => {

    const [selectedTitle, setSelectedTitle] = useState('');

    useEffect(() => {
        setSelectedTitle('Supply Chain and Financial Expertise');
        console.log(selectedTitle)
    }, []);

    const diamondShape = () => (
        <div className="diamond-shape" />
    );


    return(
        <div className="Home">
            <Navbar/>

            <div>
                <div className="banner-section">banner</div>


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

                    <div className="">

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

