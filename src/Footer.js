import React from 'react';
import './Footer.scss';
import footerImage from '../src/assets/footer-img.png';
import footerImageMobile from './assets/footer-img-mobile.png';
import {phoneCheck} from "./browserCheck";

const Footer = () => {
    return(
        <div className="Footer">
            <img src={phoneCheck() ? footerImageMobile : footerImage} />
            <div className={phoneCheck() ? "info-mobile" : "info"}>
                <div>2023 KreditServe Financial Advisory Services Pvt. Ltd. | info@kreditserve.com</div>
                <div>Developed by <a href="https://bhargavipadhya.netlify.app/">Bhargavi Padhya</a> for Interview</div>
            </div>
        </div>
    )
};

export default Footer;
