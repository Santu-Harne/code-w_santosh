import React, { useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import axios from "axios"
import '../formStyles/verify.css'


const VerifiedEmail = () => {
    const params = useParams()
    const registerToken = params.registerToken

    const isVerified = async () => {
        try {
            await axios.get(`/auth/register/verify/${registerToken}`)
                .then(res => {
                    console.log('account verified')
                }).catch(err => console.log(err.message))
        } catch (error) {
            console.log(error.message);
        }
    }
    useEffect(() => {
        isVerified()
    }, [])
    return (
        <div className='container-fluid'>
            <div className='card'>
                <form className='verifyForm'>
                    <div className='vrfyEmail'>
                        <h1>Your account is Verified</h1>
                        <span>Didn't receive an email? <a>Try Again</a></span>
                    </div>

                    <div className='skpNow'>
                        <button className='btn btn-primary'> Skip for now</button>
                    </div>

                    <div className='nextBtn'>
                        <NavLink to={'/auth/login'} className="btn btn-primary nxt">Login</NavLink>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default VerifiedEmail