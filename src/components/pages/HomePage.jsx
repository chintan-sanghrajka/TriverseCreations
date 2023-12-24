import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Footer from './../modules/Footer';
import Portfolio from '../modules/Portfolio';
import AboutUsComponent from '../modules/AboutUsComponent';
import IntroComponent from '../modules/IntroComponent';
import Services from '../modules/Services';
import Contact from '../modules/Contact';

const HomePage = () => {

    return (
        <>
            <IntroComponent head={"Triverse Creations"} para={"Welcome to the World of 3D Printing"} imageClass={"image_container_home"} />

            <div className="process_div">
                <h2 className="section_head section_head_mobile">
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
                <div className='timeline_container_small mt-5'>
                    <div className='row'>
                        <div className='col-12 col-md-6'>
                            <div
                                className="timeline_node_desc_small"
                            >
                                <h6 className="timeline_head">Design</h6>
                                <p className="timeline_desc">
                                    Bring your conceptual ideas to us and our skilled team of
                                    designers is ready to meet your needs and turn your concepts
                                    into reality!
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div
                                className="timeline_node_desc_small"
                            >
                                <h6 className="timeline_head">Prototyping</h6>
                                <p className="timeline_desc">
                                    With the help of state of the art 3D technologies we will create
                                    a real life 3D prototype of your idea maintaining the industry
                                    standards.
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div
                                className="timeline_node_desc_small"
                            >
                                <h6 className="timeline_head">Production</h6>
                                <p className="timeline_desc">
                                    With enormous fleet of advanced 3D printers, Triverse Creations
                                    can fulfill your bulk orders maintaining high quality standards.
                                </p>
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div
                                className="timeline_node_desc_small"
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
            </div>

            <div className="dark_container">
                <Services />
            </div>

            <div className='image_section image_section_1'>
                <div className='image_section_shadow'></div>
                <p className='image_section_quote w-75 text-center'>The real power of 3D printing is not in the technology itself but in the ability to make unique and customized objects.
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
                <p className='image_section_quote w-75 text-center'>Explore the new reality with futuristic technology</p>
            </div>

            <div className='light_container'>
                <h2 className='section_head text-center ms-0'>About Us</h2>
                <AboutUsComponent />
            </div>

            <div className='dark_container contact_container'>
                <Contact />
            </div>

            <Footer />
        </>
    )
}

export default HomePage