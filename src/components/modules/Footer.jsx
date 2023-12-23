import React from 'react'
import { useNavigate } from 'react-router-dom'
import logo from './../../logos/Triverse_Creations_Logo.webp'

const Footer = () => {
    console.log(logo)
    const navigate = useNavigate()
    return (
        <div className='footer_container container-fluid'>
            <div className='row'>
                <div className='col-lg-5 col-12 footer_main  py-5 py-lg-0'>
                    <div>
                        <div className='footer_logo_div'>
                            <img src={logo} alt='triverse_creations_logo' style={{ width: "80px", height: "80px" }} />
                        </div>
                        <h1 className='footer_logo'>Triverse Creations</h1>
                        <div className='footer_logo_div'>
                            <div className='icon_div'>
                                <i className="bi bi-twitter-x footer_icon"></i>
                            </div>
                            <div className='icon_div'>
                                <i className="bi bi-meta footer_icon"></i>
                            </div>
                            <div className='icon_div'>
                                <i className="bi bi-linkedin footer_icon"></i>
                            </div>
                            <div className='icon_div'>
                                <i className="bi bi-instagram footer_icon"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-7 col-12 footer_info_container'>
                    <div className='footer_info_div'>
                        <h4 className='footer_head'>Useful Links</h4>
                        <div className='d-flex align-items-center mb-2'>
                            <i className="bi bi-chevron-right footer_element_icon"></i>
                            <p className='footer_element' onClick={() => navigate("/home")}>Home</p>
                        </div>
                        <div className='d-flex align-items-center mb-2'>
                            <i className="bi bi-chevron-right footer_element_icon"></i>
                            <p className='footer_element' onClick={() => navigate("/about-us")}>About Us</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i className="bi bi-chevron-right footer_element_icon"></i>
                            <p className='footer_element' onClick={() => navigate("/contact")}>Contact Us</p>
                        </div>
                    </div>
                    <div className='footer_info_div'>
                        <h4 className='footer_head'>Our Services</h4>
                        <div className='d-flex align-items-center mb-2'>
                            <i className="bi bi-chevron-right footer_element_icon"></i>
                            <p className='footer_element' onClick={() => navigate("/services")}>3D Printing</p>
                        </div>
                        <div className='d-flex align-items-center mb-2'>
                            <i className="bi bi-chevron-right footer_element_icon"></i>
                            <p className='footer_element' onClick={() => navigate("/services")}>3D Modeling</p>
                        </div>
                        <div className='d-flex align-items-center mb-2'>
                            <i className="bi bi-chevron-right footer_element_icon"></i>
                            <p className='footer_element' onClick={() => navigate("/services")}>Gifting</p>
                        </div>
                        <div className='d-flex align-items-center mb-2'>
                            <i className="bi bi-chevron-right footer_element_icon"></i>
                            <p className='footer_element' onClick={() => navigate("/services")}>Batch Manufacturing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer