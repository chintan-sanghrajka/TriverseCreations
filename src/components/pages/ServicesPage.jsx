import React, { useEffect } from 'react'
import IntroComponent from '../modules/IntroComponent'
import Footer from '../modules/Footer'
import Services from '../modules/Services'
import Portfolio from '../modules/Portfolio'

const ServicesPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <IntroComponent head={"Triverse Creations"} para={"Welcome to the World of 3D Printing"} imageClass={"image_container_services"} />
            <div className='light_container'>
                <Services />
            </div>
            <div className='dark_container'>
                <h2 className='section_head text-center ms-0'>Portfolio</h2>
                <Portfolio />
            </div>
            <Footer />
        </>
    )
}

export default ServicesPage