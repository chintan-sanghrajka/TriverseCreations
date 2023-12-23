import React, { useState } from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'

const AboutUsComponent = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <div>
            <div className='container mt-5'>
                <p className='about_para'>Founded in 2018, based in Mumbai with 2 printers bed side as a interesting concept to study, ISAGON now stands with a 3D Printing farm with top notch service providers to clients nation wide and holds a Forte in Corporate Gifting Solutions.</p>
                <div className='row'>
                    <div className='col-lg-4 col-12 py-5 numbers_div'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h3 className='count'>
                                {counterOn && <CountUp start={0} end={1000} duration={2} delay={0} />}+
                            </h3>
                        </ScrollTrigger>
                        <p className='count_desc'>Parts Printed</p>
                    </div>
                    <div className='col-lg-4 col-12 py-5 numbers_div'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                            <h3 className='count'>
                                {counterOn && <CountUp start={0} end={25} duration={1} delay={0} />}+
                            </h3>
                        </ScrollTrigger>
                        <p className='count_desc'>Clients Served</p>
                    </div>
                    <div className='col-lg-4 col-12 py-5 numbers_div'>
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