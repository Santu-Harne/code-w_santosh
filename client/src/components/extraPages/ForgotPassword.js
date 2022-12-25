import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from "axios"
import '../formStyles/forgetPass.css'
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify';


function ForgotPassword() {
    const navigate = useNavigate()
    const [data, setData] = useState({
        Email: "santosh.283143@gmail.com1",
    })

    const readValue = (e) => {
        e.preventDefault()
        const { name, value } = e.target
        setData({ ...data, [name]: value })
    }

    const submitHandler = async (e) => {
        e.preventDefault()
        try {
            await axios.post('/auth/forgotPassword', data)
                .then(res => {
                    // console.log("reset password link sent to your email")
                    toast.success(res.data.msg)
                    setData({ Email: "" })
                    navigate('/')
                }).catch(err => toast.error(err.response.data.msg))
        } catch (error) {
            console.log(error.message);
        }

    }

    useEffect(() => {
    }, [data])

    return (
        <div className="container-fluid">
            <div className="card">
                <form className='verifyForm'>
                    <div className='vrfyEmail'>
                        <h1 className="text-primary">Forgot Password?</h1>
                        <span>Enter your email to reset your password</span>
                        <div className="form-group mt-3">
                            <input type="email" name='Email' id="Email" className="form-control mt-3" value={data.Email} onChange={readValue} placeholder='enter your email' autoComplete='off' />
                        </div>
                        <div className="d-flex gap-3 mt-3">
                            <button type='submit' onClick={submitHandler} className='btn btn-primary'>Submit</button>
                            <button type='cancel' className='btn btn-danger'>Cancel</button>
                        </div>
                    </div>
                    <br /><br /><br />
                    <div>
                        <button className='btn text-primary'>Terms</button>
                        <button className='btn text-primary'>Plans</button>
                        <button className='btn text-primary'>Contact Us</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgotPassword
