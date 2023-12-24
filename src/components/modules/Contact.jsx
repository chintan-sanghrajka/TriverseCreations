import React from 'react'
import FormComponent from './FormComponent'

const Contact = () => {
    return (
        <>
            <h2 className='section_head text-center ms-0'>Contact Us</h2>
            <div className='container row mt-5 mx-auto'>
                <div className='col-lg-6 col-12 contact_outer_container p-0'>
                    <div className='contact_map'>
                        <iframe title='location' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.40227785144228!2d72.87205800718276!3d19.263377434657496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1b0ee5742a1%3A0x3dd2d9556ef2a85c!2sBharkadevi%20icecream%20cold%20room!5e0!3m2!1sen!2sin!4v1701193047617!5m2!1sen!2sin" style={{ border: 0, width: "100%", height: "400px" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='contact_details_div w-100 p-4'>
                        <div className='d-flex'>
                            <i className="bi bi-geo-alt contact_icon"></i>
                            <p className='contact_para'>Ajit Palace, Dahisar - Mira Rd, near hotel, nearby Street hotel, Pandurang Wadi, Penkarpada, Mira Road East, Mira Bhayandar, Maharashtra 401101</p>
                        </div>
                        <div className='d-flex align-items-center my-2'>
                            <i className="bi bi-telephone contact_icon"></i>
                            <p className='contact_para'>9653278209</p>
                        </div>
                        <div className='d-flex align-items-center'>
                            <i className="bi bi-envelope contact_icon"></i>
                            <p className='contact_para'>triversecreations1111@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className='col-lg-6 col-12 mt-4 mt-lg-0'>
                    <div className='form_container'>
                        <h4 className='form_head'>Let's Get In Touch</h4>
                        <FormComponent />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact