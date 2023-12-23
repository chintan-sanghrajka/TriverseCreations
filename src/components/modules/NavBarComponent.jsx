import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import logo from './../../logos/Triverse_Creations_Logo_transperent.png'

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)
    const navigate = useNavigate()
    const [nav, setNav] = useState(false)

    const hamburgerHandler = () => {
        setShowNav(!showNav)
    }

    const navClickHandler = () => {
        setNav(!nav)
    }

    return (
        <>
            <div className='navbar_outer_div'>
                <div className='navbar_side_div'>
                    <h4 className='navbar_logo'><img className='navbar_logo_image' src={logo} alt='logo' />Triverse Creations</h4>
                </div>
                <div className={nav ? 'navbar_center_div navbar_transform' : 'navbar_center_div'}>
                    {
                        nav &&
                        <div className='d-flex justify-content-between'>
                            <img className='navbar_logo_image' src={logo} alt='logo' />
                            <div className='navbar_hamburger' onClick={navClickHandler}>
                                <i className="bi bi-x-lg"></i>
                            </div>
                        </div>
                    }
                    <ul className='navbar_list'>
                        <li><NavLink to="/services">Services</NavLink></li>
                        <li><Link to="/about-us">About Us</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </div>
                <div className='navbar_side_div navbar_hamburger_div' onClick={hamburgerHandler}>
                    <div className='navbar_hamburger' onClick={navClickHandler}>
                        <i className="bi bi-list"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar