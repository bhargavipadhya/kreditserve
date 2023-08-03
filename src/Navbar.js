import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../src/assets/logo.png';
import './Navbar.scss';

const Navbar = () => {

    const location = useLocation();

    const isActive = (location, path) => {
        if(location.pathname === path) {
            return { color: 'rgb(83,172,224)' }
        } else {
            return {  color: '#000' }
        }
    };


    return(
        <div className="Navbar">

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
