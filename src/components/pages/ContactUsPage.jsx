import React, { useEffect } from 'react'
import IntroComponent from '../modules/IntroComponent'
import Footer from '../modules/Footer'
import Contact from '../modules/Contact'

const ContactUsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <IntroComponent head={"Triverse Creations"} para={"Welcome to the World of 3D Printing"} imageClass={"image_container_contact"} />
            <div className='dark_container contact_container'>
                <Contact />
            </div>
            <Footer />
        </>
    )
}

export default ContactUsPage