import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const AboutUsComponent = () => {
    console.log()

    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <div className='container mt-5'>
                <p className='about_para'>Welcome to Triverse Creations, a Mumbai-based 3D printing venture established on November 11, 2023. Committed to delivering exceptional services, we operate with a fleet of 20+ advanced printers, ensuring precision and innovation in every project. Our focus on sustainability sets us apart, minimizing waste while maximizing efficiency. Beyond quality and competitive pricing, we aspire to expand our capabilities by growing our machine fleet. Join us on this transformative journey, where each creation reflects our passion, precision, and commitment to excellence.</p>
                <div className='row'>
                    <div className='col-md-4 col-12 py-md-5 py-2 numbers_div'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h3 className='count'>
                                {counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}+
                            </h3>
                        </ScrollTrigger>
                        <p className='count_desc'>Parts Printed</p>
                    </div>
                    <div className='col-md-4 col-12 py-md-5 py-2 numbers_div'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h3 className='count'>
                                {counterOn && <CountUp start={0} end={25} duration={1} delay={0} />}+
                            </h3>
                        </ScrollTrigger>
                        <p className='count_desc'>Clients Served</p>
                    </div>
                    <div className='col-md-4 col-12 py-md-5 py-2 numbers_div'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h3 className='count'>
                                {counterOn && <CountUp start={0} end={20} duration={1} delay={0} />}+
                            </h3>
                        </ScrollTrigger>
                        <p className='count_desc'>Numbers of Printers</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUsComponent