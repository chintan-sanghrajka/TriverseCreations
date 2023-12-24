import React from 'react'

const Services = () => {
    return (
        <>
            <h2 className="section_head text-center ms-0">Our Services</h2>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className='tc_card'>
                            <div className='card_icon_div'>
                                <i className="bi bi-bricks"></i>
                            </div>
                            <h6 className='card_head'>3D Printing</h6>
                            <p className='card_desc'>
                                Revolutionizing the Domain of Additive Manufacturing, this cutting-edge technology offers complete creative freedom, eliminating the need for die molding and intricate processes. It seamlessly transforms conceptual ideas into reality, providing a 360° scope for development.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className='tc_card'>
                            <div className='card_icon_div'>
                                <i className="bi bi-boxes"></i>
                            </div>
                            <h6 className='card_head'>3D Modeling</h6>
                            <p className='card_desc'>
                                From idea to software, from basic to extremely detailed, our designing team provides zero margin for errors. We use the best software’s available targeting major technical industries.
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className='tc_card'>
                            <div className='card_icon_div'>
                                <i className="bi bi-gift"></i>
                            </div>
                            <h6 className='card_head'>Gifting Solutions</h6>
                            <p className='card_desc'>
                                Discover unique products and unheard-of ideas with TRIVERSE CREATIONS, your go-to for gifts tailored for both businesses and individuals. Our efficient production capacity allows us to offer quick gifting options year-round, perfect for any occasion and corporate needs!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 col-xl-3 col-lg-6 mb-4 mb-xl-0">
                        <div className='tc_card'>
                            <div className='card_icon_div'>
                                <i className="bi bi-box-seam"></i>
                            </div>
                            <h6 className='card_head'>Batch Manufacturing</h6>
                            <p className='card_desc'>
                                A 3D printing facility serving 25+ printers and several technologies we lead in serving Small to Medium batch manufacturing of parts/products.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services