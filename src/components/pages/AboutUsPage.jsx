import React, { useEffect } from 'react'
import IntroComponent from '../modules/IntroComponent'
import Footer from '../modules/Footer'
import AboutUsComponent from '../modules/AboutUsComponent'

const AboutUsPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <IntroComponent head={"Triverse Creations"} para={"Welcome to the World of 3D Printing"} imageClass={"image_container_about"} />
            <div className='dark_container'>
                <h2 className='section_head text-center ms-0'>About Us</h2>
                <AboutUsComponent />
            </div>
            <Footer />
        </>
    )
}

export default AboutUsPage