import React from 'react';
import './Footer.scss';
import footerImage from '../src/assets/footer-img.png';

const Footer = () => {
    return(
        <div className="Footer">
            <img src={footerImage} />
            <div className="info">
                <span>2023 KreditServe Financial Advisory Services Pvt. Ltd. | info@kreditserve.com</span>
                <span>Developed by <a href="https://bhargavipadhya.netlify.app/">Bhargavi Padhya</a> for Interview</span>
            </div>
        </div>
    )
};

export default Footer;
