import React from 'react'

const FormInput = ({ props }) => {
    return (
        <div>
            <input type={props.type} name={props.name} placeholder={props.placeholder}
                className={`form_input ${props.type === 'textarea' ? 'form_textarea' : ''}`} onChange={props.changeHandler} value={props.value} />
        </div>
    )
}

export default FormInput