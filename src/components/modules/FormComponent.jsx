import React, { useReducer, useState } from 'react'
import FormInput from './FormInput'
import axios from 'axios'
import { BASE_URL } from '../helper/helper'

const FormComponent = () => {
    const [data, setData] = useState({})
    const initialValue = {
        noName: false,
        noContact: false,
        noEmail: false,
        noMessage: false,
        invalidEmail: false,
        invalidContact: false,
    }
    const onChangeHandler = (e) => {
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const reducer = (state, action) => {
        switch (action.type) {
            case "noName":
                return {
                    ...state,
                    noName: action.payload,
                }
            case "noContact":
                return {
                    ...state,
                    noContact: action.payload
                }
            case "noEmail":
                return {
                    ...state,
                    noEmail: action.payload
                }
            case "noMessage":
                return {
                    ...state,
                    noMessage: action.payload
                }
            case "invalidEmail":
                return {
                    ...state,
                    invalidEmail: action.payload
                }
            case "invalidContact":
                return {
                    ...state,
                    invalidContact: action.payload
                }
            case "reset":
                return {
                    state: initialValue
                }
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(reducer, initialValue);

    const submitHandler = () => {
        dispatch({ type: "reset" })
        if (data.name === undefined || data.name === "") {
            dispatch({ type: "noName", payload: true })
        }
        else if (data.contact === undefined || data.contact === "") {
            dispatch({ type: "noContact", payload: true })
        }
        else if (data.email === undefined || data.email === "") {
            dispatch({ type: "noEmail", payload: true })
        }
        else if (data.message === undefined || data.message === "") {
            dispatch({ type: "noMessage", payload: true })
        }
        else {
            if (!/^\d{10}$/.test(data.contact)) {
                dispatch({ type: "invalidContact", payload: true })
            }
            else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
                dispatch({ type: "invalidEmail", payload: true })
            }
            else {
                sendMail()
            }
        }
    }

    const sendMail = () => {
        axios.post(`${BASE_URL}contact-us-mail`, {
            name: data.name,
            contact: data.contact,
            email: data.email,
            message: data.message
        })
    }

    return (
        <div className=''>
            <FormInput props={{ type: "text", name: "name", placeholder: "Full Name", value: data.name, changeHandler: onChangeHandler }} />
            {state.noName && <p className='error_msg'>Enter Your Name</p>}
            <FormInput props={{ type: "number", name: "contact", placeholder: "Contact No", value: data.contact, changeHandler: onChangeHandler }} />
            {state.noContact && <p className='error_msg'>Enter Contact Number</p>}
            {state.invalidContact && <p className='error_msg'>Enter Valid Contact Number</p>}
            <FormInput props={{ type: "email", name: "email", placeholder: "Email Id", value: data.email, changeHandler: onChangeHandler }} />
            {state.noEmail && <p className='error_msg'>Enter Your Email ID</p>}
            {state.invalidEmail && <p className='error_msg'>Enter Valid Email Id</p>}
            <textarea className='form_input' rows={5} placeholder='Write Your Message' onChange={onChangeHandler} value={data.message} name='message' />
            {state.noMessage && <p className='error_msg'>Enter Your Message</p>}
            <button className='form_submit_button' onClick={submitHandler}>Submit</button>
        </div>
    )
}

export default FormComponent