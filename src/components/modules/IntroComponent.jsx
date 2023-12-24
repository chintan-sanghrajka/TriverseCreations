import React from 'react'
import { useNavigate } from "react-router-dom"


const IntroComponent = ({ head, para, imageClass }) => {
    const navigate = useNavigate()

    return (
        <div className={`image_container ${imageClass}`}>
            <div>
                <h1 className="main_heading mb-4">{head}</h1>
                <p className="main_para mb-5">
                    {para}
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
    )
}

export default IntroComponent