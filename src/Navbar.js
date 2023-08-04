import React, {useRef, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../src/assets/logo.png';
import './Navbar.scss';
import {phoneCheck} from "./browserCheck";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {

    const location = useLocation();
    const [isMenuClicked, setMenuClick] = useState(false);
    let hamburgerMenuRef = useRef();

    const isActive = (location, path) => {
        if(location.pathname === path) {
            return { color: 'rgb(83,172,224)' }
        } else {
            return {  color: '#000' }
        }
    };

    const handleMenuClick = () => {
        setMenuClick(!isMenuClicked);
    };

    const bars = <FontAwesomeIcon icon={faBars} />



    const hamburgerMenu = () => (
        <div className="toolbar" ref={hamburgerMenuRef}>

            <div className="nav-bar">
               <span className="nav-logo__name">


                   <Link to="/" className='logo-container-mobile'>
                       <img src={logo} className="logo-mobile"/>
                   </Link>

                   <span className="menu-button" onClick={handleMenuClick}>
                       {bars}
                   </span>

               </span>
            </div>

            { menuData.length && (
                <nav className={` hamburger-menu ${isMenuClicked ? `show` : ``}`}>
                    <div className="close-menu">
                        <div>Welcome!</div>
                        <span onClick={() => setMenuClick(false)} className="close-button"><i className="fa fa-times"/></span>
                    </div>

                    <ul className="menu-items">
                        { menuData.map((item) =>
                            <li key={item.label} className="menu-item" style={isActive(history, `${item.url}`)}>
                                <Link to={item.url} className="menu-link">{item.label}</Link>
                            </li>
                        )}
                    </ul>
                </nav>
            )}
        </div>
    );

    return(
        <div className="Navbar">
            {phoneCheck() ? hamburgerMenu() :

                <div className="desktop-Navbar">
                    <div className="nav-bar">
                <span className="navbar_logo"> {/* Section 1 */}
                    <Link to="/" className='logo-container'>
                           <img src={logo} alt="Kreditserve logo" className="logo"/>
                       </Link>
                </span>

                        <span className="nav-menu-items-container"> {/* Section 2 */}
                            <ul className="nav-menu-items">
                           { menuData.map((item) => (
                               <li key={item.id} className="menu-item">
                                   <Link to={item.url} className="menu-link" style={isActive(location, `${item.url}`)}>
                                       {item.label}
                                   </Link>

                               </li>
                           ))}
                       </ul>
                </span>
                    </div>
                </div>
            }

        </div>

    )
};

export default Navbar;

const menuData = [
    {
        id: 1,
        label: 'Home',
        url: '/',
        dropdown: false
    },
    {
        id: 2,
        label: 'About',
        url: '/about',
        dropdown: false
    },
    {
        id: 3,
        label: 'Solutions',
        url: '/solutions',
        dropdown: false
    },
];
