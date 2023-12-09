import React from 'react'
import { useNavigate } from "react-router-dom"
import Accordion from 'react-bootstrap/Accordion';
import FormComponent from './../modules/FormComponent';
import Footer from './../modules/Footer';
import Portfolio from '../modules/Portfolio';
import AboutUsComponent from '../modules/AboutUsComponent';

const HomePage = () => {
    const navigate = useNavigate()

    return (
        <>
            <div className="image_container">
                <div>
                    <h1 className="main_heading mb-4">Triverse Creations</h1>
                    <p className="main_para mb-5">
                        Welcome to the World of 3D Printing
                    </p>
                    <button
                        className="contact_us_button"
                        onClick={() => {
                            navigate(`/contact`)
                        }}
                    >
                        Get Started
                    </button>
                </div>
            </div>

            <div className="process_div">
                <h2 className="section_head">
                    Design to delivery all at one place...
                </h2>
                <div className="timeline_container">
                    <div className="timeline_node">
                        <div
                            className="timeline_node_desc timeline_node_desc_left"
                        >
                            <h6 className="timeline_head">Design</h6>
                            <p className="timeline_desc">
                                Bring your conceptual ideas to us and our skilled team of
                                designers is ready to meet your needs and turn your concepts
                                into reality!
                            </p>
                        </div>
                        <i className="bi bi-pen"></i>
                    </div>
                    <div className="timeline_path"></div>
                    <div className="timeline_node">
                        <i className="bi bi-pentagon-fill"></i>
                        <div
                            className="timeline_node_desc timeline_node_desc_bottom"
                        >
                            <h6 className="timeline_head">Prototyping</h6>
                            <p className="timeline_desc">
                                With the help of state of the art 3D technologies we will create
                                a real life 3D prototype of your idea maintaining the industry
                                standards.
                            </p>
                        </div>
                    </div>
                    <div className="timeline_path"></div>
                    <div className="timeline_node">
                        <i className="bi bi-gear"></i>
                        <div
                            className="timeline_node_desc timeline_node_desc_top"
                        >
                            <h6 className="timeline_head">Production</h6>
                            <p className="timeline_desc">
                                With enormous fleet of advanced 3D printers, Triverse Creations
                                can fulfill your bulk orders maintaining high quality standards.
                            </p>
                        </div>
                    </div>
                    <div className="timeline_path"></div>
                    <div className="timeline_node">
                        <i className="bi bi-truck"></i>
                        <div
                            className="timeline_node_desc timeline_node_desc_right"
                        >
                            <h6 className="timeline_head">Delivery</h6>
                            <p className="timeline_desc">
                                Ensuring a swift response has always been a top priority at
                                Trivers Creations. What sets us apart is our ability to deliver
                                quality 3D Printed Products with perfect finishing touch.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="dark_container">
                <h2 className="section_head text-center ms-0">Our Services</h2>
                <div className="container my-5">
                    <div className="row">
                        <div className="col-3">
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
                        <div className="col-3">
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
                        <div className="col-3">
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
                        <div className="col-3">
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
            </div>

            <div className='image_section image_section_1'>
                <div className='image_section_shadow'></div>
                <p className='image_section_quote w-50'>The real power of 3D printing is not in the technology itself but in the ability to make unique and customized objects.
                </p>
            </div>

            <div className='light_container'>
                <h2 className='section_head text-center ms-0'>Technologies</h2>
                <div className='container mt-5'>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>FDM</Accordion.Header>
                            <Accordion.Body>
                                Fused Deposition Modeling (FDM) Technology works with specialized 3D printers and production-grade thermoplastics to build strong, durable and dimensionally stable parts with the best accuracy and repeatability of any 3D printing technology.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>SLA</Accordion.Header>
                            <Accordion.Body>
                                Stereolithography (SLA) 3D printing is the most common resin 3D printing process that has become vastly popular for its ability to produce high-accuracy, isotropic, and watertight prototypes and end-use parts in a range of advanced materials with fine features and smooth surface finish.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>SLS</Accordion.Header>
                            <Accordion.Body>
                                Selective Laser Sintering (SLS) is an additive manufacturing process that belongs to the Powder Bed Fusion family. In SLS 3D printing, a laser selectively sinters the particles of a polymer powder, fusing them together and building a part, layer by layer. The materials used in SLS are thermoplastic polymers that come in a granular form.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>DLP</Accordion.Header>
                            <Accordion.Body>
                                Digital Light Processing (DLP) is a 3D printing technology used to rapidly produce photopolymer parts. It’s very similar to SLA with one significant difference — where SLA machines use a laser that traces a layer, a DLP machine uses a projected light source to cure the entire layer at once.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Polyjet</Accordion.Header>
                            <Accordion.Body>
                                PolyJet is a 3D printing technology that builds parts by jetting thousands of photopolymer droplets onto a build platform and solidifying them with a UV light. It’s one of the fastest and most accurate 3D printing technologies currently available.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

            <div className='dark_container'>
                <h2 className='section_head text-center ms-0'>Portfolio</h2>
                <Portfolio />
            </div>

            <div className='image_section image_section_2'>
                <div className='image_section_shadow'></div>
                <p className='image_section_quote'>Explore the new reality with futuristic technology</p>
            </div>

            <div className='light_container'>
                <h2 className='section_head text-center ms-0'>About Us</h2>
                <AboutUsComponent />
            </div>

            <div className='dark_container'>
                <h2 className='section_head text-center ms-0'>Contact Us</h2>
                <div className='container row mt-5 mx-auto'>
                    <div className='col-6 contact_outer_container p-0'>
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
                    <div className='col-6'>
                        <div className='form_container'>
                            <h4 className='form_head'>Let's Get In Touch</h4>
                            <FormComponent />
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default HomePage