import React from 'react'
import portfolio1 from './../../media/portfolio/portfolio_1.jpg'
import portfolio2 from './../../media/portfolio/portfolio_2.jpg'
import portfolio3 from './../../media/portfolio/portfolio_3.jpg'
import portfolio4 from './../../media/portfolio/portfolio_4.jpg'
import portfolio5 from './../../media/portfolio/portfolio_5.jpg'
import portfolio6 from './../../media/portfolio/portfolio_6.jpg'

const Portfolio = () => {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-xl-4 col-lg-6 p-0 mb-4'>
                    <div className='portfolio_image_div'>
                        <div className='portfolio_image_shadow_div'>
                            <p className='portfolio_name'>Ganesha</p>
                        </div>
                        <img src={portfolio1} alt="" className='w-100 h-100' />
                    </div>
                </div>
                <div className='col-12 col-xl-4 col-lg-6 p-0 mb-4'>
                    <div className='portfolio_image_div'>
                        <div className='portfolio_image_shadow_div'>
                            <p className='portfolio_name'>Trophies</p>
                        </div>
                        <img src={portfolio2} alt="" className='w-100 h-100' />
                    </div>
                </div>
                <div className='col-12 col-xl-4 col-lg-6 p-0 mb-4'>
                    <div className='portfolio_image_div'>
                        <div className='portfolio_image_shadow_div'>
                            <p className='portfolio_name'>Pen Stand</p>
                        </div>
                        <img src={portfolio3} alt="" className='w-100 h-100' />
                    </div>
                </div>
                <div className='col-12 col-xl-4 col-lg-6 p-0 mb-4'>
                    <div className='portfolio_image_div'>
                        <div className='portfolio_image_shadow_div'>
                            <p className='portfolio_name'>Pen Stand</p>
                        </div>
                        <img src={portfolio4} alt="" className='w-100 h-100' />
                    </div>
                </div>
                <div className='col-12 col-xl-4 col-lg-6 p-0 mb-4'>
                    <div className='portfolio_image_div'>
                        <div className='portfolio_image_shadow_div'>
                            <p className='portfolio_name'>Pen Stand</p>
                        </div>
                        <img src={portfolio5} alt="" className='w-100 h-100' />
                    </div>
                </div>
                <div className='col-12 col-xl-4 col-lg-6 p-0 mb-4'>
                    <div className='portfolio_image_div'>
                        <div className='portfolio_image_shadow_div'>
                            <p className='portfolio_name'>Pen & Mobile Stand</p>
                        </div>
                        <img src={portfolio6} alt="" className='w-100 h-100' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio